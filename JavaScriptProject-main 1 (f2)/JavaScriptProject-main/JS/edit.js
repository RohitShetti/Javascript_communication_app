//Retrieve User Data
const urlParams = new URLSearchParams(window.location.search);
const userIndex = urlParams.get('index');
const users = JSON.parse(localStorage.getItem('users')) || [];

// Pre-fill the form with current user details
const user = users[userIndex];
document.getElementById('fullName').value = user.fullName;
document.getElementById('email').value = user.email;

// Handle form submission to save updated user data
document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get updated values from the form
    const updatedFullName = document.getElementById('fullName').value;
    const updatedEmail = document.getElementById('email').value;

    // Update the user details in the array
    users[userIndex].fullName = updatedFullName;
    users[userIndex].email = updatedEmail;

    // Save updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect back to the user list page
    window.location.href = 'userlists.html';
 });