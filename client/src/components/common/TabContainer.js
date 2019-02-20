import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import SelectListGroup from "./SelectListGroup";
import ListModules from "./ListModules";
import { addModule } from "../../actions/profileActions";

import PreviewAllModules from "../common/preview_templates/PreviewAllModules";
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

const styles = (theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper
	}
});

class FullWidthTabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			projectID: this.props.projectID,
			all_modules: [],
			editProjectInfo: this.props.editProjectInfo,
			Section1Type: "",
			Section2Type: "",
			Section3Type: "",
			Section4Type: "",
			Section5Type: ""
		};
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = (index) => {
		this.setState({ value: index });
	};
	addModuleInfoToContainer = (childInfo) => {
		var filteredSectionArray = this.state.all_modules.filter(
			(section) => section.location !== childInfo.location
		);
		var joined = filteredSectionArray.concat(childInfo);
		this.setState({
			all_modules: joined
		});
	};

	render() {

		const { classes, theme } = this.props;
		let Section1Type = ''
		let Section2Type = ''
		let Section3Type = ''
		if (this.props.editProjectInfo) {
			console.log(this.props.editProjectInfo, 'TAB CONTAIENR')
			var changedType = this.props.editProjectInfo.modules.map((module) => {
				if (module.type === "Jumbotron") {
					module.type = 1;
				}
				if (module.type === "ProductGrid") {
					module.type = 2;
				}
				if (module.type === "Gallery") {
					module.type = 3;
				}
				return module;
			});

			const Section1 = changedType.filter(
				(module) => module.location === "Section1"
			);
			const Section2 = changedType.filter(
				(module) => module.location === "Section2"
			);
			const Section3 = changedType.filter(
				(module) => module.location === "Section3"
			);
			Section1Type = Section1[0].type
			Section2Type = Section2[0].type
			Section3Type = Section3[0].type
		}
		return (
			<div className={classes.root}>
				<AppBar position="static" color="default">
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary">
						<Tab label="Sectiodn One" />
						<Tab label="Sectiodn  Two" />
						<Tab label="Sectidon  Three" />
						<Tab label="Sectidon  Four" />
						<Tab label="Sectdion  5 " />
						<Tab label="PREVdIEW" />
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={this.state.value}
					onChangeIndex={this.handleChangeIndex}>
					<TabContainer dir={theme.direction}>
						<ListModules
							selectedIndex={Section1Type}
							projectID={this.state.projectID}
							addModuleToProject={this.props.addModuleToProject}
							addModuleInfoToContainer={this.addModuleInfoToContainer}
							location={"Section1"}
						/>
					</TabContainer>
					<TabContainer dir={theme.direction}>
						<ListModules
							selectedIndex={Section2Type}
							projectID={this.state.projectID}
							addModuleToProject={this.props.addModuleToProject}
							addModuleInfoToContainer={this.addModuleInfoToContainer}
							location={"Section2"}
						/>
					</TabContainer>
					<TabContainer dir={theme.direction}>
						<ListModules
							selectedIndex={Section3Type}
							projectID={this.state.projectID}
							addModuleToProject={this.props.addModuleToProject}
							addModuleInfoToContainer={this.addModuleInfoToContainer}
							location={"Section3"}
						/>
					</TabContainer>
					<TabContainer dir={theme.direction}>
						<ListModules
							selectedIndex={this.state.Section4Type}
							projectID={this.state.projectID}
							addModuleToProject={this.props.addModuleToProject}
							addModuleInfoToContainer={this.addModuleInfoToContainer}
							location={"Section4"}
						/>
					</TabContainer>
					<TabContainer dir={theme.direction}>
						<ListModules
							selectedIndex={this.state.Section5Type}
							projectID={this.state.projectID}
							addModuleToProject={this.props.addModuleToProject}
							addModuleInfoToContainer={this.addModuleInfoToContainer}
							location={"Section5"}
						/>
					</TabContainer>
					<TabContainer dir={theme.direction}>
						<PreviewAllModules moduleArray={this.state.all_modules} />
					</TabContainer>
				</SwipeableViews>
			</div>
		);

		// const Section1 = this.props.editProjectInfo.modules.filter(module => module.location === "Section1")
	}
}

FullWidthTabs.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
