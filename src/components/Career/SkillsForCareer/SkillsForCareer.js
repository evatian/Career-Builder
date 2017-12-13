
import React , {Component}from 'react';
import PropTypes from 'prop-types';
import classes from './SkillsForCareer.css';
class SkillsforCareer extends Component
{
	render(){
		let skills=null;
	switch(this.props.type){
		case ('codingSkills-bottom'):
			skills=<div className={classes.codingSkillsBottom}>
			        </div>
		break;

		case('codingSkills-top'):
			skills=(
			<div className={classes.codingSkillsTop}>
			</div>			
					);
			break;
		case('PHP'):

			skills=<div className={classes.PHP}></div>;

			break;
		case('SQL'):

			skills=<div className={classes.SQL}></div>;

			break;
	    case('Python'):

			skills=<div className={classes.Python}></div>;

			break;
	    
	    case('RubyOnRail'):

			skills=<div className={classes.RubyOnRail}></div>;

			break;
		default: skills=null;	
		
	}
	    return skills;
 
	}
};

SkillsforCareer.PropTypes={
	type: PropTypes.string.isRequired
};

export default SkillsforCareer;