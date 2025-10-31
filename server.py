from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

# HTML serve karne ke liye (agar index.html same folder me hai)
@app.route('/')
def home():
    return app.send_static_file('index.html')

# Messages save aur get karne ke liye
@app.route('/messages', methods=['GET', 'POST'])
def messages():
    file_path = "messages.txt"

    if request.method == 'POST':
        data = request.json
        message = data.get('message', '')
        with open(file_path, 'a', encoding='utf-8') as f:
            f.write(message + '\n')
        return jsonify({"status": "Message saved!"})

    # GET method: sab messages bhejna
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            messages = f.readlines()
    else:
        messages = []

    return jsonify({"messages": [msg.strip() for msg in messages]})

if __name__ == '__main__':
    app.run(debug=True)
