import styles from './Add.module.css'

const Add = () => {
	return (
		<div className={styles.container_task}>
			<h1>Adicionar Tarefa</h1>
			<form className={styles.form_task}>
				<label htmlFor="member">
					Membro da equipe:
					<select name="member" id="member_select" className={styles.select}>
						<option value="Ob_1345s">Sandra Joyce</option>
						<option value="Ob_4s6d8">Martins Loyery</option>
						<option value="Ob_s6d7e">Jonas Moreira</option>
						<option value="Ob_w0e95">Maria Gutenberg</option>
					</select>
				</label>
				<label htmlFor="task">
					Origem da tarefa:
					<select name="task" id="task_select" className={styles.select}>
						<option value="1">gab1</option>
						<option value="2">gab2</option>
						<option value="3">gab3</option>
					</select>
				</label>
				<input type="submit" value="Enviar" />
			</form>
		</div>
	)
}

export default Add