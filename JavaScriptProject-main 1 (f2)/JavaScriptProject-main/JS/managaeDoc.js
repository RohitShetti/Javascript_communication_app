// Allowed Extensions
const allowedExtensions = /(\.pdf|\.docx|\.txt|\.ppt)$/i;
let documentToDeleteIndex = null; // Store the index of the document to delete

// Display documents in the table
function displayDocuments() {
  const documentTableBody = document.getElementById("documentTableBody");
  const documents = JSON.parse(localStorage.getItem("uploads")) || [];

  documentTableBody.innerHTML = "";
  documents.forEach((doc, index) => {
    const row = `<tr>
                    <td>${doc.id}</td>
                    <td>${doc.label}</td>
                    <td>${doc.filename}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="openEditModal(${index})">Edit</button>
                        <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteDocumentModal" onclick="setDocumentToDelete(${index})">Delete</button>
                    </td>
                </tr>`;
    documentTableBody.innerHTML += row;
  });
}

// Set the document to be deleted
function setDocumentToDelete(index) {
  documentToDeleteIndex = index; // Store the index of the document to delete
}

// Handle document deletion when 'Delete' button in the modal is clicked
document
  .getElementById("confirmDeleteButton")
  .addEventListener("click", function () {
    if (documentToDeleteIndex !== null) {
      const documents = JSON.parse(localStorage.getItem("uploads"));
      documents.splice(documentToDeleteIndex, 1); // Remove the selected document
      localStorage.setItem("uploads", JSON.stringify(documents));
      displayDocuments();
      bootstrap.Modal.getInstance(
        document.getElementById("deleteDocumentModal"),
      ).hide(); // Hide modal after deletion
    }
  });

// Add new document
document
  .getElementById("addDocumentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const label = document.getElementById("docLabel").value;
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    // Validate the file extension
    if (!allowedExtensions.test(file.name)) {
      alert("Invalid file extension! Please use .pdf, .docx, .txt, or .ppt.");
      return;
    }

    const filename = file.name; // Use the file's original name
    const documents = JSON.parse(localStorage.getItem("uploads")) || [];
    const newDoc = { id: documents.length + 1, label, filename };
    documents.push(newDoc);
    localStorage.setItem("uploads", JSON.stringify(documents));

    // Clear the form and hide modal
    document.getElementById("addDocumentForm").reset();
    bootstrap.Modal.getInstance(
      document.getElementById("addDocumentModal"),
    ).hide();
    displayDocuments();
  });

// Open edit modal with document details
function openEditModal(index) {
  const documents = JSON.parse(localStorage.getItem("uploads"));
  const doc = documents[index];

  document.getElementById("editDocLabel").value = doc.label;
  document.getElementById("editDocIndex").value = index; // Store the index for saving changes

  const editModal = new bootstrap.Modal(
    document.getElementById("editDocumentModal"),
  );
  editModal.show();
}

// Handle edit form submission
document
  .getElementById("editDocumentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const index = document.getElementById("editDocIndex").value;
    const label = document.getElementById("editDocLabel").value;
    const documents = JSON.parse(localStorage.getItem("uploads"));

    // If a new file is uploaded, validate it
    const editFileInput = document.getElementById("editFileInput");
    const newFile = editFileInput.files[0];

    if (newFile && !allowedExtensions.test(newFile.name)) {
      alert("Invalid file extension! Please use .pdf, .docx, .txt, or .ppt.");
      return;
    }

    // Update the document details
    documents[index].label = label;
    if (newFile) {
      documents[index].filename = newFile.name; // Update filename if a new file is uploaded
    }
    localStorage.setItem("uploads", JSON.stringify(documents));

    // Clear the form and hide modal
    document.getElementById("editDocumentForm").reset();
    bootstrap.Modal.getInstance(
      document.getElementById("editDocumentModal"),
    ).hide();
    displayDocuments();
  });

// Initial display of documents
displayDocuments();
