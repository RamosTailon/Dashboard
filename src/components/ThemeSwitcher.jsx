import React from 'react';

const ThemeSwitcher = ({ check }) => {

	return (
		<div id='switch'>
			<input type="checkbox" id='input_slide'
				onChange={check} />
		</div>
	)
}

export default ThemeSwitcher