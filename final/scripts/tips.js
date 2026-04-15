const container = document.querySelector("#tips-container");
const buttons = document.querySelectorAll(".tips-menu button");
const dialog = document.querySelector("#tipModal");
const modalContent = document.querySelector("#modalContent");

// DATA (no fetch needed here)
const tips = [
  { title: "Start Small", category: "start", text: "Begin with what you have and grow gradually." },
  { title: "Know Your Market", category: "start", text: "Understand your customers before starting." },
  { title: "Keep Records", category: "money", text: "Track all your income and expenses." },
  { title: "Save Profits", category: "money", text: "Always save part of your earnings." },
  { title: "Avoid Debt", category: "money", text: "Don't borrow money unless necessary." },
  { title: "Use Social Media", category: "growth", text: "Promote your business online." },
  { title: "Be Consistent", category: "growth", text: "Stay committed and keep improving." },
  { title: "Customer Care", category: "growth", text: "Treat customers well to keep them coming back." },
  { title: "Learn Skills", category: "start", text: "Improve your skills regularly." },
  { title: "Reinvest Money", category: "money", text: "Put profits back into your business." },
  { title: "Advertise", category: "growth", text: "Tell people about your business." },
  { title: "Plan Ahead", category: "start", text: "Have a clear business plan." }
];

// DISPLAY
function displayTips(data) {
  container.innerHTML = "";

  data.forEach(tip => {
    const card = document.createElement("div");
    card.classList.add("tip-card");

    card.innerHTML = `
      <h3>${tip.title}</h3>
      <p>${tip.text}</p>
      <button>Read More</button>
    `;

    // OPEN MODAL
    card.querySelector("button").addEventListener("click", () => {
      modalContent.innerHTML = `
        <h2>${tip.title}</h2>
        <p>${tip.text}</p>
        <p><strong>Category:</strong> ${tip.category}</p>
      `;
      dialog.showModal();
    });

    container.appendChild(card);
  });
}

// FILTER
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    let filtered;

    if (filter === "all") {
      filtered = tips;
    } else {
      filtered = tips.filter(t => t.category === filter);
    }

    displayTips(filtered);

    // save preference
    localStorage.setItem("tipFilter", filter);
  });
});

// CLOSE MODAL
document.querySelector("#closeModal").addEventListener("click", () => {
  dialog.close();
});

// LOAD SAVED FILTER
function loadFilter() {
  const saved = localStorage.getItem("tipFilter");

  if (saved) {
    const filtered = saved === "all"
      ? tips
      : tips.filter(t => t.category === saved);

    displayTips(filtered);
  } else {
    displayTips(tips);
  }
}

// INIT
document.addEventListener("DOMContentLoaded", loadFilter);