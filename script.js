const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'cheeseBurger',
        img: 'images/cheeseBurger.jpg'
    },
    {
        name: 'hotDog',
        img: 'images/hotDog.png'
    },
    {
        name: 'iceCream',
        img: 'images/iceCream.png'
    },
    {
        name: 'milkShake',
        img: 'images/milkShake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'cheeseBurger',
        img: 'images/cheeseBurger.jpg'
    },
    {
        name: 'hotDog',
        img: 'images/hotDog.png'
    },
    {
        name: 'iceCream',
        img: 'images/iceCream.png'
    },
    {
        name: 'milkShake',
        img: 'images/milkShake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    }
]
cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds = []
const cardsWon = []

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card= document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]

    console.log('check for match!')

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('You have clicked the same image!')
    }
    else if(cardChosen[0] == cardChosen[1]){
        alert('Its a match!')
        cards[optionOneId].setAttribute('src','images/white.jpg')
        cards[optionTwoId].setAttribute('src','images/white.jpg')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen)
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length

    cardChosen = []
    cardChosenIds = []

    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.textContent = 'You won all the cards!'
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    console.log(cardChosen)
    console.log(cardChosenIds)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}