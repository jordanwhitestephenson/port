import React, { Component } from 'react';
import ImageMediaCard from './ImgMediaCard';
import Grid from '@material-ui/core/Grid';

class Project extends Component {


	render() {
		console.log('this is from PRoject.js', this.props.project)
		const project = this.props.project.map(project => (
			<ImageMediaCard id={project._id} onDeleteClick={this.onDeleteClick}title={project.title} icon={project.icon}description={project.description} />
		));
		return (
			<div>
				<h4 className="mb-4">Projects</h4>
				<Grid container justify="space-around">
					
					{project}
				
				</Grid>
				
			</div>
		);
	}
}



export default Project;

