// Fetching the logged-in user's full name from local storage
const loggedInUserFullName = localStorage.getItem("loggedInUserFullName") || "Guest"; // Default to Guest if not found
document.getElementById("userName").innerText = `Logged in as: ${loggedInUserFullName}`;

// Function to update the current time in the header
function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("currentTime").innerText = now.toLocaleString(undefined, options);
}

updateTime();
setInterval(updateTime, 1000); // Update time every second

// Function to display chat messages
function displayMessages() {
    const chatContainer = document.getElementById("chatContainer");
    const messages = JSON.parse(localStorage.getItem("chats")) || [];

    chatContainer.innerHTML = "";
    messages.forEach(msg => {
        const messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.innerHTML = `<strong>${msg.user}</strong>: ${msg.text} <div class="message-time">${msg.time}</div>`;
        chatContainer.appendChild(messageElement);
    });

    // Scroll to the bottom to show the latest message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Event listener for sending a message
document.getElementById("sendMessage").addEventListener("click", function () {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim(); // Trim to avoid sending empty messages

    if (messageText === "") return; // Prevent empty messages

    const now = new Date();
    const messageTime = now.toLocaleString(); // Capture current time

    // Get existing messages or create a new array if there are none
    const messages = JSON.parse(localStorage.getItem("chats")) || [];

    // Add the new message with the logged-in user's name
    messages.push({ user: loggedInUserFullName, text: messageText, time: messageTime });
    localStorage.setItem("chats", JSON.stringify(messages)); // Save messages in local storage

    messageInput.value = ""; // Clear the message input field
    displayMessages(); // Display the updated messages
});

// Event listener for refresh button
document.getElementById("refreshButton").addEventListener("click", function () {
    location.reload(); // Refresh the page
});

// Load existing messages on page load
displayMessages();