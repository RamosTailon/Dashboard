import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

//COMPONENTS
import ThemeSwitcher from './ThemeSwitcher'


//CSS
import NavbarStyle from '../styles/NavBarStyle'

const Navbar = ({ testChecked }) => {


	return (
		<NavbarStyle>
			<div className='logo'>
				<img src="/logo.svg" alt="logo" />
				<span>Results Reports</span>
			</div>
			<ul>
				<li><Link to='/'>Resultados</Link></li>
				<li><Link to='/add'>Adicionar</Link></li>
				<li>
					<ThemeSwitcher check={testChecked} />
					{/* <button onClick={toggleTheme}>Mudar</button> */}
				</li>
			</ul>
		</NavbarStyle>
	)
}

export default Navbar