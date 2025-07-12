// Initial list of quotes
let quotes = [
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "You are stronger than you think.", author: "Unknown" },
  { text: "Every day is a second chance.", author: "Oprah Winfrey" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "Love is short , forgeting is long.", author: "Pablo Neruda" },
];

// Load quotes from localStorage if available
if (localStorage.getItem("quotes")) {
  quotes = JSON.parse(localStorage.getItem("quotes"));
}

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("random-quote").textContent = "${quote.text}" - $ {quote.author || "Unknown"};
}

// Function to add a new quote
document.getElementById("quote-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const text = document.getElementById("new-quote").value.trim();
  const author = document.getElementById("author").value.trim();

  if (text === "") {
    alert("Please enter a quote.");
    return;
  }

  const newQuote = { text, author: author || "Anonymous" };
  quotes.push(newQuote);
  localStorage.setItem("quotes", JSON.stringify(quotes));

  document.getElementById("new-quote").value = "";
  document.getElementById("author").value = "";
  alert("Quote added successfully!");
  showAllQuotes();
});

// Function to show all quotes
function showAllQuotes() {
  const list = document.getElementById("quote-list");
  list.innerHTML = "";
  quotes.forEach((quote, index) => {
    const li = document.createElement("li");
    li.textContent = "${quote.text}" —— ${quote.author};
    list.appendChild(li);
  });
}

// Function to search quotes
document.getElementById("search-bar").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const results = quotes.filter(q => q.text.toLowerCase().includes(keyword) || q.author.toLowerCase().includes(keyword));

  const resultBox = document.getElementById("search-results");
  resultBox.innerHTML = "";

  if (results.length === 0) {
    resultBox.textContent = "No quotes found.";
    return;
  }

  results.forEach(q => {
    const p = document.createElement("p");
    p.textContent = "${q.text}" — ${q.author};
    resultBox.appendChild(p);
  });
});

// Load all quotes when page loads
window.onload = function () {
  showAllQuotes();
  generateQuote();
};
