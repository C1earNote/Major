from telethon import TelegramClient, errors
from telethon.tl.functions.channels import JoinChannelRequest
import os
from dotenv import load_dotenv
load_dotenv()

api_id = os.getenv("Api_id")
api_hash = os.getenv("Api_hash")

SESSION = "session_name"

client = TelegramClient(SESSION, api_id, api_hash)


async def join_and_get_entity(client, link_or_username):
    if "t.me/+" in link_or_username or "+" in link_or_username:
        print("❌ Private links not supported.")
        return None

    username = (
        link_or_username.split("t.me/")[-1].strip().lstrip("/")
        if "t.me/" in link_or_username
        else link_or_username.strip()
    )

    try:
        await client(JoinChannelRequest(username))
        print(f"✅ Joined {username}")
    except errors.UserAlreadyParticipantError:
        print(f"⚠️ Already a member of {username}")
    except Exception as e:
        print(f"❌ Could not join: {e}")

    try:
        entity = await client.get_entity(username)
        return entity
    except Exception as e:
        print(f"❌ Could not resolve entity: {e}")
        return None


async def scrape_messages(client, entity, limit=100):
    data = []
    print("📩 Fetching messages...")

    async for message in client.iter_messages(entity, limit=limit):
        if not message.text:
            continue

        sender = await message.get_sender()
        if sender:
            name = f"{sender.first_name or ''} {sender.last_name or ''}".strip()
            username = sender.username or "N/A"
        else:
            name = "Unknown"
            username = "N/A"

        # Note: phone number only available if sender is in your contacts
        phone = getattr(sender, "phone", None)
        phone = phone if phone else "Hidden/Unavailable"

        formatted = (
            f"Name: {name}\n"
            f"Username: {username}\n"
            f"Phone: {phone}\n"
            f"Date: {message.date}\n"
            f"Message: {message.text}\n"
            + "-" * 50 + "\n"
        )

        print(formatted)
        data.append(formatted)

    # Save to file
    file_path = os.path.join(os.getcwd(), "messages.txt")
    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(data)

    print(f"💾 Saved {len(data)} messages to {file_path}")


async def main():
    await client.start()
    target = "https://t.me/testing788623"  # Example public group
    entity = await join_and_get_entity(client, target)

    if entity:
        await scrape_messages(client, entity, limit=50)
    else:
        print("🚫 Could not join or resolve entity.")


with client:
    client.loop.run_until_complete(main())
