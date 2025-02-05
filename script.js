document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById('registration-form');

  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
  
});

const username = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();


function validateForm(username, email, password) {
  let isValid = true;
  let messages = [];

  // Username Validation
  if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
  }

  // Email Validation
  if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push("Email must contain '@' and '.'.");
  }

  // Password Validation
  if (password.length < 6) {
      isValid = false;
      messages.push("Password must be at least 6 characters long.");
  }

  return { isValid, messages };
}

function displayFeedback(isValid, messages) {
  const feedbackDiv = document.getElementById("feedback");

  // Make feedbackDiv visible
  feedbackDiv.style.display = "block";

  if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // Green color for success
  } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // Red color for errors
  }
}

});