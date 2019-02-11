import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SelectListGroup from './SelectListGroup';
import ListModules from './ListModules';
import { addModule } from '../../actions/profileActions';

function TabContainer({ children, dir }) {
	return (
		<Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
			{children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired
};

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper
	}
});

class FullWidthTabs extends React.Component {
	state = {
		value: 0,
		projectID: this.props.projectID
	};


	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	render() {
		const { classes, theme } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static" color="default">
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
					>
						<Tab label="Section One" />
						<Tab label="Section  Two" />
						<Tab label="Section  Three" />
						<Tab label="Section  Four" />
						<Tab label="Section  5 " />
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={this.state.value}
					onChangeIndex={this.handleChangeIndex}
				>
					<TabContainer dir={theme.direction}>
						<ListModules projectID = {this.state.projectID} addModuleToProject ={this.props.addModuleToProject}  location={'Section1'} />
					</TabContainer>
					<TabContainer dir={theme.direction}>
						<ListModules projectID = {this.state.projectID} addModuleToProject ={this.props.addModuleToProject} location={'Section2'} />
					</TabContainer>
					<TabContainer dir={theme.direction}>
						<ListModules projectID = {this.state.projectID} addModuleToProject ={this.props.addModuleToProject} location={'Section3'} />
					</TabContainer>
					<TabContainer dir={theme.direction}>
						<ListModules projectID = {this.state.projectID} addModuleToProject ={this.props.addModuleToProject} location={'Section4'} />
					</TabContainer>
					<TabContainer dir={theme.direction}>
						<ListModules projectID = {this.state.projectID} addModuleToProject ={this.props.addModuleToProject} location={'Section5'} />
					</TabContainer>
				</SwipeableViews>
			</div>
		);
	}
}

FullWidthTabs.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);