let randomNum = Math.ceil((Math.random()*100 + 1))

const submit = document.querySelector(".submit")

const usesrInput = document.querySelector("#number")

const PrevGuess = document.querySelector(".guess")

const remainingGuess = document.querySelector(".guesses")

const lowHigh = document.querySelector(".lowHigh")

const result = document.querySelector(".rseult")

const p = document.createElement("p")

let allGuess = []
let totalAttempts = 1

let playGame = true

if (playGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        let guessedNum = parseInt(usesrInput.value)
        validateGuess(guessedNum)
    })
}

function validateGuess(guess) {
    if(isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter the valid number")
    }
    else {
        allGuess.push(guess)
        if (totalAttempts == 10) {
            displayGuess(guess)
            displayMessage(`Game Over...!, Number was ${randomNum}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
         displayMessage("You guessed it right...!")
         endGame()
    }
     else if (guess < randomNum) {
        displayMessage("Number is lower than guess.")
     }
     else if (guess > randomNum) {
        displayMessage("Number is larger than guess.")
     }
}

function displayGuess(guess) {
    usesrInput.value = ""
    PrevGuess.innerHTML += `${guess} `
    totalAttempts++
    remainingGuess.innerHTML = `${11 - totalAttempts}`
}

function displayMessage(message) {
    lowHigh.innerHTML = `<h3>${message}</h3>`
} 

function newGame() {
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function (e) {
        randomNum = Math.ceil((Math.random()*100 + 1))
        totalAttempts = 1
        allGuess = []
        PrevGuess.innerHTML = ''
        remainingGuess.innerHTML = `${11 - totalAttempts}`
        usesrInput.removeAttribute('disabled')
        result.removeChild(p)
        lowHigh.innerHTML = "Good Luck...!"
        playGame = true
    })
}

function endGame() {
    usesrInput.value = ""
    usesrInput.setAttribute("disabled", "")
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
    result.appendChild(p)
    playGame = false
    newGame();
}