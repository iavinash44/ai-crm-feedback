from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class FeedbackRequest(BaseModel):
    notes: str

# API endpoint
@app.post("/feedback")
def feedback(data: FeedbackRequest):
    notes = data.notes

    if len(notes) >= 30:
        return {
            "feedback": "🤖 Excellent discussion. The interaction was detailed."
        }

    return {
        "feedback": "🤖 Please add more details to improve the interaction log."
    }