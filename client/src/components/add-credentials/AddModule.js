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
			project: ""
		};
		this.onChange = this.onChange.bind(this);
		this.onCheck = this.onCheck.bind(this);
	}
	componentWillMount() {
		this.props.getCurrentProject(this.state.projectID);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps) {
			this.setState({ project: nextProps.project.project });
		}
		this.setState({
			project : nextProps.project.project
		})
	}

	addModuleToProject = (moduleData) => {
		this.props.addModule(moduleData, this.state.projectID, this.props.history);
	};

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onCheck(e) {
		this.setState({
			disabled: !this.state.disabled,
			current: !this.state.current
		});
	}

	render() {	
		if (this.props.location.pathname === "/edit-project" && this.props.project.project) {
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
									editProjectInfo = {this.props.project.project}
									addModuleToProject={this.addModuleToProject}
								/>
							</div>
						</div>
					</div>
				</div>
			);
		} else if (this.props.project.project) {
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
									addModuleToProject={this.addModuleToProject}
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
	addModule: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.errors,
	project: state.project,
});

export default connect(
	mapStateToProps,
	{ addModule, getCurrentProject}
)(withRouter(AddModule));
