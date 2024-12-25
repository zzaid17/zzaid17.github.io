
// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import firebaseConfig from './firebaseConfig.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Reference database
const db = getDatabase(app);
var contactFormDB = ref(db, "contactForm")

// Get IDs
const getElementVal = (id) => {
  return document.getElementById(id).value;
}

document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(event) {
    event.preventDefault();
    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message");
    console.log(name, email, message);
    saveMessages(name, email, message)
    // saveMessages value initiates success or error message
      .then(() => {
        showSuccessMessage();
        clearForm();
      })
      .catch((error) => {
        showErrorMessage(error.message);
      });
}

// Save message to Firebase
const saveMessages = (name, email, message) => {
  var newContactForm = push(contactFormDB);
  // Return value passed to saveMessages in submitForm
  return set(newContactForm, {
    name: name,
    email: email,
    message: message,
  })
}

// Success message
const showSuccessMessage = () => {
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  successMessage.classList.remove("hidden");
  successMessage.classList.add("visible");
  errorMessage.classList.remove("visible");
  errorMessage.classList.add("hidden");

  // Remove success message after 3 seconds
  setTimeout(() => {
    successMessage.classList.remove("visible");
    successMessage.classList.add("hidden");
  }, 5000);

};

// Error message
const showErrorMessage = (errorText) => {
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  successMessage.classList.remove("visible");
  successMessage.classList.add("hidden");
  errorMessage.textContent = `Error submitting form: ${errorText}`;
  errorMessage.classList.remove("hidden");
  errorMessage.classList.add("visible");
};

// Clear form inputs
const clearForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
};