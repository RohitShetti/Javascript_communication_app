// Fetch the registered user's name from localStorage
const registeredUserName = localStorage.getItem("fullName") || "Guest";
document.getElementById("userName").innerText = registeredUserName;