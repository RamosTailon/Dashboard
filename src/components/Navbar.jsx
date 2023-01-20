import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
	const [checked, setChecked] = useState(false);

	return (
		<nav>
			<div className={styles.logo}>
				<img src="/logo.svg" alt="logo" />
				<span>Results Reports</span>
			</div>
			<ul>
				<li><Link to='/results'>Resultados</Link></li>
				<li><Link to='/add'>Adicionar</Link></li>
				<li ><div id={styles.switch}>
					<input type="checkbox" id={styles.input_slide}
						onChange={(e) => setChecked(e.target.checked)} />
				</div></li>
			</ul>
		</nav>
	)
}

export default Navbar