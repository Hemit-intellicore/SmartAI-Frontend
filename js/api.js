// Base API URL - Update this with your actual backend URL
const API_URL = "https://your-api-url.com/api/v1"; 

// Function to register a new user
async function registerUser(userData) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });
    return response.json();
}

// Function to log in a user
async function loginUser(credentials) {
    const response = await fetch(`${API_URL}/token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
    });
    return response.json();
}

// Function to delete user account
async function deleteAccount(token) {
    const response = await fetch(`${API_URL}/account`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });
    return response.json();
}

// Function to upload a document
async function uploadDocument(file, token) {
    const formData = new FormData();
    formData.append("document", file);

    const response = await fetch(`${API_URL}/documents/`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData
    });
    return response.json();
}

// Function to chat with AI
async function chatWithAI(message, token) {
    const response = await fetch(`${API_URL}/chat/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ message })
    });
    return response.json();
}

// Function to clear chat history
async function clearChat(token) {
    const response = await fetch(`${API_URL}/chat/`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.json();
}
