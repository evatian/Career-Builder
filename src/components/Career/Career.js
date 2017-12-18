import React from 'react';
import classes from './Career.css';

import SkillsForCareer from './SkillsForCareer/SkillsForCareer';

const career = (props)=>{
	let transformedSkills = Object.keys(props.skills)
	.map(igKey=>{
		return [...Array(props.skills[igKey])].map((_,i)=>
			{
				return <SkillsForCareer key={igKey+i} type={igKey} /> ;
			});
			
		})
		.reduce((arr, el)=>{
			return arr.concat(el)
		},[]);
	if(transformedSkills.length===0){
		transformedSkills=<p>Please start adding skills!</p>;
	}
	return(
		<div className={classes.Career}>
			 <div className={classes.top}>I am a SoftWare Engineer Now</div>
			 {transformedSkills}
			 <div className={classes.bottom}>
			 	<h2>
			 		Passion For SoftWare Engineering
			 	</h2>
			 </div>

		</div>
		);
};

export default career;