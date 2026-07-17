from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/feedback", methods=["POST"])
def feedback():
    data = request.json

    notes = data.get("notes", "")

    if len(notes) > 20:
        message = "Great interaction! Notes are detailed."
    else:
        message = "Please provide more detailed discussion notes."

    return jsonify({
        "feedback": message
    })

if __name__ == "__main__":
    app.run(debug=True)