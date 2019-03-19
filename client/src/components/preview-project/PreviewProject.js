import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
	getCurrentProfile,
	getCurrentProject
} from "../../actions/profileActions";
import isEmpty from "../../validation/is-Empty";
import PreviewProjectVIEW from "../preview-project/PreviewProjectVIEW";

class PreviewProject extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			openingParagraph: "",
			heading: "",
			description: "",
			errors: {},
			hash: this.props.location.hash.slice(1),
			project: ""
		};
	}

	componentDidMount() {
		this.props.getCurrentProfile();
		this.props.getCurrentProject(this.props.location.hash.slice(1));
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
		if (nextProps.project.project) {
			this.setState({
				project: nextProps.project
			});
		}
		console.log(nextProps, 'NEXT')
		if (nextProps.profile.profile) {
			console.log(nextProps.profile.profile, "PROFE", this.props);
			var mapped = nextProps.profile.profile.projects.filter(
				(hash) => hash._id === this.state.hash
			)[0];
			if (mapped) {
				mapped.title = !isEmpty(mapped.title) ? mapped.title : "";
				mapped.openingParagraph = !isEmpty(mapped.openingParagraph)
					? mapped.openingParagraph
					: "";
				mapped.description = !isEmpty(mapped.description)
					? mapped.description
					: "";
				mapped.heading = !isEmpty(mapped.heading) ? mapped.heading : "";	
				this.setState({
					title: mapped.title,
					openingParagraph: mapped.openingParagraph,
					description: mapped.description,
					heading: mapped.heading
				});
			}

			// Set component fields state

		}
	}
	//*****TO DO, since we need to wait on props, we need to have this component call this.props.GetCurrentProject and then pass the props it retreaves to the props of the PreviewProjectView */

	render() {
		if (this.props.project) {
			return <PreviewProjectVIEW project={this.state.project} />;
		} else {
			return <div>Loading...</div>;
		}
	}
}

PreviewProject.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	project: state.project
});

export default connect(
	mapStateToProps,
	{ getCurrentProfile, getCurrentProject }
)(withRouter(PreviewProject));
