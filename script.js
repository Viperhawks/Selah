/* =====================
   BIBLE VERSES ARRAY
===================== */
const verses = [
  { text: "Be still, and know that I am God.", ref: "Psalm 46:10" },
  { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
  { text: "Trust in the Lord with all your heart.", ref: "Proverbs 3:5" },
  { text: "My grace is sufficient for you.", ref: "2 Corinthians 12:9" },
  { text: "The Lord is close to the brokenhearted.", ref: "Psalm 34:18" },
  { text: "Cast all your anxiety on Him because He cares for you.", ref: "1 Peter 5:7" },
  { text: "The Lord bless you and keep you.", ref: "Numbers 6:24" }
];

/* =====================
   VERSE OF THE DAY
===================== */
const today = new Date().getDate();
const verseOfTheDay = verses[today % verses.length];

document.getElementById("verse").textContent =
  `“${verseOfTheDay.text}”`;

document.getElementById("reference").textContent =
  verseOfTheDay.ref;

/* =====================
   DARK MODE TOGGLE
===================== */
const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
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
