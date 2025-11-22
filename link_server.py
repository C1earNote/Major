from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

@app.route('/save-link', methods=['POST'])
def save_link():
    try:
        data = request.json
        link = data.get('link', '')
        
        # Save to Link.txt
        with open('Link.txt', 'w', encoding='utf-8') as f:
            f.write(link)
            
        return jsonify({
            "status": "success",
            "message": "Link saved successfully"
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)