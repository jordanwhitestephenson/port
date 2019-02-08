import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
	root: {
		width: '100%'
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
	state = {
		expanded: null,
		section: '',
		name: '',
		project: this.props.project.Section1
	};

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		});
	};
	handleFieldChange = i => e => {
		// let values = [...Object.keys(this.state.project)];
		// values[i] = e.target.value;
		// this.setState({ values });
		// console.log(this.state.project);
	};

	render() {
		const { classes } = this.props;
		const { expanded } = this.state;

		const fieldName = Object.keys(this.state.project);
        const fieldValues = Object.entries(this.state.project)
        var cloneA = JSON.parse(JSON.stringify(fieldName))
        console.log(this.props)
   

		return (
			<div className={classes.root}>
				<ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>Section 1</Typography>
						<Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						{cloneA.map((key, index) => (
							<TextField
								key={index}
								id="outlined-uncontrolled"
								fullWidth
								label={key}
								className={classes.textField}
								margin="normal"
								variant="outlined"
								onChange={this.handleFieldChange(key)}
								placeholder = {key}
								InputLabelProps={{
									shrink: true
								}}
							/>
						))}

						<Typography />
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>Users</Typography>
						<Typography className={classes.secondaryHeading}>You are currently not an owner</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam
							eros in elit. Pellentesque convallis laoreet laoreet.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>Advanced settings</Typography>
						<Typography className={classes.secondaryHeading}>
							Filtering has been entirely disabled for whole web server
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
							vitae egestas augue. Duis vel est augue.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>Personal data</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
							vitae egestas augue. Duis vel est augue.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		);
	}
}

EditProjectView.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProjectView);
