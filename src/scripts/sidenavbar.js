
// hover
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


// click 
document.getElementById('espresso-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 0)
});

document.getElementById('redeye-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 211)
});

document.getElementById('americano-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 576)
});

document.getElementById('macchiato-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 906)
});

document.getElementById('cappucino-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 1263)
});

document.getElementById('flatwhite-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 1616)
});

document.getElementById('cafelatte-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 1966)
});

document.getElementById('mocha-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 2329)
});

document.getElementById('vienna-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 2678)
});

document.getElementById('affogato-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 3016)
});

document.getElementById('cafeaulait-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 3421)
});

document.getElementById('coldbrew-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 3619)
});

