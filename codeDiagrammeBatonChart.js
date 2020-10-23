function creaDiagStocked(tableau){

	var barChartData = {
			labels: ['Arrondissement1', 'Arrondissement2', 'Arrondissement3', 'Arrondissement4', 'Arrondissement5', 'Arrondissement6', 'Arrondissement7' 'Arrondissemen8', 'Arrondissement9', 'Arrondissement10', 'Arrondissement11', 'Arrondissement12'],
			datasets: [{
				label: '[0-20] ans',
				backgroundColor: "rgba(255,205,86,0.2)",
				data: [
					tableau[][DonnéesArr1],
					tableau[][DonnéesArr2],
					tableau[][DonnéesArr3],
					tableau[][DonnéesArr4],
					tableau[][DonnéesArr5],
					tableau[][DonnéesArr6],
					tableau[][DonnéesArr7],
					tableau[][DonnéesArr8],
					tableau[][DonnéesArr9],
					tableau[][DonnéesArr10],
					tableau[][DonnéesArr11],
					tableau[][DonnéesArr12]
				]
			}, {
				label: '[20-40] ans',
				backgroundColor: "rgba(255,159,64, 0.2)",
				data: [
					DonnéesArr1,
					DonnéesArr2,
					DonnéesArr3,
					DonnéesArr4,
					DonnéesArr5,
					DonnéesArr6,
					DonnéesArr7,
					DonnéesArr8,
					DonnéesArr9,
					DonnéesArr10,
					DonnéesArr11,
					DonnéesArr12
				]
			}, {
				label: '[40-60] ans',
				backgroundColor: "rgba(255,99,132, 0.2)",
				data: [
					DonnéesArr1,
					DonnéesArr2,
					DonnéesArr3,
					DonnéesArr4,
					DonnéesArr5,
					DonnéesArr6,
					DonnéesArr7,
					DonnéesArr8,
					DonnéesArr9,
					DonnéesArr10,
					DonnéesArr11,
					DonnéesArr12
				]
			}, {
				label: '[60-80] ans',
				backgroundColor: "rgba(153,102,255, 0.2)",
				data: [
					DonnéesArr1,
					DonnéesArr2,
					DonnéesArr3,
					DonnéesArr4,
					DonnéesArr5,
					DonnéesArr6,
					DonnéesArr7,
					DonnéesArr8,
					DonnéesArr9,
					DonnéesArr10,
					DonnéesArr11,
					DonnéesArr12
				]
			}, {
				label: '[80+] ans',
				backgroundColor: "rgba(201,203,207, 0.2)",
				data: [
					DonnéesArr1,
					DonnéesArr2,
					DonnéesArr3,
					DonnéesArr4,
					DonnéesArr5,
					DonnéesArr6,
					DonnéesArr7,
					DonnéesArr8,
					DonnéesArr9,
					DonnéesArr10,
					DonnéesArr11,
					DonnéesArr12
				]
			}]

		};
		window.onload = function() {
			var ctx = document.getElementById('diagram').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					title: {
						display: true,
						text: 'Diagramme des tranches dages par arrondissement'
					},
					tooltips: {
						mode: 'index',
						intersect: true
					},
					responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					}
				}
			});
		};

		window.myBar.update();
}
