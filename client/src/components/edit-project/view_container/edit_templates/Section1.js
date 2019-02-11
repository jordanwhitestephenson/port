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

class Section1Edit extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            expanded: null,
            section: '',
            name: '',
            moduleInfo: this.props.info,

        }

        // this.handleFieldChange = this.handleFieldChange.bind(this)
	};

    handleFieldChange = name => event => {

        const { Section1 } = this.state
        console.log(event.target.value)
		this.setState({
			[Section1[name]]: event.target.value
        });
        
	};
    handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };
	render() {
		const { classes } = this.props;
        const { expanded } = this.state;
        const {Section1, Section2}  = this.state
        var infoObject = this.state.moduleInfo[0]
		// var entries = infoObject.entries()
		// console.log(entries)
   
	
		return (
			<div className={classes.root} >
						<ExpansionPanelDetails style = {{ flexDirection: 'column'}}>
							{
								// <TextField
									
								// 	id="outlined-uncontrolled"
								// 	fullWidth
								// 	label={item[0]}
								// 	className={classes.textField}
								// 	margin="normal"
								// 	variant="outlined"
								// 	value={[item]}
								// 	onChange={this.handleFieldChange(`${[item[0]]}`)}
								// 	placeholder={item[1]}
								// 	InputLabelProps={{
								// 		shrink: true
								// 	}}
                                // />
								<ul>
								{infoObject.map((value, index) => {
								  return <li key={index}>{value}</li>
								})}
							  </ul>
							}
						</ExpansionPanelDetails>
					
			
			</div>
		);
	}
}

Section1Edit.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Section1Edit);