//Fetching Users from Local Storage
const users = JSON.parse(localStorage.getItem('users')) || [];
const userTableBody = document.getElementById('userTableBody');
let userToDeleteIndex = null;

// Populate table with user data
users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.fullName}</td>
        <td>${user.email}</td>
        <td>
            <a href="edit2.html?index=${index}" class="btn btn-warning btn-sm">Edit</a>
            <a href="#" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="setUserToDelete(${index})">Delete</a>
        </td>`;
         userTableBody.appendChild(row);
    });

function setUserToDelete(index) {
     userToDeleteIndex = index;
}

document.getElementById('confirmDeleteButton').addEventListener('click', function() {
    if (userToDeleteIndex !== null) {
        users.splice(userToDeleteIndex, 1);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.reload();
     }
});