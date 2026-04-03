document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  // Format date nicely
  const rawDate = params.get("timestamp");
  const formattedDate = rawDate
    ? new Date(rawDate).toLocaleString()
    : "N/A";

  document.getElementById("results").innerHTML = `
    <div class="result-item">
      <span>First Name</span>
      <strong>${params.get("fname")}</strong>
    </div>

    <div class="result-item">
      <span>Last Name</span>
      <strong>${params.get("lname")}</strong>
    </div>

    <div class="result-item">
      <span>Email</span>
      <strong>${params.get("email")}</strong>
    </div>

    <div class="result-item">
      <span>Phone</span>
      <strong>${params.get("phone")}</strong>
    </div>

    <div class="result-item">
      <span>Business</span>
      <strong>${params.get("business")}</strong>
    </div>

    <div class="result-item">
      <span>Submitted On</span>
      <strong>${formattedDate}</strong>
    </div>
  `;
});