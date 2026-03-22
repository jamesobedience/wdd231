const container = document.querySelector("#members");

// ✅ FIXED PATH
const url = "data/members.json";

async function getMembers() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Fetch failed");
    }

    const data = await response.json();
    displayMembers(data);

  } catch (error) {
    console.error(error);
  }
}

getMembers();

function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {

    const card = document.createElement("section");

    // BADGE
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

    // IMAGE
    const img = document.createElement("img");
    img.src = "images/" + member.image;
    img.alt = member.name;
    img.loading = "lazy";

    // TEXT
    const name = document.createElement("h3");
    name.textContent = member.name;

    const address = document.createElement("p");
    address.textContent = member.address;

    const phone = document.createElement("p");
    phone.textContent = member.phone;

    const link = document.createElement("a");
    link.href = member.website;
    link.textContent = "Visit Website";
    link.target = "_blank";

    // APPEND
    card.appendChild(badge);
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(link);

    container.appendChild(card);
  });
}

// GRID / LIST
document.querySelector("#grid").onclick = () => {
  container.classList.add("grid");
  container.classList.remove("list");
};

document.querySelector("#list").onclick = () => {
  container.classList.add("list");
  container.classList.remove("grid");
};

// MOBILE MENU
const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});