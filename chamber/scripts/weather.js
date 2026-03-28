

/* WEATHER (Benin City, Nigeria) */
const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=6.34&lon=5.62&units=metric&appid=78c2df71253413f5a5b1b7e8a11b3d28";

async function getWeather() {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error("Weather fetch failed");

    const data = await res.json();
    const current = data.list[0];

    // Temperature
    document.getElementById("current-temp").textContent =
      Math.round(current.main.temp) + "°C";

    // Capitalize description
    const desc = current.weather[0].description.replace(/\b\w/g, c => c.toUpperCase());

    document.getElementById("current-weather").textContent = desc;

    document.getElementById("high-temp").textContent =
      Math.round(current.main.temp_max) + "°";

    document.getElementById("low-temp").textContent =
      Math.round(current.main.temp_min) + "°";

    document.getElementById("humidity").textContent =
      current.main.humidity + "%";

    // Sunrise & Sunset
    document.getElementById("sunrise").textContent =
      new Date(data.city.sunrise * 1000).toLocaleTimeString();

    document.getElementById("sunset").textContent =
      new Date(data.city.sunset * 1000).toLocaleTimeString();

    // Icon
    const icon = document.getElementById("weather-icon");
    icon.src = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`;
    icon.alt = desc;

    // Forecast
    document.getElementById("today").textContent =
      "Today: " + Math.round(data.list[0].main.temp) + "°C";

    document.getElementById("tomorrow").textContent =
      "Tomorrow: " + Math.round(data.list[8].main.temp) + "°C";

    document.getElementById("after-tomorrow").textContent =
      "Next Day: " + Math.round(data.list[16].main.temp) + "°C";

  } catch (err) {
    console.error(err);
    document.getElementById("current-weather").textContent =
      "Weather unavailable";
  }
}

getWeather();

/* SPOTLIGHT */
async function getCompanies() {
  try {
    const res = await fetch("data/members.json");

    if (!res.ok) throw new Error("Company fetch failed");

    const companies = await res.json();

    const container = document.getElementById("company-spotlight-container");
    container.innerHTML = ""; // ✅ clear previous content

    // Filter premium
    const premium = companies.filter(c => c.membership >= 2);

    // Shuffle
    const shuffled = premium.sort(() => 0.5 - Math.random());

    // Pick 3
    const selected = shuffled.slice(0, 3);

    selected.forEach(c => {
      const div = document.createElement("div");
      div.classList.add("company-spotlight");

      const level =
        c.membership === 3 ? "Gold" :
        c.membership === 2 ? "Silver" : "Member";

      div.innerHTML = `
        <h4>${c.name}</h4>
        <span class="badge ${level.toLowerCase()}">${level}</span>
        <p>${c.address}</p>
        <p>${c.phone}</p>
        <p>
          <a href="${c.website}" target="_blank" rel="noopener">
            Visit Website
          </a>
        </p>
        <img src="${c.image}" alt="${c.name} logo" width="80" loading="lazy">
      `;

      container.appendChild(div);
    });

  } catch (err) {
    console.error(err);
    document.getElementById("company-spotlight-container").innerHTML =
      "<p>Unable to load companies.</p>";
  }
}

getCompanies();