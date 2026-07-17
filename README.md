# AI-First CRM Feedback Tool

A simple AI-powered CRM application for logging doctor interactions and receiving AI-generated feedback.

## Tech Stack

### Frontend
- React
- Vite
- Redux Toolkit

### Backend
- Flask
- Flask-CORS

## Features

- Log doctor interactions
- Save interactions using Redux
- Store data in LocalStorage
- Delete interactions
- AI-generated feedback from Flask backend
- Form validation
- Responsive user interface

## Project Structure

```
AI-CRM-HCP/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── store/
│   └── package.json
│
├── backend/
│   └── app.py
│
└── README.md
```

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

### Backend

```bash
cd backend
pip install flask flask-cors
python3 app.py
```

Runs on:

```
http://127.0.0.1:5000
```

---

## API Endpoint

### POST /feedback

Request

```json
{
  "notes": "Doctor discussed new medicines."
}
```

Response

```json
{
  "feedback": "Great interaction! Notes are detailed."
}
```

---

## Author

Avinash Kumar