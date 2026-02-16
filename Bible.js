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

const bookList = document.getElementById("bookList");

books.forEach(book => {
  const btn = document.createElement("button");
  btn.textContent = book;
  btn.onclick = () => loadChapter(book + " 1");
  bookList.appendChild(btn);
});

function loadChapter(reference) {
  fetch(`https://bible-api.com/${reference}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("chapterTitle").textContent = data.reference;
      document.getElementById("chapterContent").textContent =
        data.verses.map(v => v.text).join(" ");
    })
    .catch(() => {
      document.getElementById("chapterContent").textContent =
        "Unable to load Scripture. Please try again.";
    });
}

function searchVerse() {
  const input = document.getElementById("searchInput").value;
  if (!input) return;

  fetch(`https://bible-api.com/${input}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("chapterTitle").textContent = data.reference;
      document.getElementById("chapterContent").textContent =
        data.verses.map(v => v.text).join(" ");
    })
    .catch(() => {
      document.getElementById("chapterContent").textContent =
        "Verse not found. Try format like John 3:16";
    });
}
