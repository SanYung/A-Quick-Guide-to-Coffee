// expresso
var myChart = new Chart(document.getElementById('chart-latte'), {
    type: 'pie',
    data: {
        labels: ['Espresso', 'Steamed Milk', 'Foam'],
        datasets: [{
            label: 'Ratio',
            data: [20, 70, 10],
            backgroundColor: [
                'rgba(78,42,42)',
                'rgba(235, 226, 208)',
                'rgba(232,232,232)',
            ],
            borderColor: [
                'rgba(78,42,42, 1)',
                'rgba(235, 226, 208, 1)',
                'rgba(232,232,232, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: false,
            }],
            yAxes: [{
                gridLines: false,
                stacked: true
            }]
        }
    }
});

// Red Eye