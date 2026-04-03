document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // TIMESTAMP
  // =========================
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }

  // =========================
  // FORM VALIDATION
  // =========================
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {

    let valid = true;

    // Clear errors
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

    if (!valid) {
      e.preventDefault();
    }
  });

  // =========================
  // MODALS (NO onclick)
  // =========================

  // Open modal
  const modalButtons = document.querySelectorAll("[data-modal]");
  modalButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.modal);
      if (modal) modal.showModal();
    });
  });

  // Close modal
  const closeButtons = document.querySelectorAll(".close-btn");
  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.closest("dialog").close();
    });
  });

});


// =========================
// ERROR FUNCTION
// =========================
function showError(input, message) {
  input.classList.add("invalid");
  const error = document.getElementById(input.id + "Error");
  if (error) {
    error.textContent = message;
  }
}