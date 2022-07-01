// let age = 22
// if( age > 21 ){
//     console.log("you can not enter the club")
// }
// else{
//     console.log("you can enter the club")
// }

// let age = 110;
 
// if ( age < 100 ){
//     console.log("not eligible")
// }else if( age === 100 ){
//     console.log("here is your birthday card from the king!")
// }else{
//     console.log("not eligible, you have already gotten one")
// }
let player = {
    name: "samcode",
    chips: 200
}

let cards = []
let sum = 0
let hasblackjake = false
let isalive = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// 1,11,13
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    if(randomNumber > 10 ){
        return 11
    }
    else if(randomNumber === 1 ){
        return 10
    }
    else{
        return randomNumber
    }
}


function startGame(){
    isalive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if( sum <= 20 ){
        message = "do you want to draw a new card?"
    }else if( sum === 21 ){
        message = "you've got blackjack! 🥳"
        hasblackjake = true
    }else{
        message = "you're out of the game!🥵"
        isalive = false
    }
    
    messageEl.textContent = message
}

 


function newCard(){

    if( isalive === true && hasblackjake === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}



// for(let count = 10; count < 110; count +=10 ){
//     console.log(count)
// }

// let card = [7,3,9]
// for(let i = 0; i<card.length; i += 1 ){
//     console.log(card[i])
// }

// let sentence = ["hello", "my", "name", "is", "samuel"]
// let greetingEl = document.getElementById("greeting-el")

// for(let i = 0; i<sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "
// }

// let randomcard = Math.floor(Math.random() * 6) + 1 
// console.log(randomcard)

// let airbnb = {
//     Nigerian: true,
//     Age: 19,
//     name: "My name is samuel obanla",
//     foods: ["amala", "semo", "fufu"]
// }
// console.log(airbnb.foods)
// console.log(airbnb.Nigerian)
// console.log(airbnb.name)


// let person = {
//     name: "obanla samuel",
//     age: 19,
//     country: "Nigeria"
// }
// function logData(){
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }
// logData()



// let age = 100
// if ( age < 6 ){
//     console.log("Free")
// }
// else if ( age >= 6 && age <= 17 ){
//     console.log("child discount")
// }
// else if ( age >= 18 && age <= 26 ){
//     console.log("student discount")
// }
// else if ( age >= 27 && age <= 66 ){
//     console.log("full price")
// }
// else{
//     console.log("senior citizen discount")
// }


// console.log("The 5 largest country in the world:")
// let largeCountry = ["China","India","USA","Indonesia","Pakistan"]

// for( let i = 0; i < largeCountry.length; i++ ){
//     console.log("- " + largeCountry[i])
// }


// let largestCountry = ["Tuvalu","India","USA","Indonesia","Monaco"]
// largestCountry.pop()
// largestCountry.push("Pakistan")
// largestCountry.shift()
// largestCountry.unshift("China")

// console.log(largestCountry)


// let dayOfMonth = 31
// let weekday = "Friday"

// if ( dayOfMonth === 31 && weekday === "Friday" ){
//     console.log("Haaa Haaa !!!")
// }



let hands = ["rock","paper","scissor"]
function getHand(){
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}
console.log(getHand())