import { places } from "../data/places.mjs";

const container = document.querySelector("#cards");

// CREATE CARDS
places.forEach((place, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.gridArea = `card${index + 1}`;

    card.innerHTML = `
    <figure>
        <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>

    <div class="text">
        <h2>${place.name}</h2>
        <p>${place.description}</p>
        <address>${place.address}</address>
        <button>Learn More</button>
    </div>
    `;

  container.appendChild(card);
});


// LOCAL STORAGE
const msg = document.querySelector("#visitMessage");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  msg.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (days < 1) {
    msg.textContent = "Back so soon! Awesome!";
  } else {
    msg.textContent = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
  }
}

localStorage.setItem("lastVisit", now);