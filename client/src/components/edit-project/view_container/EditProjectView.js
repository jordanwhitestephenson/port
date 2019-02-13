import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Section1 from './edit_templates/Section1';

const styles = theme => ({
	root: {
		width: '100%',
		flexDirection: 'column'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	}
});

class EditProjectView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: null,
			section: '',
			name: '',
			project: this.props.project
		};
	}


	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		});
	};
	render() {

		const { classes } = this.props;
		const projectID = this.props.project._id
		const { expanded } = this.state;
		var Section1Info = this.state.project.modules.filter(module => module.location === 'Section1');
		var Section2Info = this.state.project.modules.filter(module => module.location === 'Section2');
	
		console.log(Section1Info[0].location)
		return (
			<div className={classes.root}>
				{this.props.project.modules.length === 0 ? <div>You have no modules added to this project, please go back and build your project!</div>
					: this.props.project.modules.length < 5 ? <div>Your project isn't complete, please add more modules</div>
					:
					
					
				<div>	
						
				<ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>{Section1Info[0].location}</Typography>
						<Typography className={classes.secondaryHeading}>{Section1Info[0].type}</Typography>
					</ExpansionPanelSummary>
					<Section1 info={Section1Info} projectID={projectID} moduleType={Section1Info[0].type}/>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>{Section2Info[0].location}</Typography>
						<Typography className={classes.secondaryHeading}>{Section2Info[0].type}</Typography>
					</ExpansionPanelSummary>
					{/* <Section2 info={Section2Info} projectID={projectID} moduleType={Section2Info[0].type}/> */}
					</ExpansionPanel>
					</div>
				}
			</div>
			
		);
	}
}

EditProjectView.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProjectView);
