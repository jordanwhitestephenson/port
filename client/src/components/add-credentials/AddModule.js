import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProject } from "../../actions/profileActions";

import TabContainer from "../common/TabContainer";

class AddModule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectID: this.props.location.hash.slice(1),
			current: false,
			title: "",
			project: "",
			paragraph: ""
		};
	}
	componentWillMount() {
		this.props.getCurrentProject(this.state.projectID);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.project !== this.props.project) {
			this.setState({
				project: nextProps.project,
				title: nextProps.project.project.title,
				paragraph: nextProps.project.project.openingParagraph
			});
		}
	}

	// addModuleToProject = (moduleData) => {
	// 	console.log(moduleData, 'THIS IS MODULEDATA')
	// 	this.props.addModule(moduleData, this.state.projectID, this.props.history);
	// };

	render() {
		if (
			this.props.location.pathname === "/edit-project" &&
			!this.props.project.loading
		) {
			return (
				<div className="edit-module">
					<div className="cs_container-crocs">
						<div className="row">
							<div className="col-md-12 m-auto">
								<Link to="/dashboard" className="btn btn-light">
									Go Back
								</Link>
								<h1 className="display-4 text-center">Edit</h1>
								<p className="lead text-center">{this.state.title} project</p>
								<p className="cx-brand-font">{this.state.paragraph}</p>
								<small className="d-block pb-3">* = required fields</small>
								<TabContainer
									projectID={this.state.projectID}
									pathname={this.props.location.pathname}
									editProjectInfo={this.props.project.project}
								/>
							</div>
						</div>
					</div>
				</div>
			);
		} else if (
			this.props.location.pathname === "/add-module" &&
			!this.props.project.loading
		) {
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
		} else {
			return <div>Loading...</div>;
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
	project: state.project
});

export default connect(
	mapStateToProps,
	{ getCurrentProject }
)(withRouter(AddModule));
