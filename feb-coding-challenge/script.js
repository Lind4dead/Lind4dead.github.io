const image = document.querySelector('#img')
const pop = document.querySelector('#img-pop')
const r = document.querySelector(':root')

// let rs = getComputedStyle(r)
console.log(image)
let width = getComputedStyle(r).getPropertyValue('--width').slice(0,2)

image.addEventListener('click', (e) => {
  r.style.setProperty('--width', `${width++}%`)
  console.log(width)
  if(width > 20) {
    image.classList.add('d-none')
    pop.classList.remove('d-none')
  }
})