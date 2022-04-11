const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
]
cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.getElementById('result')
let cardsChosen = []
let cardsChosenID = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {

        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        console.log(card, i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)

    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    console.log('check for match!')

    if (cardsChosen[0] == cardsChosen[1] && cardsChosenID[0] != cardsChosenID[1]) {
        cards[cardsChosenID[0]].setAttribute('src', 'images/white.png')
        cards[cardsChosenID[1]].setAttribute('src', 'images/white.png')
        cards[cardsChosenID[0]].removeEventListener('click', flipCard)
        cards[cardsChosenID[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[cardsChosenID[0]].setAttribute('src', 'images/blank.png')
        cards[cardsChosenID[1]].setAttribute('src', 'images/blank.png')
    }
    resultDisplay.innerHTML = cardsWon.length
    console.log(cardsChosenID)
    cardsChosen = []
    cardsChosenID = []

    if (cardsWon.length == (cardArray.length / 2)) {
        resultDisplay.innerHTML = 'congratulations you won!'
    }

}

function flipCard() {
    let cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenID.push(cardID);
    console.log('click', cardID);
    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}