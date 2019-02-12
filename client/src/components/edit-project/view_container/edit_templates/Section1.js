import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import JumboTronForm from '../../../common/modules/JumboTronForm';
import { withRouter } from 'react-router-dom';
import { updateSectionOne } from '../../../../actions/profileActions'


class Section1Edit extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            expanded: null,
            section: '',
            name: '',
						moduleInfo: this.props.info[0],
						section1Info: '',
						Section1 : ''
        }
	};

    handleFieldChange = name => event => {
        const { Section1 } = this.state

				this.setState({
			[Section1[name]]: event.target.value
        });
        
	};
    handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
		};
	
	sendModuleToProject = dataFromChild => {
			this.setState({ section1Info: dataFromChild });
			const projectID = this.props.projectID;
			this.props.updateSectionOne(dataFromChild, projectID);
		};
	
	
	render() {
		console.log(this.state.moduleInfo, 'moduleInfoSection1')
		return (
				<ExpansionPanelDetails style={{ flexDirection: 'column' }}>
				{this.props.moduleType === 'Jumbotron' ?
					<JumboTronForm callbackfromparent={this.sendModuleToProject}
						paragraphText={this.state.moduleInfo.paragraphText}
						location={this.state.moduleInfo.location}
						main_image_SRC={this.state.moduleInfo.main_image_SRC}
						main_image_link={this.state.moduleInfo.main_image_link}
						headline = {this.state.moduleInfo.headline}
					/> : null}
				</ExpansionPanelDetails>
		);
	}
}

Section1Edit.propTypes = {
	classes: PropTypes.object.isRequired,
	paragraphText: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
	Section1: state.section1,
});


export default connect(
	mapStateToProps,
	{ updateSectionOne }
)(withRouter(Section1Edit));

