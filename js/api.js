// /js/api.js

const API_BASE = "https://your-domain.com/api/v1"; // Replace with your real API base

// Register
async function registerUser(data) {
  const response = await fetch(`${API_BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Login
async function loginUser(data) {
  const response = await fetch(`${API_BASE}/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Upload document
async function uploadDocument(file, token) {
  const formData = new FormData();
  formData.append("document", file);

  const response = await fetch(`${API_BASE}/documents/`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  return response.json();
}

// Query document
async function queryDocument(query, token) {
  const response = await fetch(`${API_BASE}/query/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });
  return response.json();
}

// Summarize
async function summarizeDocument(text, token) {
  const response = await fetch(`${API_BASE}/summarize/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text }),
  });
  return response.json();
}

// Generate questions
async function generateQuestions(text, token) {
  const response = await fetch(`${API_BASE}/generate-questions/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text }),
  });
  return response.json();
}

// Evaluate answer
async function evaluateAnswer(answer, token) {
  const response = await fetch(`${API_BASE}/evaluate-answer/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ answer }),
  });
  return response.json();
}

// Chat with AI
async function chatWithAi(message, token) {
  const response = await fetch(`${API_BASE}/chat/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ message }),
  });
  return response.json();
}

// Clear chat
async function clearChat(token) {
  const response = await fetch(`${API_BASE}/chat/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}