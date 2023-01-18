import styles from './/Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav>
			<div className={styles.logo}>
				<img src="/logo.svg" alt="logo" />
				<span>Results Reports</span>
			</div>
			<ul>
				<li><Link to='/results'>Resultados</Link></li>
				<li><Link to='/add'>Adicionar</Link></li>
			</ul>
		</nav>
	)
}

export default Navbar