import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Switch, FormControlLabel } from '@material-ui/core';
import { addingModuleOne } from '../../actions/profileActions';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export class Module1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			header: '',
			paragraph: '',
			button: false,
      buttontext: null,
      buttonlink: null,
			imagelayout: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.callbackFromParent(this.state);
		console.log(this.state);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleChange = name => event => {
		this.setState({ [name]: event.target.checked });
	};

	handleRadioChange = event => {
		this.setState({ imagelayout: event.target.value });
	};

  render() {
    const { classes } = this.props;

		return (
			<div>
				<h2>Module 1</h2>

				<form onSubmit={this.onSubmit}>
					<div className="form-row align-items-center">
						<div className="col-md-4 mb-3">
							<label for="module1Header">Header 1</label>
							<TextFieldGroup
								placeholder="Module 1 Header"
								name="header"
								value={this.state.header}
								onChange={this.onChange}
								className="form-control mb-2"
								id="module1Header"
							/>
						</div>

						<div className="col-md-4 mb-3">
							<label htmlFor="module1Paragraph">Paragraph Text</label>
							<TextFieldGroup
								placeholder="Header's Paragraph"
								name="paragraph"
								value={this.state.paragraph}
								onChange={this.onChange}
								className="form-control mb-2"
								id="module1Paragraph"
							/>
						</div>
					</div>
          <div className="form-row">
            
             
						<FormControlLabel
							control={
								<Switch
									checked={this.state.button}
									onChange={this.handleChange('button')}
									value="Button"
								/>
							}
							label="add button"
						/>
						{this.state.button === true ? (
              <div className="form-row">
                
								<TextFieldGroup
									placeholder="Button Text"
									name="buttontext"
									value={this.state.buttontext}
									onChange={this.onChange}
									className="form-control mb-2"
								/>
								<TextFieldGroup
									placeholder="Button Link"
									name="buttonlink"
									value={this.state.buttonlink}
									onChange={this.onChange}
									className="form-control mb-2"
								/>
							</div>
						) : null}
					</div>

					<div className="form-row">
						<FormControl component="fieldset" required >
							<FormLabel component="legend">Image Location</FormLabel>
							<RadioGroup
								aria-label="Layout"
								name="imagelayout"
								value={this.state.imagelayout}
								onChange={this.handleRadioChange}
							>
								<FormControlLabel value="left" control={<Radio />} label="left" />
								<FormControlLabel value="right" control={<Radio />} label="right" />
							</RadioGroup>
						</FormControl>
					</div>

					<div className="col-auto">
						<button type="submit" value="Submit" className="btn btn-primary mb-2">
							{' '}
							Add{' '}
						</button>
					</div>
				</form>
			</div>
		);
	}
}

// Module1.propTypes = {
// 	addModule: PropTypes.func.isRequired,
// 	profile: PropTypes.object.isRequired,
// 	errors: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
	header: state.header
});

export default connect(
	mapStateToProps,
	{ addingModuleOne }
)(withRouter(Module1));
