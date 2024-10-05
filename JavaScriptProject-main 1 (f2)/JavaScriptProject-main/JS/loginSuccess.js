// Fetch the logged-in user's full name from localStorage
const loggedInUserFullName = localStorage.getItem("loggedInUserFullName") || "Guest";

// Update the main heading with the welcome message and user's name
document.getElementById("welcomeHeading").innerText = `Welcome To COMMUNICATION APP, ${loggedInUserFullName}!`;