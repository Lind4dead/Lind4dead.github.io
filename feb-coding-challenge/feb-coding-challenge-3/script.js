const data = [
  { id: 1, title: 'TITLE 1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam. Magnam corporis natus reiciendis ducimus.', url: '../Staffan.jpeg' },
  { id: 2, title: 'TITLE 2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam. Magnam corporis natus reiciendis ducimus.', url: 'https://miro.medium.com/v2/resize:fit:568/0*ce6lXk0cmGyilq1K.' },
  { id: 3, title: 'TITLE 3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam. Magnam corporis natus reiciendis ducimus.', url: 'https://miro.medium.com/v2/resize:fit:568/0*ce6lXk0cmGyilq1K.' },
  { id: 4, title: 'TITLE 4', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam. Magnam corporis natus reiciendis ducimus.', url: 'https://miro.medium.com/v2/resize:fit:568/0*ce6lXk0cmGyilq1K.' },
  { id: 5, title: 'TITLE 5', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam. Magnam corporis natus reiciendis ducimus.', url: 'https://miro.medium.com/v2/resize:fit:568/0*ce6lXk0cmGyilq1K.' },
  { id: 6, title: 'TITLE 6', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam. Magnam corporis natus reiciendis ducimus.', url: 'https://miro.medium.com/v2/resize:fit:568/0*ce6lXk0cmGyilq1K.' }
]
const data2 = [
  { id: 11, title: 'TITLE 1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam. Magnam corporis natus reiciendis ducimus.', url: '../Staffan.jpeg' },
  { id: 12, title: 'TITLE 2', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam. Magnam corporis natus reiciendis ducimus.', url: 'https://miro.medium.com/v2/resize:fit:568/0*ce6lXk0cmGyilq1K.' },
  { id: 13, title: 'TITLE 3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam. Magnam corporis natus reiciendis ducimus.', url: 'https://miro.medium.com/v2/resize:fit:568/0*ce6lXk0cmGyilq1K.' },
  { id: 14, title: 'TITLE 4', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam. Magnam corporis natus reiciendis ducimus.', url: 'https://miro.medium.com/v2/resize:fit:568/0*ce6lXk0cmGyilq1K.' },
  { id: 15, title: 'TITLE 5', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam. Magnam corporis natus reiciendis ducimus.', url: 'https://miro.medium.com/v2/resize:fit:568/0*ce6lXk0cmGyilq1K.' },
  { id: 16, title: 'TITLE 6', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam. Magnam corporis natus reiciendis ducimus.', url: 'https://miro.medium.com/v2/resize:fit:568/0*ce6lXk0cmGyilq1K.' }
]

let cards = document.querySelector('#cards')


const createElements = (item) => {
  let card = document.createElement('div') 
  card.classList.add('card')

  
  let image = document.createElement('img')
  image.classList.add('card-image')
  image.src = item.url
  
  let cardContent = document.createElement('div')
  cardContent.classList.add('card-content')
  
  let cardText = document.createElement('p')
  cardText.innerText = item.text
  
  cardContent.appendChild(cardText)
  card.appendChild(image)
  card.appendChild(cardContent)
  
  return card
}

const listCards = () => {
  // cards = ''
  data.forEach(item => {
    cards.innerHTML += `<div id="${item.id}" class="card">
    <img src="${item.url}" alt="" class="card-image">
    <div class="card-content">
    <p>${item.text}</p>
    </div>
    </div>`

  })
  data2.forEach(item => {
    console.log(item)
    cards.appendChild(createElements(item))
  })
}



listCards();