from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return app.send_static_file('index.html')

@app.route('/messages', methods=['GET', 'POST'])
def messages():
    file_path = "messages.txt"

    if request.method == 'POST':
        data = request.json
        message = data.get('message', '')
        with open(file_path, 'a', encoding='utf-8') as f:
            f.write(message + '\n')
        return jsonify({"status": "Message saved!"})

    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            messages = f.readlines()
    else:
        messages = []

    return jsonify({"messages": [msg.strip() for msg in messages]})

@app.route('/save-link', methods=['POST'])
def save_link():
    try:
        data = request.json
        link = data.get('link', '')
        
        # Save link to Link.txt
        with open('Link.txt', 'w', encoding='utf-8') as f:
            f.write(link)
            
        return jsonify({"status": "success", "message": "Link saved successfully"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
