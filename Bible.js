const books = [
"Genesis","Exodus","Leviticus","Numbers","Deuteronomy",
"Joshua","Judges","Ruth","1 Samuel","2 Samuel",
"1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra",
"Nehemiah","Esther","Job","Psalms","Proverbs",
"Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations",
"Ezekiel","Daniel","Hosea","Joel","Amos",
"Obadiah","Jonah","Micah","Nahum","Habakkuk",
"Zephaniah","Haggai","Zechariah","Malachi",
"Matthew","Mark","Luke","John","Acts",
"Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians",
"Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy",
"2 Timothy","Titus","Philemon","Hebrews","James",
"1 Peter","2 Peter","1 John","2 John","3 John",
"Jude","Revelation"
];

// Populate dropdown
const bookSelect = document.getElementById("bookSelect");
books.forEach(book => {
  const option = document.createElement("option");
  option.value = book;
  option.textContent = book;
  bookSelect.appendChild(option);
});

// Load selected book + chapter
function loadSelected() {
  const book = bookSelect.value;
  const chapter = document.getElementById("chapterNumber").value;
  loadChapter(book + " " + chapter);
}

// Fetch chapter
function loadChapter(reference) {
  fetch(`https://bible-api.com/${encodeURIComponent(reference)}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("chapterTitle").textContent = data.reference;
      const contentDiv = document.getElementById("chapterContent");
      contentDiv.innerHTML = "";

      data.verses.forEach(v => {
        const verse = document.createElement("p");
        verse.innerHTML = `<strong>${v.verse}</strong> ${v.text}
          <button onclick="saveFavorite('${data.reference} - ${v.verse}')">❤️</button>`;
        contentDiv.appendChild(verse);
      });
    });
}

// Search verse
function searchVerse() {
  const input = document.getElementById("searchInput").value;
  if (!input);
}
// Save favorites
function saveFavorite(text) {
  let saved = JSON.parse(localStorage.getItem("favorites")) || [];
  saved.push(text);
  localStorage.setItem("favorites", JSON.stringify(saved));
  displayFavorites();
}

// Display favorites
function displayFavorites() {
  const saved = JSON.parse(localStorage.getItem("favorites")) || [];
  const favDiv = document.getElementById("favorites");
  favDiv.innerHTML = "";
  saved.forEach(v => {
    const p = document.createElement("p");
    p.textContent = v;
    favDiv.appendChild(p);
  });
}

displayFavorites();

// Devotionals
function saveDevotional() {
  const text = document.getElementById("devotionalInput").value;
  if (!text) return;

  let devos = JSON.parse(localStorage.getItem("devotionals")) || [];
  devos.push(text);
  localStorage.setItem("devotionals", JSON.stringify(devos));

  document.getElementById("devotionalInput").value = "";
  displayDevotionals();
}

function displayDevotionals() {
  const devos = JSON.parse(localStorage.getItem("devotionals")) || [];
  const list = document.getElementById("devotionalList");
  list.innerHTML = "";
  devos.forEach(d => {
    const p = document.createElement("p");
    p.textContent = d;
    list.appendChild(p);
  });
}

displayDevotionals();
