let data = [
]
let data2 = [
]


let cards = document.querySelector('#cards')


const createElements = (item) => {
  let card = document.createElement('div') 
  card.classList.add('card')

  
  let image = document.createElement('img')
  image.classList.add('card-image')
  image.src = item.image
  
  let cardContent = document.createElement('div')
  cardContent.classList.add('card-content')
  
  let cardTitle = document.createElement('p')
  cardTitle.innerText = item.title

  let cardText = document.createElement('p')
  cardText.innerText = item.description.slice(0,20)
  
  cardContent.appendChild(cardText)
  cardContent.appendChild(cardTitle)
  card.appendChild(image)
  card.appendChild(cardContent)
  
  return card
}

const listCards = (data, data2) => {
  data.forEach(item => {
    cards.innerHTML += `<div id="${item.id}" class="card">
    <img src="${item.image}" alt="" class="card-image">
    <div class="card-content">
    <h4>${item.title}</h4>
    <p>${item.description.slice(0,100)}...</p>
    </div>
    </div>`

  })
  data2.forEach(item => {
    cards.appendChild(createElements(item))
  })
}

const fetchData = async () => {
  res = await fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(_data => {
    _data.map((item) => item.id < 11 && data.push(item))
    _data.map((item) => item.id > 10 && data2.push(item))
    console.log(data2)
    listCards(data, data2)
  })
}

fetchData();
