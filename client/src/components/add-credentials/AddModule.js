import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addModule, getCurrentProject } from "../../actions/profileActions";

import TabContainer from "../common/TabContainer";

class AddModule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectID: this.props.location.hash.slice(1),
			current: false,
			title: this.props.location.search.slice(6),
			project: ''
		};
	}
	componentWillMount() {
		
		this.props.getCurrentProject(this.state.projectID);
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps, 'ANY ERRORS?')
		
		if (nextProps.project !== this.props.project) {
			this.setState({ project: nextProps.project});
		}
		
		//So, my goal is now, that when the form passes, the UI changes to just show the previe button.
		// console.log(this.props, '<-props', nextProps, '<---NEXT PROPS')
		// if (nextProps.project !== this.props.project) {
		
		// 	this.setState({ project: nextProps.project.project });
		// }
		
		// this.setState({
		// 	project : nextProps.project.project
		// })
	}

	// addModuleToProject = (moduleData) => {
	// 	console.log(moduleData, 'THIS IS MODULEDATA')
	// 	this.props.addModule(moduleData, this.state.projectID, this.props.history);
	// };


	render() {	
		
		if (this.props.location.pathname === "/edit-project" && !this.props.project.loading) {
			return (
				<div className="edit-module">
					<div className="container">
						<div className="row">
							<div className="col-md-12 m-auto">
								<Link to="/dashboard" className="btn btn-light">
									Go Back
								</Link>
								<h1 className="display-4 text-center">Edit</h1>
								<p className="lead text-center">{this.state.title} project</p>
								<small className="d-block pb-3">* = required fields</small>
								<TabContainer
									projectID={this.state.projectID}
									pathname= {this.props.location.pathname}
									editProjectInfo={this.props.project.project}
								/>
							</div>
						</div>
					</div>
				</div>
			);
		} else if (this.props.location.pathname === "/add-module" && !this.props.project.loading) {
			return (

				<div className="add-module">
					<div className="container">
						<div className="row">
							<div className="col-md-12 m-auto">
								<Link to="/dashboard" className="btn btn-light">
									Go Back
								</Link>
								<h1 className="display-4 text-center">Build Project</h1>
								<p className="lead text-center">
									Please select a module to add to your {this.state.title}{" "}
									project
								</p>
								<small className="d-block pb-3">* = required fields</small>
								<TabContainer
									projectID={this.state.projectID}
									editProjectInfo={this.props.project.project}
									pathname={this.props.location.pathname}
								/>
							</div>
						</div>
					</div>
				</div>
			);
		}
		else {
			return <div>Loading...</div>
		}
	}
}

AddModule.propTypes = {
	profile: PropTypes.object.isRequired,
	errors_object: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors_object: state.errors_object,
	project: state.project,
});

export default connect(
	mapStateToProps,
	{getCurrentProject}
)(withRouter(AddModule));
