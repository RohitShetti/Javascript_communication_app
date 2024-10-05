# Communication App

The **Communication App** is a user management system that allows users to register, view, edit, and delete user data stored in the browser’s **Local Storage**. This project leverages **HTML**, **CSS**, **JavaScript**, and **Bootstrap 5** for a responsive and clean UI, with no backend required. It includes a navigation bar to access different sections such as `Group Chat`, `Manage Users`, `Manage Documents`, and `Logout`.

## Features

- **User Registration**: Users can register by providing their full name and email address.
- **User List Management**: View all registered users in a Bootstrap-styled table with options to edit or delete them.
- **Edit User Details**: Allows editing the user’s full name and email. The updated details are saved in local storage.
- **Delete User Confirmation**: Uses a Bootstrap modal to confirm user deletion before proceeding.
- **Navigation Bar**: Provides easy navigation across different sections like `Group Chat`, `Manage Users`, `Manage Documents`, and `Logout`.

## Technologies Used

- **HTML5**: Structure and layout of the pages.
- **CSS3**: Styling for registration form, user list, and other components.
- **Bootstrap 5.3**: For responsive design and UI components such as the table, buttons, and modals.
- **JavaScript (ES6)**: Handles user input, local storage operations, and dynamic content rendering.
- **Local Storage API**: Data is saved in the browser, allowing the app to persist user information between sessions.

## Pages and Functionalities

1. **index.html**: 
   - User registration form that takes full name, email, and password inputs.
   - On successful registration, redirects the user to the `registerSuccess.html` page.

2. **registerSuccess.html**: 
   - Displays a message confirming successful registration.
   - Provides a link to view the registered users.

3. **userList.html**: 
   - Displays a list of all registered users.
   - Features `Edit` and `Delete` buttons for each user.
   - The `Delete` button triggers a Bootstrap modal for confirmation.
   - The `Edit` button redirects to `edit.html`, where user information can be updated.

4. **edit.html**: 
   - Provides a form to update the full name and email of the user.
   - Saves the updated information to local storage.

## Project Structure

```bash
communication-app/
│
├── index.html             # User registration page
├── registerSuccess.html    # Confirmation page after successful registration
├── userList.html           # Page to display all registered users
├── edit.html               # Edit user details page
├── js/
│   └── main.js             # Handles registration, local storage, and dynamic user list rendering
├── css/
│   └── style.css           # Custom styling for the project
└── README.md               # Project documentation
