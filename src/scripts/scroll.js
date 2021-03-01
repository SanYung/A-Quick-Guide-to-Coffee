
document.getElementsByClassName('types-coffee')[0].addEventListener('scroll', () => {
    if (!document.getElementsByClassName('types-coffee')[0].scrollTop) {
        return
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 0 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 211)) {
        document.getElementById('expresso-div').style.display = 'block'
    } else {
        document.getElementById('expresso-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 211 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 576)) {
        document.getElementById('redeye-div').style.display = 'block'
    } else {
        document.getElementById('redeye-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 576 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 906)) {
        document.getElementById('americano-div').style.display = 'block'
    } else {
        document.getElementById('americano-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 906 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 1263)) {
        document.getElementById('macchiato-div').style.display = 'block'
    } else {
        document.getElementById('macchiato-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 1263 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 1616)) {
        document.getElementById('cappuccino-div').style.display = 'block'
    } else {
        document.getElementById('cappuccino-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 1616 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 1966)) {
        document.getElementById('flatwhite-div').style.display = 'block'
    } else {
        document.getElementById('flatwhite-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 1966 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 2329)) {
        document.getElementById('cafelatte-div').style.display = 'block'
    } else {
        document.getElementById('cafelatte-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 2329 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 2678)) {
        document.getElementById('mocha-div').style.display = 'block'
    } else {
        document.getElementById('mocha-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 2678 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 3016)) {
        document.getElementById('vienna-div').style.display = 'block'
    } else {
        document.getElementById('vienna-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 3016 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 3297)) {
        document.getElementById('afogato-div').style.display = 'block'
    } else {
        document.getElementById('afogato-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 3297 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 3526)) {
        document.getElementById('cafeaulait-div').style.display = 'block'
    } else {
        document.getElementById('cafeaulait-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 3526) {
        document.getElementById('coldbrew-div').style.display = 'block'
    } else {
        document.getElementById('coldbrew-div').style.display = 'none'
    }
});




