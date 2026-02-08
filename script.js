// Fetch Verse of the Day
fetch("https://bible-api.com/psalm+46:10")
  .then(res => res.json())
  .then(data => {
    document.getElementById("verse").textContent =
      `“${data.text.trim()}”`;
    document.getElementById("reference").textContent =
      data.reference;
  });

// Dark mode toggle
const toggle = document.getElementById("modeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
};
