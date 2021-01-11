
var button = document.getElementsByClassName('coffee-button')[0]
button.addEventListener('click', () => {
    document.getElementsByClassName('homepage')[0].style.display = "none"
    document.getElementsByClassName('coffee-page')[0].style.display = "block"
    window.scrollTo(0,0)
})

var button = document.getElementsByClassName('go-back-button')[0]
button.addEventListener('click', () => {
    document.getElementsByClassName('homepage')[0].style.display = "block"
    document.getElementsByClassName('coffee-page')[0].style.display = "none"
    document.getElementsByClassName('homepage')[0].scrollTo(0, document.getElementById('coffee-header'))
})


window.addEventListener("scroll", function () {
    var header = document.getElementsByClassName('navbar-coffee-header')[0];
    header.classList.toggle("sticky", window.scrollY > 0);
})




// coffee-types

document.getElementById('espresso-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('espresso-popup')[0].style.display = 'block'
})
document.getElementById('espresso-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('espresso-popup')[0].style.display = 'none'
})

document.getElementById('redeye-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('redeye-popup')[0].style.display = 'block'
})
document.getElementById('redeye-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('redeye-popup')[0].style.display = 'none'
})

document.getElementById('americano-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('americano-popup')[0].style.display = 'block'
})
document.getElementById('americano-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('americano-popup')[0].style.display = 'none'
})

document.getElementById('macchiato-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('macchiato-popup')[0].style.display = 'block'
})
document.getElementById('macchiato-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('macchiato-popup')[0].style.display = 'none'
})

document.getElementById('cortado-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('cortado-popup')[0].style.display = 'block'
})
document.getElementById('cortado-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('cortado-popup')[0].style.display = 'none'
})

document.getElementById('breve-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('breve-popup')[0].style.display = 'block'
})
document.getElementById('breve-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('breve-popup')[0].style.display = 'none'
})


document.getElementById('cappucino-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('cappucino-popup')[0].style.display = 'block'
})
document.getElementById('cappucino-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('cappucino-popup')[0].style.display = 'none'
})

document.getElementById('flatwhite-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('flatwhite-popup')[0].style.display = 'block'
})
document.getElementById('flatwhite-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('flatwhite-popup')[0].style.display = 'none'
})

document.getElementById('cafelatte-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('cafelatte-popup')[0].style.display = 'block'
})
document.getElementById('cafelatte-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('cafelatte-popup')[0].style.display = 'none'
})

document.getElementById('vienna-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('vienna-popup')[0].style.display = 'block'
})
document.getElementById('vienna-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('vienna-popup')[0].style.display = 'none'
})

document.getElementById('mocha-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('mocha-popup')[0].style.display = 'block'
})
document.getElementById('mocha-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('mocha-popup')[0].style.display = 'none'
})

document.getElementById('affogato-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('affogato-popup')[0].style.display = 'block'
})
document.getElementById('affogato-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('affogato-popup')[0].style.display = 'none'
})

document.getElementById('cafeaulait-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('cafeaulait-popup')[0].style.display = 'block'
})
document.getElementById('cafeaulait-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('cafeaulait-popup')[0].style.display = 'none'
})

document.getElementById('coldbrew-button').addEventListener('mouseover', () => {
    document.getElementsByClassName('coldbrew-popup')[0].style.display = 'block'
})
document.getElementById('coldbrew-button').addEventListener('mouseout', () => {
    document.getElementsByClassName('coldbrew-popup')[0].style.display = 'none'
})
