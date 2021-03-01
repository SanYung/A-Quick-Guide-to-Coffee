document.getElementsByClassName('btn3')[0].addEventListener('click', () => {
    document.getElementsByClassName('chartdiv')[0].style.display = 'none'
    document.getElementsByClassName('recipe')[0].style.display = 'none'
    document.getElementsByClassName('nutrition')[0].style.display = 'block'
})

document.getElementsByClassName('btn2')[0].addEventListener('click', () => {
    document.getElementsByClassName('chartdiv')[0].style.display = 'none'
    document.getElementsByClassName('recipe')[0].style.display = 'block'
    document.getElementsByClassName('nutrition')[0].style.display = 'none'
})

document.getElementsByClassName('btn1')[0].addEventListener('click', () => {
    document.getElementsByClassName('chartdiv')[0].style.display = 'block'
    document.getElementsByClassName('recipe')[0].style.display = 'none'
    document.getElementsByClassName('nutrition')[0].style.display = 'none'

})