import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { editProject, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-Empty';

class PreviewProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      openingParagraph: '',
      heading: '',
      description: '',
      errors: {},
      hash : this.props.location.hash.slice(1)
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();  
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }


    if (nextProps.profile.profile) {
      var mapped = nextProps.profile.profile.projects.filter(hash => hash._id === this.state.hash)[0]
      mapped.title = !isEmpty(mapped.title) ? mapped.title : '';
      mapped.openingParagraph = !isEmpty(mapped.openingParagraph) ? mapped.openingParagraph : '';
      mapped.description = !isEmpty(mapped.description) ? mapped.description : '';
      mapped.heading = !isEmpty(mapped.heading)
        ? mapped.heading
        : '';
 
      // Set component fields state
      this.setState({
        title: mapped.title,
        openingParagraph: mapped.openingParagraph,
        description: mapped.description,
        heading: mapped.heading,
      });

    }
  }

  onSubmit(e) {
    e.preventDefault();
   
    const projectData = {
      title: this.state.title,
      openingParagraph: this.state.openingParagraph,
      description: this.state.description,
      status: this.state.status,

    };
    console.log(projectData)
    this.props.editProject(projectData, this.props.history, this.state.hash);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

  



    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Preview Project</h1>
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
									placeholder="Description"
									name="description"
									value={this.state.description}
									onChange={this.onChange}
									error={errors.description}
									info="Tell us about your project"
								/>
								<TextAreaFieldGroup
									placeholder="Opening Paragraph"
									name="openingParagraph"
									value={this.state.openingParagraph}
									onChange={this.onChange}
									error={errors.openingParagraph}
									
								/>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-success btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PreviewProject.propTypes = {
  editProject: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { editProject, getCurrentProfile })(
  withRouter(PreviewProject)
);