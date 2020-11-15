function camembert(arrondissement){
	Chart.defaults.global.title.display = true;
	Chart.defaults.global.title.text = "La répartition de la population en fonction de l'âge";
	Chart.defaults.global.title.fontSize = 18;

	var ctx = document.getElementById('myChart').getContext('2d');
	
	var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'pie',

		// The data for our dataset
		data: {
			datasets: [{
				data : [
					$(#part_moins_20ans),
					$(#part_20_40ans),
					$(#part_40_60ans),
					$(#part_60_80ans),
					$(#part_plus_80ans),
				],
				backgroundColor : [
					'rgb(0, 0, 0)',
					'rgb(255, 255, 0)',
					'rgb(80, 20, 110)',
					'rgb(150, 150, 150)',
					'rgb(255, 0, 0)',
				],
				label: "La répartition de la population en fonction de l'âge"
			}],
			labels: [
				'0 à 20 ans',
				'20 à 40 ans',
				'40 à 60 ans',
				'60 à 80 ans',
				'80 à 100 ans',
			]
		},
	// Configuration options go here
	options: {
		legend: {
			display: true,
			position: 'right'
		},
	}
});
}

function nuagedepoints(){
	var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Valeur foncière et pourcentage des 20-60 ans par arrondissement',
            data: [{
                x: $(#1v),
                y: $(#20a60a1)
            }, {
                x: $(#2v),
                y: $(#20a60a2)
            }, {
                x: $(#3v),
                y: $(#20a60a3)
            }, {
                x: $(#4v),
                y: $(#20a60a4)
            }, {
                x: $(#5v),
                y: $(#20a60a5)
            }, {
                x: $(#6v),
                y: $(#20a60a6)
            }, {
                x: $(#7v),
                y: $(#20a60a7)
            }, {
                x: $(#8v),
                y: $(#20a60a8)
            }, {
                x: $(#9v),
                y: $(#20a60a9)
            }, {
                x: $(#10v),
                y: $(#20a60a10)
            }, {
                x: $(#11v),
                y: $(#20a60a11)
            }, {
                x: $(#12v),
                y: $(#20a60a12)
            }, {
                x: $(#13v),
                y: $(#20a60a13)
            }, {
                x: $(#14v),
                y: $(#20a60a14)
            }, {
                x: $(#15v),
                y: $(#20a60a15)
            }, {
                x: $(#16v),
                y: $(#20a60a16)
            }, {
                x: $(#17v),
                y: $(#20a60a17)
            }, {
                x: $(#18v),
                y: $(#20a60a18)
            }, {
                x: $(#19v),
                y: $(#20a60a19)
            }, {
                x: $(#20v),
                y: $(#20a60a20)
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});
}