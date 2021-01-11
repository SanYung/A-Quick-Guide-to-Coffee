document.getElementsByClassName('types-coffee')[0].addEventListener('scroll', () => {
    if (!document.getElementsByClassName('types-coffee')[0].scrollTop ){
        return 
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 0 && 
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 211 )){
            document.getElementById('expresso-div').style.display = 'block'
    } else {
            document.getElementById('expresso-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 211 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 634)) {
        document.getElementById('redeye-div').style.display = 'block'
    } else {
        document.getElementById('redeye-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 634 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 1090)) {
        document.getElementById('americano-div').style.display = 'block'
    } else {
        document.getElementById('americano-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 1090 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 1594)) {
        document.getElementById('macchiato-div').style.display = 'block'
    } else {
        document.getElementById('macchiato-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 1594 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 1931)) {
        document.getElementById('cortado-div').style.display = 'block'
    } else {
        document.getElementById('cortado-div').style.display = 'none'
    }
    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 1931 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 2400)) {
        document.getElementById('breve-div').style.display = 'block'
    } else {
        document.getElementById('breve-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 2400 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 2930)) {
        document.getElementById('cappuccino-div').style.display = 'block'
    } else {
        document.getElementById('cappuccino-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 2930 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 3233)) {
        document.getElementById('flatwhite-div').style.display = 'block'
    } else {
        document.getElementById('flatwhite-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 3233 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 3736)) {
        document.getElementById('cafelatte-div').style.display = 'block'
    } else {
        document.getElementById('cafelatte-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 3736 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 4286)) {
        document.getElementById('mocha-div').style.display = 'block'
    } else {
        document.getElementById('mocha-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 4286 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 4556)) {
        document.getElementById('vienna-div').style.display = 'block'
    } else {
        document.getElementById('vienna-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 4556 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 5080)) {
        document.getElementById('afogato-div').style.display = 'block'
    } else {
        document.getElementById('afogato-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 5080 &&
        (document.getElementsByClassName('types-coffee')[0].scrollTop < 5527)) {
        document.getElementById('cafeaulait-div').style.display = 'block'
    } else {
        document.getElementById('cafeaulait-div').style.display = 'none'
    }

    if (
        (document.getElementsByClassName('types-coffee')[0].scrollTop) >= 5527) {
        document.getElementById('coldbrew-div').style.display = 'block'
    } else {
        document.getElementById('coldbrew-div').style.display = 'none'
    }
});


// expresso
var a = new Chart(document.getElementById('chart-expresso'), {
    type: 'pie',
    data: {
        labels: ['Espresso'],
        datasets: [{
            label: 'Ratio',
            data: [100],
            backgroundColor: [
                'rgba(198, 172, 143)'
            ],
            borderColor: [
                'rgba(198, 172, 143, 1)'
            ],
            borderWidth: 1
        }]
    },

});

// Red Eye
var b = new Chart(document.getElementById('chart-redeye'), {
    type: 'pie',
    data: {
        labels: ['Espresso', 'Coffee'],
        datasets: [{
            label: 'Ratio',
            data: [10, 90],
            backgroundColor: [
                'rgba(176, 196, 177)',
                'rgba(74, 87, 89)'
            ],
            borderColor: [
                'rgba(176, 196, 177, 1)',
                'rgba(74, 87, 89, 1)'
            ],
            borderWidth: 1
        }]
    },

});

// americano
var c = new Chart(document.getElementById('chart-americano'), {
    type: 'pie',
    data: {
        labels: ['Espresso', 'Water'],
        datasets: [{
            label: 'Ratio',
            data: [20, 80],
            backgroundColor: [
                'rgba(181, 182, 130)',
                'rgba(124, 152, 133)'
            ],
            borderColor: [
                'rgba(181, 182, 130, 1)',
                'rgba(124, 152, 133, 1)'
            ],
            borderWidth: 1
        }]
    },

});

// Macchiato
var d = new Chart(document.getElementById('chart-macchiato'), {
    type: 'pie',
    data: {
        labels: ['Espresso', 'Cold Milk' ],
        datasets: [{
            label: 'Ratio',
            data: [50, 50],
            backgroundColor: [
                'rgba(216, 151, 60)',
                'rgba(189, 99, 47)',
                'rgba(39, 62, 71)',
            ],
            borderColor: [
                'rgba(216, 151, 60, 1)',
                'rgba(189, 99, 47, 1)',
                'rgba(39, 62, 71, 1)',
            ],
            borderWidth: 1
        }]
    },

});


// Cortado
var e = new Chart(document.getElementById('chart-cortado'), {
    type: 'pie',
    data: {
        labels: ['Espresso', 'Milk' ],
        datasets: [{
            label: 'Ratio',
            data: [33.33, 66.66],
            backgroundColor: [
                'rgba(78,42,42)',
                'rgba(235, 226, 208)'
            ],
            borderColor: [
                'rgba(78,42,42, 1)',
                'rgba(235, 226, 208, 1)'
            ],
            borderWidth: 1
        }]
    },

});

// Breve
var f = new Chart(document.getElementById('chart-breve'), {
    type: 'pie',
    data: {
        labels: ['Espresso', 'Cream'],
        datasets: [{
            label: 'Ratio',
            data: [40, 60],
            backgroundColor: [
                'rgba(89, 131, 146)',
                'rgba(174, 195, 176)'
            ],
            borderColor: [
                'rgba(89, 131, 146)',
                'rgba(174, 195, 176, 1)'
            ],
            borderWidth: 1
        }]
    },

});


// Cappuccino
var g = new Chart(document.getElementById('chart-cappuccino'), {
    type: 'pie',
    data: {
        labels: ['Espresso', 'Steamed Milk', 'Foam'],
        datasets: [{
            label: 'Ratio',
            data: [33.33, 33.33, 33.33],
            backgroundColor: [
                'rgba(174, 195, 176)',
                'rgba(239, 246, 224)',
                'rgba(89, 131, 146)',
            ],
            borderColor: [
                'rgba(174, 195, 176, 1)',
                'rgba(239, 246, 224, 1)',
                'rgba(89, 131, 146, 1)',
            ],
            borderWidth: 1
        }]
    },

});


// flatwhite
var h = new Chart(document.getElementById('chart-flatwhite'), {
    type: 'pie',
    data: {
        labels: ['Espresso', 'Milk'],
        datasets: [{
            label: 'Ratio',
            data: [33.33, 66.66, 10],
            backgroundColor: [
                'rgba(78,42,42)',
                'rgba(235, 226, 208)'
            ],
            borderColor: [
                'rgba(78,42,42, 1)',
                'rgba(235, 226, 208, 1)'
            ],
            borderWidth: 1
        }]
    },
 
});


// cafelatte
var i = new Chart(document.getElementById('chart-cafelatte'), {
    type: 'pie',
    data: {
        labels: ['Espresso', 'Steamed Milk'],
        datasets: [{
            label: 'Ratio',
            data: [25, 75],
            backgroundColor: [
                'rgba(179, 163, 148)',
                'rgba(205, 215, 214)'
            ],
            borderColor: [
                'rgba(179, 163, 148, 1)',
                'rgba(205, 215, 214, 1)'
            ],
            borderWidth: 1
        }]
    },

});


// mocha
var j = new Chart(document.getElementById('chart-mocha'), {
    type: 'pie',
    data: {
        labels: ['Coffee', 'Steamed Milk', 'Chocolate'],
        datasets: [{
            label: 'Ratio',
            data: [30, 55, 5],
            backgroundColor: [
                'rgba(124, 152, 133)',
                'rgba(181, 182, 130)',
                'rgba(254, 220, 151)',
            ],
            borderColor: [
                'rgba(124, 152, 133, 1)',
                'rgba(181, 182, 130, 1)',
                'rgba(254, 220, 151, 1)',
            ],
            borderWidth: 1
        }]
    },

});


// vienna
var k = new Chart(document.getElementById('chart-vienna'), {
    type: 'pie',
    data: {
        labels: ['Cream', 'Espresso'],
        datasets: [{
            label: 'Ratio',
            data: [50, 50],
            backgroundColor: [
                'rgba(209, 190, 156)',
                'rgba(170, 153, 143)'
            ],
            borderColor: [
                'rgba(209, 190, 156, 1)',
                'rgba(170, 153, 143, 1)'
            ],
            borderWidth: 1
        }]
    },

});


// afogato
var l = new Chart(document.getElementById('chart-afogato'), {
    type: 'pie',
    data: {
        labels: ['Espresso', 'Ice Cream'],
        datasets: [{
            label: 'Ratio',
            data: [20, 80],
            backgroundColor: [
                'rgba(40, 102, 110)',
                'rgba(124, 152, 133)'
            ],
            borderColor: [
                'rgba(40, 102, 110, 1)',
                'rgba(124, 152, 133, 1)'
            ],
            borderWidth: 1
        }]
    },

});



// cafeaulait
var m = new Chart(document.getElementById('chart-cafeaulait'), {
    type: 'pie',
    data: {
        labels: ['Drip Coffee', 'Steamed Milk'],
        datasets: [{
            label: 'Ratio',
            data: [50, 50],
            backgroundColor: [
                'rgba(89, 131, 146)',
                'rgba(174, 195, 176)'
            ],
            borderColor: [
                'rgba(89, 131, 146, 1)',
                'rgba(174, 195, 176, 1)'
            ],
            borderWidth: 1
        }]
    },

});



// icedcoffee
var n = new Chart(document.getElementById('chart-coldbrew'), {
    type: 'pie',
    data: {
        labels: ['Beans' , 'Cold Water'],
        datasets: [{
            label: 'Ratio',
            data: [25, 75, 10],
            backgroundColor: [
                'rgba(80, 128, 142)',
                'rgba(105, 162, 151)'
            ],
            borderColor: [
                'rgba(80, 128, 142, 1)',
                'rgba(105, 162, 151, 1)'
            ],
            borderWidth: 1
        }]
    },

});


document.getElementById('espresso-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 0)
});

// document.getElementById('espresso-button').addEventListener('onmouseover', function () {
//     document.getElementById('popup').style.display = 'block';
// });

// document.getElementById('espresso-button').addEventListener('onmouseout',function () {
//     document.getElementById('popup').style.display = 'none';
// });


document.getElementById('redeye-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 360)
});

document.getElementById('americano-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 786)
});

document.getElementById('macchiato-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 1280)
});

document.getElementById('cortado-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 1724)
});

document.getElementById('breve-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 2164)
});

document.getElementById('cappucino-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 2624)
});

document.getElementById('flatwhite-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 3000)
});

document.getElementById('cafelatte-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 3570)
});

document.getElementById('mocha-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 3973)
});

document.getElementById('vienna-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 4437)
});

document.getElementById('affogato-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 4848)
});

document.getElementById('cafeaulait-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 5297)
});

document.getElementById('coldbrew-button').addEventListener('click', function () {
    document.getElementsByClassName('types-coffee')[0].scrollTo(0, 5727)
});

