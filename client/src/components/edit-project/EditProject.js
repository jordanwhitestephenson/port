import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import EditProjectView from './view_container/EditProjectView';

import { getCurrentProject, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-Empty';

const styles = theme => ({
	root: {
		width: '100%'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	}
});

class EditProject extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			openingParagraph: '',
			heading: '',
			description: '',
			errors: {},
			project: '',
			hash: this.props.location.hash.slice(1)
		};
	}

	componentDidMount(props) {
		this.props.getCurrentProfile();
		this.props.getCurrentProject(this.state.hash);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.profile.profile) {
			this.setState({
				project: nextProps.project
			});
			
		}
	}

	// onSubmit(e) {
	// 	e.preventDefault();

	// 	const projectData = {
	// 		title: this.state.title,
	// 		openingParagraph: this.state.openingParagraph,
	// 		description: this.state.description,
	// 		status: this.state.status
	// 	};

	// 	this.props.editProject(projectData, this.props.history, this.state.hash);
	// }

	render() {
		return this.state.project ? (
			<div>
				<EditProjectView project={this.state.project} />
			</div>
		) : (
			<div> loading </div>
		);
	}
}

EditProject.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile,
	project: state.project.project,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ getCurrentProject, getCurrentProfile }
)(withRouter(EditProject));
