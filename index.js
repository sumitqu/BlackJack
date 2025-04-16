let player = {
    name: "Sachin",
    chips: 200,
}

let cards = []  //Array - ordered List of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("para")
let sumEl = document.getElementById("p3")
let cardsEl = document.getElementById("p2")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber > 10)
        return 10
    else if(randomNumber === 1)
        return 11
    else
        return randomNumber
}

function startGame(event){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame(event)
}

function renderGame(event){
    event.preventDefault();

    cardsEl.textContent = "Cards: " 

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    } 
    else if(sum === 21){
        message = "Wohoo! You've got BlackJack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(event){
    event.preventDefault();
    console.log("Drawing a new card...")

    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card

        cards.push(card)
        console.log(cards)
        renderGame(event)
    }
}     