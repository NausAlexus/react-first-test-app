import React from 'react';

// Компоненты
class Header extends React.Component{
	render () {
		return(
			<header className='header'>
				{this.props.title}
			</header>
		)
	}
}

export default Header;