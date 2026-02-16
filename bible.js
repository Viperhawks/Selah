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
  const url = "https://bible-api.com/" + encodeURIComponent(reference);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    })
    .then(data => {
      if (!data.verses) {
        throw new Error("No verses found");
      }

      document.getElementById("chapterTitle").textContent = data.reference;
      const contentDiv = document.getElementById("chapterContent");
      contentDiv.innerHTML = "";

      data.verses.forEach(v => {
        const verse = document.createElement("p");
        verse.innerHTML =
          "<strong>" + v.verse + "</strong> " + v.text +
          " <button onclick=\"saveFavorite('" + data.reference + " - " + v.verse + "')\">❤️</button>";
        contentDiv.appendChild(verse);
      });
    })
    .catch(error => {
      document.getElementById("chapterContent").textContent =
        "Unable to load chapter. Please try again.";
      console.error("Error:", error);
    });
}

// Search verse
function searchVerse() {
  const input = document.getElementById("searchInput").value;
  if (!input);

  fetch(`https://bible-api.com/${encodeURIComponent(input)}`)
}
function searchVerse() {
  const input = document.getElementById("searchInput").value.trim();
  if (!input) {
    alert("Please enter a verse like John 3:16");
    return;
  }

  const url = "https://bible-api.com/" + encodeURIComponent(input);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (!data.verses) {
        throw new Error("Verse not found");
      }

      document.getElementById("chapterTitle").textContent = data.reference;
      const contentDiv = document.getElementById("chapterContent");
      contentDiv.innerHTML = "";

      data.verses.forEach(v => {
        const verse = document.createElement("p");
        verse.innerHTML = "<strong>" + v.verse + "</strong> " + v.text;
        contentDiv.appendChild(verse);
      });
    })
    .catch(error => {
      document.getElementById("chapterContent").textContent =
        "Verse not found. Try format like John 3:16";
      console.error("Error:", error);
    });
}
