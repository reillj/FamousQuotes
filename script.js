const quotes = [
    {
        name: 'George Carlin',
        quote: 'Inside every cynical person, there is a disappointed idealist.'
    },
    {
        name: 'Tom Hanks',
        quote: "If it wasn't hard, everyone would do it. It's the hard that makes it great."
    },
    {
        name: 'Meryl Streep',
        quote: "You can't get spoiled if you do your own ironing."
    },
    {
        name: 'Dave Chapelle',
        quote: 'The hardest thing to do is to be true to yourself, especially when everybody is watching.'
    },
    {
        name: 'Stephen King',
        quote: 'The most important things are the hardest to say, because words diminish them.'
    },
    {
        name: 'Lucille Ball',
        quote: 'The secret to staying young is to live honestly, eat slowly, and lie about your age.'
    },
    {
        name: 'Adam Sandler',
        quote: 'Chemistry can be a good and bad thing. Chemistry is good when you make love with it. Chemistry is bad when you make crack with it.'
    },
    {
        name: 'Amy Schumer',
        quote: "I think for anyone to become good at something, they have to fail a lot too. And they have to be completely unafraid to fail or they'll never make it to the next level."
    },
    {
        name: 'Will Smith',
        quote: "Too many people spend money they haven't earned, to buy things they don't want, to impress people they don't like."
    },
    {
        name: 'John Leguizamo',
        quote: 'America may not realize it yet, but Latin prototypes are being created right now, and not just by me. They are these mambo kings and salsa queens, Aztec lords and Inca princesses, every Hernandez and Fernandez, whom this country will one day come to understand and respect.'
    },
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}