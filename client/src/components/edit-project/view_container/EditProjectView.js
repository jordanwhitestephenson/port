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
		const { expanded } = this.state;
		var Section1Info = this.state.project.modules.filter(module => module.location === 'Section1');

		return (
			<div className={classes.root}>
				<ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>{Section1Info.location}</Typography>
						<Typography className={classes.secondaryHeading}>{Section1Info.type}</Typography>
					</ExpansionPanelSummary>
					<Section1 info={Section1Info} />
				</ExpansionPanel>
			</div>
		);
	}
}

EditProjectView.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProjectView);
