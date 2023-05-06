import React from 'react';
import { AppBar, TextField } from '@mui/material';



type HeaderProps = {
	handleInput: (cityName: string) => Promise<void>
}

const Header = ({ handleInput }: HeaderProps) => {


	return (
		<header className="header" style={{ display: 'flex', justifyContent: 'center', marginTop: '205px' }}>
			<AppBar className='AppBar' color='transparent'>
				<TextField type='search' className='textField' onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e.target.value)} id="standard-basic" label="CityName" color='success' margin='dense' style={{ maxWidth: '25vw' }} />
			</AppBar>
		</header>
	)
}

export default Header;