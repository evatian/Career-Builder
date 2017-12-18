
import React , {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './SkillsForCareer.css';
class SkillsforCareer extends Component
{

	render(){
		let skills=null;
		
	switch(this.props.type){
		case('Python'):

			skills=<div className={classes.Python}>Python:Learned</div>;

			break;

		case('PHP'):

			skills=<div className={classes.PHP}>PHP:Learned</div>;

			break;
		case('SQL'):

			skills=<div className={classes.SQL}>SQL:Learned</div>;

			break;
	    
		case('JavaScript'):

			skills=<div className={classes.JavaScript}>
			JavaScript:Learned</div>;

			break;
	    
	    case('RubyOnRail'):

			skills=<div className={classes.RubyOnRail}>
			RubyOnRail:Learned</div>;

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