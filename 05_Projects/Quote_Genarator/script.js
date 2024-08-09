const quote = document.querySelector(".quote");
const speak = document.querySelector(".speak");
const copy = document.querySelector(".copy");
const quoteButton = document.querySelector(".btn");

function quoteGenerator() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://zenquotes.io/api/random';

    fetch(proxyUrl + apiUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data[0].q);
            quote.textContent = data[0].q
        })
        .catch((error) => {
            console.error('Error : ', error);
        });
}

quoteGenerator()

quoteButton.addEventListener('click', quoteGenerator);

copy.addEventListener('click', () => {
    const text = quote.textContent
    
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log("coppied");
    })
    .catch(() => {
        console.log("error");
    })
})

speak.addEventListener('click', () => {
    const text = quote.textContent;
    read(text);
});

function read(text) {
    const textQuote = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(textQuote);
}