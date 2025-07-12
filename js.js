// Array to store quotes
let quotes = [
  { text: "You are stronger than you think.", author: "Unknown" },
  { text: "Healing takes time.", author: "Unknown" },
  { text: "You matter. Your story isn't over.", author: "Unknown" },
  { text: "One day at a time.", author: "Unknown" },
  { text: "It’s okay to not be okay.", author: "Unknown" }
];

// Show a random quote
function generateQuote() {
  const quoteDisplay = document.getElementById("random-quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.textContent = "${quote.text}" - ${quote.author || "Unknown"};
}
// Add a new quote
document.addEventListener("DOMContentLoaded", function () {
  // Form handling
  const form = document.getElementById("quote-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const quoteInput = document.getElementById("new-quote").value.trim();
    const authorInput = document.getElementById("author").value.trim();

    if (quoteInput !== "") {
      quotes.push({ text: quoteInput, author: authorInput });
      alert("Quote added!");
      document.getElementById("new-quote").value = "";
      document.getElementById("author").value = "";
      displayAllQuotes();
    }
  });

  // Search functionality
  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("input", function () {
    const searchTerm = searchBar.value.toLowerCase();
    const resultsDiv = document.getElementById("search-results");
 resultsDiv.innerHTML = "";

    if (searchTerm === "") return;

    const results = quotes.filter((quote) =>
      quote.text.toLowerCase().includes(searchTerm)
    );

    results.forEach((quote) => {
      const p = document.createElement("p");
      p.textContent = "${quote.text}" - ${quote.author || "Unknown"};
      resultsDiv.appendChild(p);
    });
  });

  // Show all quotes
  displayAllQuotes();
  generateQuote();
});

// Display all quotes
function displayAllQuotes() {
  const quoteList = document.getElementById("quote-list");
  quoteList.innerHTML = "";

  quotes.forEach((quote) => {
    const li = document.createElement("li");
    li.textContent = "${quote.text}" - ${quote.author || "Unknown"};
    quoteList.appendChild(li);
  });
}