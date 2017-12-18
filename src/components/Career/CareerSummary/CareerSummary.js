import React, { Component } from 'react';
import Aux from'../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class CareerSummary extends Component{

	componentWillUpdate(){
		console.log('update');
	}
	render(){

		const skillSummary=Object.keys(this.props.skills)
			.map(igKey=>{
		return <li key={igKey}>
		<span style={{textTransform:'capitalize'}}>
		{igKey}</span>:{this.props.skills[igKey]}</li>
	});
	
		return(
		<Aux>
			<h3> Your Career</h3>
			<p> A Successful Career with the following Skills:</p>
			<ul>
				{skillSummary}
			</ul>
			<p><strong>Total Learning Hour:{this.props.hour}</strong></p>

			<p>Continue to Get A Job</p>

			<Button btnType="Danger" clicked={this.props.finishCancel}> CANCEL</Button>
			<Button btnType="Success" clicked={this.props.buildContinue}> Continue</Button>
		</Aux>
			)
	}
	
};


export default CareerSummary;