import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//Whenver you use REDUX in a component, you'll need to import 'connect'. Connect connects REDUX to this component
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import the ACTION we want to use, which is register user.
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {}
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
			//this way, we get the errors from our redux state, it gets put into props with mapStatetoProps
		}
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};
		this.props.registerUser(newUser, this.props.history);
	}

	render() {
		const { errors } = this.state;

		return (
			<div className="register">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Sign Up</h1>
							<p className="lead text-center">Create your CrocConnector account</p>
							<form onSubmit={this.onSubmit}>
								<TextFieldGroup
									placeholder="Enter Yo Name"
									name="name"
									type="text"
									value={this.state.name}
									onChange={this.onChange}
									error={errors.name}
								/>
								<TextFieldGroup
									placeholder="Please enter your email"
									name="email"
									type="email"
									value={this.state.email}
									onChange={this.onChange}
									error={errors.email}
									info = "This site uses gravatar so if you want a profile image, use a Gravatar email"
								/>
								<TextFieldGroup
									placeholder="Please enter a password"
									name="password"
									type="password"
									value={this.state.password}
									onChange={this.onChange}
									error={errors.password}
								/>
								<TextFieldGroup
									placeholder="Confirm password"
									name="password2"
									type="password"
									value={this.state.password2}
									onChange={this.onChange}
									error={errors.password2}
								/>
								<input type="submit" className="btn btn-success btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

//If we want to retrieve any of the Auth state into our component, we'll create a function called Mapstate
const mapStatetoProps = state => ({
	auth: state.auth,
	errors: state.errors
	//state.auth & state.errors comes from the root reducer in index.js
});

export default connect(
	mapStatetoProps,
	{ registerUser }
)(withRouter(Register));
//Second Parameter - going to be an object where we can map our actions
//The last set of parathesis is the component you want to 'connect', which in this case, we want to connect registerUser to the Register component;
