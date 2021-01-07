var button = document.getElementsByClassName('coffee-button')[0]

button.addEventListener('click', () => {
    document.getElementsByClassName('homepage')[0].style.display = "none"
    document.getElementsByClassName('coffee-page')[0].style.display = "block"
})

var button = document.getElementsByClassName('go-back-button')[0]
button.addEventListener('click', () => {
    document.getElementsByClassName('homepage')[0].style.display = "block"
    document.getElementsByClassName('coffee-page')[0].style.display = "none"
})
