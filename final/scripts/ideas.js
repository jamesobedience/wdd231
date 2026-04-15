const container = document.querySelector("#ideasContainer");
const dialog = document.querySelector("#ideaModal");
const modalContent = document.querySelector("#modalContent");
const closeBtn = document.querySelector("#closeModal");

async function getIdeas() {
  try {
    const response = await fetch("data/ideas.json");

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    displayIdeas(data);
    saveToLocal(data);

  } catch (error) {
    console.error(error);
    loadFromLocal();

    if (!localStorage.getItem("businessIdeas")) {
      container.innerHTML = "<p>Failed to load ideas.</p>";
    }
  }
}

function displayIdeas(ideas) {
  const fragment = document.createDocumentFragment();

  ideas.forEach(idea => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${idea.image}" alt="${idea.name}" loading="lazy">
      <h3>${idea.name}</h3>
      <p>${idea.description}</p>
      <p><strong>Cost:</strong> ${idea.cost}</p>
      <button class="btn">Learn More</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      openModal(idea);
    });

    fragment.appendChild(card);
  });

  container.innerHTML = "";
  container.appendChild(fragment);
}

// CLOSE MODAL
if (closeBtn && dialog) {
  closeBtn.addEventListener("click", () => dialog.close());
}

// OPEN MODAL
function openModal(idea) {
  modalContent.innerHTML = `
    <h2>${idea.name}</h2>
    <img src="${idea.image}" alt="${idea.name}" style="width:100%; border-radius:10px;">
    <p>${idea.description}</p>
    <p><strong>Startup Cost:</strong> ${idea.cost}</p>
    <p><strong>Difficulty:</strong> ${idea.difficulty}</p>
  `;

  dialog.showModal();
}

// LOCAL STORAGE
function saveToLocal(data) {
  localStorage.setItem("businessIdeas", JSON.stringify(data));
}

function loadFromLocal() {
  const stored = localStorage.getItem("businessIdeas");
  if (stored) displayIdeas(JSON.parse(stored));
}

// INIT (FIXED — NO requestIdleCallback ERROR)
function init() {
  loadFromLocal();
  getIdeas();
}

window.addEventListener("load", init);