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
					$(#part_20_60ans),
					$(#part_plus_60ans),
				],
				backgroundColor : [
					'rgb(0, 0, 0)',
					'rgb(255, 255, 0)',
					'rgb(255, 0, 0)',
				],
				label: "La répartition de la population en fonction de l'âge"
			}],
			labels: [
				'0 à 20 ans',
				'20 à 60 ans',
				'plus de 60 ans'
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