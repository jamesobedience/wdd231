document.addEventListener("DOMContentLoaded", () => {

  // Timestamp
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }

  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {

    let valid = true;

    // Clear old errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll("input").forEach(el => el.classList.remove("invalid"));

    // First Name
    const fname = document.getElementById("fname");
    if (fname.value.trim() === "") {
      showError(fname, "First name is required");
      valid = false;
    }

    // Last Name
    const lname = document.getElementById("lname");
    if (lname.value.trim() === "") {
      showError(lname, "Last name is required");
      valid = false;
    }

    // Email
    const email = document.getElementById("email");
    if (!email.value.includes("@")) {
      showError(email, "Enter a valid email");
      valid = false;
    }

    // Phone
    const phone = document.getElementById("phone");
    if (phone.value.trim().length < 7) {
      showError(phone, "Enter a valid phone number");
      valid = false;
    }

    // Business
    const business = document.getElementById("business");
    if (business.value.trim() === "") {
      showError(business, "Business name is required");
      valid = false;
    }

    // STOP submit if invalid
    if (!valid) {
      e.preventDefault();
    }
  });

});

// Show error function
function showError(input, message) {
  input.classList.add("invalid");
  const error = document.getElementById(input.id + "Error");
  if (error) {
    error.textContent = message;
  }
}

// Modal functions
function openModal(id) {
  document.getElementById(id).showModal();
}

function closeModal(id) {
  document.getElementById(id).close();
}