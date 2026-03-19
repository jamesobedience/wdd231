// Select container
const container = document.querySelector("#members");

// Fetch JSON data
const url = "data/members.json";

async function getMembers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error("Error fetching members:", error);
  }
}

getMembers();

// Display members
function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("section");

    // Membership Badge
    const badge = document.createElement("div");
    badge.classList.add("badge");

    if (member.membership === 3) {
      badge.textContent = "Gold";
      badge.classList.add("gold");
    } else if (member.membership === 2) {
      badge.textContent = "Silver";
      badge.classList.add("silver");
    } else {
      badge.textContent = "Member";
      badge.classList.add("member");
    }

    // Image
    const img = document.createElement("img");
    img.src = "images/" + member.image;
    img.alt = member.name;
    img.loading = "lazy";

    // Name
    const name = document.createElement("h3");
    name.textContent = member.name;

    // Address
    const address = document.createElement("p");
    address.textContent = member.address;

    // Phone
    const phone = document.createElement("p");
    phone.textContent = member.phone;

    // Website
    const link = document.createElement("a");
    link.href = member.website;
    link.textContent = "Visit Website";
    link.target = "_blank";

    // Append elements
    card.appendChild(badge);
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(link);

    container.appendChild(card);
  });
}

// Grid/List Toggle
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});