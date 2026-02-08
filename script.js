// Dark Mode Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Verse of the Day (static list – peaceful & reliable)
const verses = [
  {
    text: "Be still, and know that I am God.",
    ref: "Psalm 46:10"
  },
  {
    text: "The Lord is my shepherd; I shall not want.",
    ref: "Psalm 23:1"
  },
  {
    text: "Trust in the Lord with all your heart.",
    ref: "Proverbs 3:5"
  },
  {
    text: "Come to me, all who are weary and burdened, and I will give you rest.",
    ref: "Matthew 11:28"
  },
  {
    text: "The Lord bless you and keep you.",
    ref: "Numbers 6:24"
  }
];

// Pick verse based on day
const today = new Date().getDate();
const verse = verses[today % verses.length];

document.getElementById("verseText").textContent = verse.text;
document.getElementById("verseRef").textContent = verse.ref;
