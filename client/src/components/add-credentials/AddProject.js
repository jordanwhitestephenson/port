import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProject } from '../../actions/profileActions';
import SelectListGroup from '../common/SelectListGroup';

class AddProject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			heading: '',
			openingParagraph: '',
			description: '',
			errors: {},
			icon: ''

		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onCheck = this.onCheck.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onSubmit(e) {
		e.preventDefault();

		const projectData = {
			title: this.state.title,
			heading: this.state.heading,
			openingParagraph: this.state.openingParagraph,
			description: this.state.description,
			icon:  this.state.icon
		};
		this.props.addProject(projectData, this.props.history);
	}

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
		const { errors } = this.state;
		const options = [
			{ label: '* Select Icon for Project', value: 0 },
			{ label: 'Drew Barrymore', value: 'Drew Barrymore' },
			{ label: 'Post Malone', value: 'Post Malone' },
			{ label: 'John Cena', value: 'John Cena' },
			{ label: 'LiteRide', value: 'LiteRide' },
			{ label: 'Reviva', value: 'Reviva' },
			{ label: 'Classic Clog', value: 'Classic Clog' },
		  ];
		return (
			<div className="add-project">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<Link to="/dashboard" className="btn btn-light">
								Go Back
							</Link>
							<h1 className="display-4 text-center">Add Project</h1>
							<p className="lead text-center">Add a project</p>
							<small className="d-block pb-3">* = required fields</small>
							<form onSubmit={this.onSubmit}>
								<TextFieldGroup
									placeholder="Project Title"
									name="title"
									value={this.state.title}
									onChange={this.onChange}
									error={errors.title}
								/>
								<TextFieldGroup
									placeholder="Heading"
									name="heading"
									value={this.state.heading}
									onChange={this.onChange}
									error={errors.heading}
								/>
								<TextAreaFieldGroup
									info="Tell us about your project"
									placeholder= "Description"
									name="openingParagraph"
									value={this.state.openingParagraph}
									onChange={this.onChange}
									error={errors.openingParagraph}	
								/>
									<SelectListGroup
									placeholder="Status"
									name="icon"
									value={this.state.icon}
									onChange={this.onChange}
									options={options}
									error={errors.status}
									info="Select an Icon for your project"
									/>
								<input type="submit" value="Submit" className="btn btn-success btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

AddProject.propTypes = {
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ addProject }
)(withRouter(AddProject));
