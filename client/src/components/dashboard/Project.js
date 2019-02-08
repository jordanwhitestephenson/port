import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteProject, editProject } from '../../actions/profileActions';

class Project extends Component {
	onDeleteClick(id) {
		this.props.deleteProject(id);
	}

	onEditClick(id) {
		// this.props.editProject(id);
	}


	render() {
		
		const project = this.props.project.map(project => (
			<tr key={project._id}>
				<td>{project.title}</td>
				<td>{project.description}</td>
				<td>
					<Link
						to={{
							pathname: '/add-module',
							search: `?name=${project.title}`,
							hash: `${project._id}`
						}}
						className="btn btn-warning"
					>
						Build Project
					</Link>
				</td>

				<td>
					{project.modules.Section1 ? <li>Section1 : {project.modules.Section1.type}</li> : null}
					{project.modules.Section2 ? <li>Section2 : {project.modules.Section2.type}</li> : null}
					{project.modules.Section3 ? <li>Section3 : {project.modules.Section3.type}</li> : null}
					{project.modules.Section4 ? <li>Section4 : {project.modules.Section4.type}</li> : null}
					{project.modules.Section5 ? <li>Section5 : {project.modules.Section5.type}</li>: null}

				</td>
				<td>
					<button onClick={this.onDeleteClick.bind(this, project._id)} className="btn btn-danger">
						Delete
					</button>
				</td>
				<td>
					<Link
						to={{
							pathname: '/edit-project',
							hash: `${project._id}`
						}}
						className="btn btn-info"
					>
						Edit
					</Link>
				</td>
				<td>
					<Link
						to={{
							pathname: '/preview-project',
							hash: `${project._id}`
						}}
						className="btn btn-warning"
					>
						Preview
					</Link>
				</td>
			</tr>
		));
		return (
			<div>
				<h4 className="mb-4">Projects</h4>
				<table className="table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Description</th>
							<th></th>
							<th> Current Modules</th>
							<th />
							<th />
							<th />
						</tr>
						{project}
					</thead>
				</table>
			</div>
		);
	}
}

// const mapStateToProps = state => ({
// 	project: state.project,
// });

Project.propTypes = {
	deleteProject: PropTypes.func.isRequired
};

export default connect(
	null,
	{ deleteProject, editProject }
)(Project);
