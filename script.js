const header = document.querySelector('header')
const links = document.querySelectorAll('a')

header.addEventListener('click', e => {
  if(e.target.classList.contains('hamburger') || e.target.classList.contains('close')) {
    header.classList.toggle('open')
  }
})

links.forEach(a => {
  a.addEventListener('click', e => {
    header.classList.remove('open')
  })
})