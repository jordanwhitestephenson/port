import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import ListModules from "./ListModules";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PreviewAllModules from "../common/preview_templates/PreviewAllModules";
import Done from "@material-ui/icons/Done";
import SyncProblem from "@material-ui/icons/Warning";
import Visibility from "@material-ui/icons/Visibility";

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
		console.log(this.props, "IN CONS");
		this.state = {
			value: 0,
			projectID: this.props.projectID,
			all_modules: [],
			project: "",
			editProjectInfo: this.props.editProjectInfo,
			Section1Type: "",
			Section2Type: "",
			Section3Type: "",
			Section4Type: "",
			Section5Type: "",
			enableSection1: false,
			enableSection2: false,
			enableSection3: false,
			enableSection4: false,
			enableSectionModel: false,
			previewEnabled: false,
			sectionCheck: "",
			pathname: this.props.pathname,
			sectionOneCheck: "",
			sectionTwoCheck: "",
			sectionThreeCheck: "",
			sectionFourCheck: ""
		};
	}

	componentWillReceiveProps(nextProps) {
		if (
			nextProps.project.preview_enabled !== this.props.project.previewEnabled
		) {
			const enableSection1 = nextProps.project.addedSection.includes(
				"Section1"
			);
			const enableSection2 = nextProps.project.addedSection.includes(
				"Section2"
			);
			const enableSection3 = nextProps.project.addedSection.includes(
				"Section3"
			);
			const enableSection4 = nextProps.project.addedSection.includes(
				"Section4"
			);
			const enableSectionModel = nextProps.project.addedSection.includes(
				"Model"
			);
			this.setState({
				previewEnabled: true,
				project: nextProps.project.project,
				addedSections: nextProps.project.addedSection,
				enableSection1: enableSection1,
				enableSection2: enableSection2,
				enableSection3: enableSection3,
				enableSection4: enableSection4,
				enableSectionModel: enableSectionModel,
				editProjectInfo: nextProps.editProjectInfo,
				pathname: nextProps.pathname
			});
		}
	}
	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = (index) => {
		this.setState({ value: index });
	};

	render() {
		const { classes, theme } = this.props;
		let Section1Type = "";
		let Section2Type = "";
		let Section3Type = "";
		let Section4Type = "";
		let Section5Type = "";
		let Section1 = "";
		let Section2 = "";
		let Section3 = "";
		let Section4 = "";
		let Section5 = "";
		let sectionOneCheck = "";
		let sectionTwoCheck = "";
		let sectionThreeCheck = "";
		let sectionFourCheck = "";
		let sectionFiveCheck = "";
		let project = this.state.editProjectInfo.modules;
		//****IF WERE ON EDIT****//
		if (
			this.state.pathname === "/edit-project" &&
			this.state.editProjectInfo.modules.length > 0
		) {
			var changedType = this.state.editProjectInfo.modules.map((module) => {
				if (module.type === "Jumbotron") {
					module.selectedIndex = 1;
				}
				if (module.type === "ProductGrid") {
					module.selectedIndex = 2;
				}
				if (module.type === "Gallery") {
					module.selectedIndex = 3;
				}
				return module;
			});

			Section1 = changedType.filter((module) => module.location === "Section1");
			Section2 = changedType.filter((module) => module.location === "Section2");
			Section3 = changedType.filter((module) => module.location === "Section3");
			Section4 = changedType.filter((module) => module.location === "Section4");
			Section5 = changedType.filter((module) => module.location === "Section5");

			var sectionOnePresent = () => {
				sectionOneCheck = <Done />;
				Section1Type = Section1[0].selectedIndex;
			};
			var sectionTwoPresent = () => {
				sectionTwoCheck = <Done />;
				Section2Type = Section2[0].selectedIndex;
			};
			var sectionThreePresent = () => {
				sectionThreeCheck = <Done />;
				Section3Type = Section3[0].selectedIndex;
			};
			var sectionFourPresent = () => {
				sectionFourCheck = "Section 4";
				Section4Type = Section4[0].selectedIndex;
			};
			var sectionFivePresent = () => {
				sectionFiveCheck = "Section 5";
				Section5Type = Section5[0].selectedIndex;
			};

			Section1.length === 0
				? (sectionOneCheck = <SyncProblem />)
				: sectionOnePresent();
			Section2.length === 0
				? (sectionTwoCheck = <SyncProblem />)
				: sectionTwoPresent();
			Section3.length === 0
				? (sectionThreeCheck = <SyncProblem />)
				: sectionThreePresent();
			Section4.length === 0
				? (sectionFourCheck = <SyncProblem />)
				: sectionFourPresent();
			Section5.length === 0
				? (sectionFiveCheck = <SyncProblem />)
				: sectionFivePresent();
			return (
				<div className={classes.root}>
					<AppBar position="static" color="default">
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="secondary"
							textColor="secondary">
							<Tab label={"Section 1"} icon={sectionOneCheck} />
							<Tab label={"Section 2"} icon={sectionTwoCheck} />
							<Tab label={"Section 3"} icon={sectionThreeCheck} />
							<Tab label={"Section 4"} icon={sectionFourCheck} />
							<Tab label={"Section 5"} icon={sectionFiveCheck} />
							<Tab label={"Preview"} icon={<Visibility />}/>
						</Tabs>
					</AppBar>
					<SwipeableViews
						axis={theme.direction === "rtl" ? "x-reverse" : "x"}
						index={this.state.value}
						onChangeIndex={this.handleChangeIndex}>
						<TabContainer dir={theme.direction} tabClicked={"Section1"}>
							<ListModules
								tabIndex={this.state.value}
								selectedIndex={Section1Type}
								editSection={Section1[0]}
								projectID={this.state.projectID}
								currentSection={"Section1"}
								pathname={this.props.pathname}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ListModules
								tabIndex={this.state.value}
								editSection={Section2[0]}
								selectedIndex={Section2Type}
								projectID={this.state.projectID}
								currentSection={"Section2"}
								pathname={this.props.pathname}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ListModules
								tabIndex={this.state.value}
								editSection={Section3[0]}
								selectedIndex={Section3Type}
								projectID={this.state.projectID}
								currentSection={"Section3"}
								pathname={this.props.pathname}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ListModules
								tabIndex={this.state.value}
								editSection={Section4[0]}
								selectedIndex={Section4Type}
								projectID={this.state.projectID}
								currentSection={"Section4"}
								pathname={this.props.pathname}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ListModules
								tabIndex={this.state.value}
								selectedIndex={Section5Type}
								projectID={this.state.projectID}
								currentSection={"Section5"}
								pathname={this.props.pathname}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<PreviewAllModules moduleArray={project} />
						</TabContainer>
					</SwipeableViews>
				</div>
			);
		}
		if (this.props.pathname === "/add-module") {
			let location = this.props.editProjectInfo.modules.map(
				(module) => module.location
			);

			return (
				<div className={classes.root}>
					<AppBar position="static" color="default">
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary">
							{location.includes("Section1") ? (
								<Tab label={"Section 1 - BUILT"} icon={<Done />} />
							) : (
									<Tab label={"Section 1"} icon={<SyncProblem />}/>
							)}
							{location.includes("Section2") ? (
								<Tab label={"Section 2 - BUILT"} icon={<Done />} />
							) : (
									<Tab label={"Section 2"} icon={<SyncProblem />}/>
							)}
							{location.includes("Section3") ? (
								<Tab label={"Section 3 - BUILT"} icon={<Done />} />
							) : (
									<Tab label={"Section 3"} icon={<SyncProblem/>}/>
							)}
							{location.includes("Section4") ? (
								<Tab label={"Section 4 - BUILT"} icon={<Done />} />
							) : (
									<Tab label={"Section 4"} icon={<SyncProblem />}/>
							)}
							{location.includes("Section5") ? (
								<Tab label={"Section 5 - BUILT"} icon={<Done />} />
							) : (
									<Tab label={"Section 5"} icon={<SyncProblem />} />
							)}
							<Tab label="PREVIEW" icon={<Visibility/>}/>
						</Tabs>
					</AppBar>
					<SwipeableViews
						axis={theme.direction === "rtl" ? "x-reverse" : "x"}
						index={this.state.value}
						onChangeIndex={this.handleChangeIndex}>
						<TabContainer dir={theme.direction}>
							<ListModules
								projectID={this.state.projectID}
								addedModuleInfo={this.props.project.addedModuleInfo}
								currentSection={"Section1"}
								previewEnabled={this.state.enableSection1}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ListModules
								projectID={this.state.projectID}
								addedModuleInfo={this.props.project.addedModuleInfo}
								currentSection={"Section2"}
								previewEnabled={this.state.enableSection2}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ListModules
								projectID={this.state.projectID}
								addedModuleInfo={this.props.project.addedModuleInfo}
								currentSection={"Section3"}
								previewEnabled={this.state.enableSection3}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ListModules
								projectID={this.state.projectID}
								addedModuleInfo={this.props.project.addedModuleInfo}
								currentSection={"Section4"}
								previewEnabled={this.state.enableSection4}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ListModules
								projectID={this.state.projectID}
								currentSection={"Section5"}
								addedModuleInfo={this.props.project.addedModuleInfo}
								previewEnabled={this.state.enableSection5}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<PreviewAllModules moduleArray={project} />
						</TabContainer>
					</SwipeableViews>
				</div>
			);
		} else {
			return (
				<h2 className="error">
					Looks like you haven't added any modules, please build project first.
				</h2>
			);
		}
	}
}

FullWidthTabs.propTypes = {
	theme: PropTypes.object.isRequired,
	pathname: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
	project: state.project,
	addedSection: state.addedSection,
	addedModuleInfo: state.addedModuleInfo
});

export default withRouter(
	connect(mapStateToProps)(
		withStyles(styles, { withTheme: true })(FullWidthTabs)
	)
);
// export default withStyles(styles, { withTheme: true })(FullWidthTabs);
