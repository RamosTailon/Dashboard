import styles from './Results.module.css'
import { useState, useEffect } from 'react';

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

	return (
		<div className={styles.container_results}>
			<h1>Resultados</h1>
			{results && results.map((item) => (
				<div className={styles.individual} key={item.id}>
					<article>{item.name}</article>
					<p>{item.concludes.length}</p>
				</div>
			))}
		</div>
	)
}

export default Results