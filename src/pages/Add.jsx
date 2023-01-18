import styles from './Add.module.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Add = () => {
	const [employed, setEmployed] = useState('Ob_1345s');
	const [team, setTeam] = useState('gab1');
	const [result, setResult] = useState();

	const navigate = useNavigate()

	async function fetchDataResults() {
		await fetch(`http://localhost:3000/results/${employed}`)
			.then(resp => { return resp.json() })
			.then(data => setResult(data))
			.catch()
	}

	useEffect(() => {
		fetchDataResults();
	}, [result]);

	async function handleSubmit(e) {
		e.preventDefault()
		//Logica geração de dataID
		const dateMonth = new Date().getMonth() + 1;
		const dateYear = new Date().getFullYear()

		const dateCode = dateMonth.toString().padStart(2, "0") + dateYear.toString()

		//Logica geração de código aleatório de 3 dígitos
		const threeDigits = Math.floor(Math.random() * 1000)

		const fullIdCode = team.toString() + "_" + threeDigits.toString() + "_" + dateCode

		result.concludes.push(fullIdCode)
		
		await fetch(`http://localhost:3000/results/${result.id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": 'application/json'
				},
				body: JSON.stringify(result)
			})
			.then(resp => {
				resp.json()
				navigate('/results')
			})

			.catch(err => console.log(err))
	}

	return (
		<div className={styles.container_task}>
			<h1>Adicionar Tarefa</h1>
			<form className={styles.form_task} onSubmit={handleSubmit}>
				<label htmlFor="member">
					Membro da equipe:
					<select
						name="member"
						id="member_select"
						className={styles.select}
						onChange={(e) => setEmployed(e.target.value)}
					>
						<option value="Ob_1345s">Sandra Joyce</option>
						<option value="Ob_4s6d8">Martins Loyery</option>
						<option value="Ob_s6d7e">Jonas Moreira</option>
						<option value="Ob_w0e95">Maria Gutenberg</option>
					</select>
				</label>
				<label htmlFor="task">
					Origem da tarefa:
					<select
						name="task"
						id="task_select"
						className={styles.select}
						onChange={(e) => setTeam(e.target.value)}
					>
						<option value="gab1">gab1</option>
						<option value="gab2">gab2</option>
						<option value="gab3">gab3</option>
					</select>
				</label>
				<input type="submit" value="Enviar" />
			</form>
		</div>
	)
}

export default Add