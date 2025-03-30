// Array of motivational quotes
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    }
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the quote display
function updateQuote() {
    const quote = getRandomQuote();
    const quoteElement = document.getElementById('daily-quote');
    const authorElement = document.getElementById('quote-author');

    // Add fade-out effect
    quoteElement.style.opacity = '0';
    authorElement.style.opacity = '0';

    // Wait for fade-out animation
    setTimeout(() => {
        quoteElement.textContent = quote.text;
        authorElement.textContent = `- ${quote.author}`;
        
        // Add fade-in effect
        quoteElement.style.opacity = '1';
        authorElement.style.opacity = '1';
    }, 500);
}

// Update quote when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateQuote();
    
    // Update quote every 24 hours
    setInterval(updateQuote, 24 * 60 * 60 * 1000);
}); 