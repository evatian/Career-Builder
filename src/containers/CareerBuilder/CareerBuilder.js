import React,{ Component } from 'react';

import Career from '../../components/Career/Career';

import BuildControls from'../../components/Career/BuildControls/BuildControls';

import Aux from'../../hoc/Aux';

import Modal from'../../components/UI/Modal/Modal';

import SkillSummary from'../../components/Career/CareerSummary/CareerSummary';

const LEARN_HOURS={
	PHP:4,
	SQL:3,
	Python:5,
	JavaScript:4,
	RubyOnRail:6
}
class CareerBuilder extends Component{
	
state={
	skills:{
		Python:0,
		PHP:0,
		SQL:0,
		JavaScript:0,
		RubyOnRail:0
	},

	totalHour:0,
	finishable:false,
	finishing:false
}

	updateFinishState(skills){
		const sum=Object.keys(skills)
		.map(igKey=>{
			return skills[igKey];
		})
		.reduce((sum,el)=>{
			return sum+el;
		},0);
		this.setState({
			finishable:sum>0
		})
	}
	addSkillsHandler=(type)=>{
		const oldCount=this.state.skills[type];
		const updateCount=oldCount+1;
		const updatedSkills={
			...this.state.skills
		};
		updatedSkills[type]=updateCount;
		const hourAddition=LEARN_HOURS[type];
		const oldHour=this.state.totalHour;
		const newHour=oldHour+hourAddition;
		this.setState({
			totalHour:newHour,skills:updatedSkills
		});
		this.updateFinishState(updatedSkills);
	}

	removeSkillsHandler=(type)=>{
		const oldCount=this.state.skills[type];
		if(oldCount<=0){
			return;
		}
		const updateCount=oldCount-1;
		const updatedSkills={
			...this.state.skills
		};
		updatedSkills[type]=updateCount;
		const hourDeduction=LEARN_HOURS[type];
		const oldHour=this.state.totalHour;
		const newHour=oldHour-hourDeduction;
		this.setState({
			totalHour:newHour,skills:updatedSkills
		})

		this.updateFinishState(updatedSkills);
	}

	finishHandler=()=> {
		this.setState({finishing:true});
	}

	finishCancelHandler=()=>{
		this.setState({finishing:false});
	}

	buildContinueHandler=()=>{
		alert('You Continue!');
	}
	render(){
		const disabledInfo={
			...this.state.skills
		}

		for(let key in disabledInfo){
			disabledInfo[key]=disabledInfo[key]<=0
		}
		return (
			<Aux>
			    <Modal show={this.state.finishing}
			    modalClosed={this.finishCancelHandler}>
			    	<SkillSummary skills={this.state.skills}
			    	hour={this.state.totalHour}
			    	finishCancel={this.finishCancelHandler}
			    	buildContinue={this.buildContinueHandler}/>
			    </Modal>
				<Career skills={this.state.skills}/>
				<BuildControls 
				 skillsAdded={this.addSkillsHandler}
				 skillsRemoved={this.removeSkillsHandler}
				 disabled={disabledInfo}
				 finishable={this.state.finishable}
				 finished={this.finishHandler}
				 hour={this.state.totalHour}/>			
			</Aux>
			);
	}
}
export default CareerBuilder;