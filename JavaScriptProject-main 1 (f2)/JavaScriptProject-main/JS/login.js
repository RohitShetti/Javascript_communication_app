function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with matching email and password
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        localStorage.setItem("loggedInUser", email); // Store the email in localStorage
        localStorage.setItem("loggedInUserFullName", user.fullName); // Store the fullName for the welcome message

        // Redirect to loginSuccessful.html
        window.location.href = "loginSuccesfull.html";
    } else {
        alert('Invalid credentials. Please try again.');
    }
}