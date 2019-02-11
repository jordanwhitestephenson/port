import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageMediaCard from './ImgMediaCard';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Project extends Component {
	onDeleteClick(id) {
		this.props.deleteProject(id);
	}

	onEditClick(id) {
		// this.props.editProject(id);
	}

	render() {

		const project = this.props.project.map(project => (
			<ImageMediaCard id={project._id} title={project.title} description={project.description} />
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
