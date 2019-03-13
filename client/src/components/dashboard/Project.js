import React, { Component } from "react";
import ImageMediaCard from "./ImgMediaCard";
import Grid from "@material-ui/core/Grid";

class Project extends Component {
	constructor(props) {
		super(props);

		this.state = {
			project: this.props.project,
			deleteProject: ""
		};
		this.updateProject = this.updateProject.bind(this);
	}

	updateProject(id) {
		var projectState = this.state.project;
		var newProject = projectState.filter((project) => project._id !== id);
		this.setState({
			project: newProject
		});
	}

	render() {
		console.log(this.props);

		const project = this.state.project.map((project) => (
			<ImageMediaCard
				id={project._id}
				onDeleteClick={this.updateProject}
				title={project.title}
				icon={project.icon}
				description={project.description}
			/>
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
