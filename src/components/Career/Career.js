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
	if(transformedSkills.length==0){
		transformedSkills=<p>Please start adding skills!</p>;
	}
	return(
		<div className={classes.Career}>
			 <SkillsForCareer type="codingSkills-top" />
			 {transformedSkills}
			 <SkillsForCareer type="codingSkills-bottom" />

		</div>
		);
};

export default career;