
import React from 'react';
import classes from './Logo.css';

import evaLogo from '../../assets/images/logo.png';
const logo = (props) => (
		<div className={classes.Logo} style={{height:props.height}}>
			<img src={evaLogo} alt="MyName" />
		</div>
	);


export default logo;
