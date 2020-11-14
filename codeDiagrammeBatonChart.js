function creaDiagStocked(tableau){

	var tableau = [{1;2;3;4;5;6;7;8;9;10;11;12},{1;2;3;4;5;6;7;8;9;10;11;12},{1;2;3;4;5;6;7;8;9;10;11;12},{1;2;3;4;5;6;7;8;9;10;11;12},{1;2;3;4;5;6;7;8;9;10;11;12}];
	var barChartData = {
			labels: ['Arrondissement1', 'Arrondissement2', 'Arrondissement3', 'Arrondissement4', 'Arrondissement5', 'Arrondissement6', 'Arrondissement7' 'Arrondissemen8', 'Arrondissement9', 'Arrondissement10', 'Arrondissement11', 'Arrondissement12'],
			datasets: [{
				label: '[0-20] ans',
				backgroundColor: "rgba(255,205,86,0.2)",
				data: [
					"part_moins_20ans":[], "part_20_40ans":[], "part_40_60ans":[], "part_60_80ans":[], "part_plus_80ans":[],
					tableau["part_moins_20ans"][0],
					tableau["part_moins_20ans"][1],
					tableau["part_moins_20ans"][2],
					tableau["part_moins_20ans"][3],
					tableau["part_moins_20ans"][4],
					tableau["part_moins_20ans"][5],
					tableau["part_moins_20ans"][6],
					tableau["part_moins_20ans"][7],
					tableau["part_moins_20ans"][8],
					tableau["part_moins_20ans"][9],
					tableau["part_moins_20ans"][10],
					tableau["part_moins_20ans"][11]
				]
			}, {
				label: '[20-40] ans',
				backgroundColor: "rgba(255,159,64, 0.2)",
				data: [
					tableau["part_20_40ans"][0],
					tableau["part_20_40ans"][1],
					tableau["part_20_40ans"][2],
					tableau["part_20_40ans"][3],
					tableau["part_20_40ans"][4],
					tableau["part_20_40ans"][5],
					tableau["part_20_40ans"][6],
					tableau["part_20_40ans"][7],
					tableau["part_20_40ans"][8],
					tableau["part_20_40ans"][9],
					tableau["part_20_40ans"][10],
					tableau["part_20_40ans"][11]
				]
			}, {
				label: '[40-60] ans',
				backgroundColor: "rgba(255,99,132, 0.2)",
				data: [
					tableau["part_40_60ans"][0],
					tableau["part_40_60ans"][1],
					tableau["part_40_60ans"][2],
					tableau["part_40_60ans"][3],
					tableau["part_40_60ans"][4],
					tableau["part_40_60ans"][5],
					tableau["part_40_60ans"][6],
					tableau["part_40_60ans"][7],
					tableau["part_40_60ans"][8],
					tableau["part_40_60ans"][9],
					tableau["part_40_60ans"][10],
					tableau["part_40_60ans"][11]
				]
			}, {
				label: '[60-80] ans',
				backgroundColor: "rgba(153,102,255, 0.2)",
				data: [
					tableau["part_60_80ans"][0],
					tableau["part_60_80ans"][1],
					tableau["part_60_80ans"][2],
					tableau["part_60_80ans"][3],
					tableau["part_60_80ans"][4],
					tableau["part_60_80ans"][5],
					tableau["part_60_80ans"][6],
					tableau["part_60_80ans"][7],
					tableau["part_60_80ans"][8],
					tableau["part_60_80ans"][9],
					tableau["part_60_80ans"][10],
					tableau["part_60_80ans"][11]
				]
			}, {
				label: '[80+] ans',
				backgroundColor: "rgba(201,203,207, 0.2)",
				data: [
					tableau["part_plus_80ans"][0],
					tableau["part_plus_80ans"][1],
					tableau["part_plus_80ans"][2],
					tableau["part_plus_80ans"][3],
					tableau["part_plus_80ans"][4],
					tableau["part_plus_80ans"][5],
					tableau["part_plus_80ans"][6],
					tableau["part_plus_80ans"][7],
					tableau["part_plus_80ans"][8],
					tableau["part_plus_80ans"][9],
					tableau["part_plus_80ans"][10],
					tableau["part_plus_80ans"][11]
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
