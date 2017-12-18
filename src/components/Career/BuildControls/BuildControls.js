import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
	{label:'Python',type:'Python'},
	{label:'PHP',type:'PHP'},
	{label:'SQL',type:'SQL'},
	{label:'JavaScript',type:'JavaScript'},
	{label:'RubyOnRail',type:'RubyOnRail'},

];

const buildControls=(props) =>(
	
	<div className={classes.BuildControls}>
	<p className={classes.current}>Current Learning Hours:{props.hour}</p>
	{
		controls.map(ctrl=>(
			<BuildControl 
			key={ctrl.label} 
			label={ctrl.label}

			added={()=>props.skillsAdded(ctrl.type)}
			removed={()=>props.skillsRemoved(ctrl.type)}
			disabled={props.disabled[ctrl.type]}/>
			))}

	<button className={classes.FinishButton}
	disabled={!props.finishable}
	onClick={props.finished}>Finish Building</button>
	</div>
);


export default buildControls;