

let player = {
    name: "Pere",
    chips: 100,

}

//Ace card = 11 points
let cards = [ ] 
let sum = 0
// a boolean variable
let hasBlackJack = false
let isAlive = false
let val = ""
let messageEl = document.getElementById("message-el")
//2. Store the sum paragraph in a variable called sumEl
//let sumEl = document.getElementById("sum-el")
//Or: use selector, a more dynamic method, give a value, it's more specific in the value that's passed in
//here specifying the sum-el is an id 
let sumEl = document.querySelector("#sum-el")

// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el")
 
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
//create a function, getRandom()
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 )+1 
    if(randomNumber >=10 ) return 10
    else if(randomNumber === 1) return 11
    else return randomNumber
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}
function renderGame(){
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    //cardsEl.textContent = "Cards: " + firstCard + " " + secondCard 
    //new: render out ALL the cards we have
    cardsEl.textContent = "Cards: "
    for(let i = 0; i<cards.length; i++) {
        cards.textContent += cards[i] + " "
    }

    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum
    
    if(sum <= 20){
        msg = "do you want to draw a new card? 🙂"
    }
    else if(sum === 21) {
        msg ="You got BlackJack! 🥳"
        hasBlackJack = true
    }
    else  {
        msg = "You are out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = msg
    
}
// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard(){
    if(isAlive ===true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}
