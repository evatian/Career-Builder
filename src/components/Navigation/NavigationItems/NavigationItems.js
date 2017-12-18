import React from 'react';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems=()=>(

		<ul className={classes.NavigationItems}>
			<NavigationItem link="/" active> Career Builder</NavigationItem>
			<NavigationItem link="/"> Get A Job</NavigationItem>

		</ul>



	);


export default navigationItems;