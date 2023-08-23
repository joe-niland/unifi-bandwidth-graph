import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";

Chart.register(annotationPlugin);
import moment from "moment";

import data from "url:./data.json";

fetch(data)
	.then((response) => response.json())
	.then((data) => {
		new Chart(document.getElementById("graph"), {
			data: {
				labels: data.map((row) => moment(row.time).format("DD-MMM-YY")),
				datasets: [
					{
						type: "line",
						label: "Max TX Mbps by day",
						data: data.map(
							(row) => (row["max_tx_bytes-r"] * 8) / (1024 * 1024)
						),
						borderWidth: 1,
						borderColor: "blue",
						backgroundColor: "lightblue",
						borderJoinStyle: "bevel",
						borderCapStyle: "square",
						tension: 0.2,
						fill: true,
					},
					{
						type: "line",
						label: "Max RX Mbps by day",
						data: data.map(
							(row) => (row["max_rx_bytes-r"] * 8) / (1024 * 1024)
						),
						borderColor: "red",
						backgroundColor: "rosybrown",
						borderWidth: 1,
						borderJoinStyle: "bevel",
						borderCapStyle: "square",
						tension: 0.2,
						fill: true,
					},
				],
			},
			options: {
				responsive: true,
				interaction: {
					mode: "index",
					intersect: false,
				},
				plugins: {
					annotation: {
						annotations: {
							up: {
								type: "line",
								borderDash: [2, 2],
								yMin: 50,
								yMax: 50,
								borderWidth: 1,
								borderColor: "blue",
							},
							up2: {
								type: "line",
								borderDash: [2, 2],
								yMin: 100,
								yMax: 100,
								borderWidth: 1,
								borderColor: "lightblue",
							},
							down: {
								type: "line",
								borderDash: [2, 2],
								yMin: 1000,
								yMax: 1000,
								borderWidth: 1,
								borderColor: "firebrick",
							},
							down2: {
								type: "line",
								borderDash: [2, 2],
								yMin: 250,
								yMax: 250,
								borderWidth: 1,
								borderColor: "lightcoral",
							},
						},
					},
				},
			},
		});
	});
