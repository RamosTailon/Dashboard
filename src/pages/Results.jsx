import styles from './Results.module.css'
import { useState, useEffect } from 'react';

//CHART JS
import { Chart } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip
)


const urlBaseProducts = 'http://localhost:3000/results'

const Results = () => {

	const [results, setResults] = useState([]);

	async function fetchDataResults() {
		await fetch(urlBaseProducts)
			.then(resp => { return resp.json() })
			.then(data => setResults(data))
			.catch()
	}

	useEffect(() => {
		fetchDataResults();
	}, []);

	//---------Name/Concludes Data List ------------
	const namesList = results.map(item => item.name)

	const relList = results.map(item => item.concludes.length)


	return (
		<div className={styles.container_results}>
			<h1>Resultados</h1>
			<div>
				<Chart
					type='bar'
					data={{
						labels: namesList,
						datasets: [{
							data: relList,
							backgroundColor: [
								'#ac78d6',
								'#63d472',
								'#5fa1d4',
								'#c4d950	'
							]
						}]
					}}
					width={600}
					height={300}
				/>
			</div>
		</div>
	)
}

export default Results