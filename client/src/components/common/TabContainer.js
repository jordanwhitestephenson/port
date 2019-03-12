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
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// import PreviewAllModules from "../common/preview_templates/PreviewAllModules";
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
			sectionCheck: '',
			pathname: ''
		};
	}

	componentWillReceiveProps(nextProps, nextContext) {
		console.log(nextProps.editProjectInfo, 'EDIT')
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

		//****IF WERE ON EDIT****//
		if (this.state.pathname === "/edit-project" && this.state.editProjectInfo.modules.length > 0
			
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

		//*****ENDING ON : trying to dislay if a section is NULL in EDIT, then display NULL on the tab?//********* */
			console.log('Section4.length', Section4.length )

			Section1.length ? (Section1Type = Section1[0].selectedIndex) : Section1Type = '' && this.setState({ sectionCheck: "1 Null" })

			Section2.length > 0 ? (Section2Type = Section2[0].selectedIndex) : Section2Type = '' && this.setState({ sectionCheck: "2 Null" })
			Section3.length > 0 ? (Section3Type = Section3[0].selectedIndex) : Section3Type = '' && this.setState({ sectionCheck: "3 Null" })
			Section4.length > 0 ? (Section4Type = Section4[0].selectedIndex) : Section4Type = '' && this.setState({ sectionCheck: "4 Null" })
			Section5.length > 0 ? (Section5Type = Section5[0].selectedIndex) : Section5Type = '' && this.setState({ sectionCheck : "5 Null"})
	

			return (
				<div className={classes.root}>
					<AppBar position="static" color="default">
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary">
							<Tab label={'Edit Section One' + `${this.state.sectionCheck}`}/>
							<Tab label={'Edit Section One' + `${this.state.sectionCheck}`} />
							<Tab label="Edit Section Three" />
							<Tab label={'Edit SectionFour' + `${this.state.sectionCheck}`} />
							<Tab label="Edit Section 5" />
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
								editSection={Section1[0]}
								projectID={this.state.projectID}
								currentSection={"Section1"}
								pathname={this.props.pathname}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ListModules
								editSection={Section2[0]}
								selectedIndex={Section2Type}
								projectID={this.state.projectID}
								currentSection={"Section2"}
								pathname={this.props.pathname}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ListModules
								editSection={Section3[0]}
								selectedIndex={Section3Type}
								projectID={this.state.projectID}
								currentSection={"Section3"}
								pathname={this.props.pathname}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ListModules
								editSection={Section4[0]}
								selectedIndex={Section4Type}
								projectID={this.state.projectID}
								currentSection={"Section4"}
								pathname={this.props.pathname}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ListModules
								selectedIndex={Section5Type}
								projectID={this.state.projectID}
								currentSection={"Section5"}
								pathname={this.props.pathname}
							/>
						</TabContainer>
						<TabContainer dir={theme.direction}>
							{/* <PreviewAllModules moduleArray={this.state.all_modules} /> */}
						</TabContainer>
					</SwipeableViews>
				</div>
			);
		}
		if (this.props.pathname === "/add-module") {
			console.log(this.props, "ANT PROJECT>");
			return (
				<div className={classes.root}>
					<AppBar position="static" color="default">
						<Tabs
							value={this.state.value}
							onChange={this.handleChange}
							indicatorColor="primary"
							textColor="primary">
							<Tab label={'Section One'}/>
								<Tab label={'Section Two'}/>
							<Tab label={'Section Three'}/>
							<Tab label={'Section Four'} />
								<Tab label={'Section Fice'}/>
							<Tab label="PREVIEW" />
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
							{/* <PreviewAllModules moduleArray={this.state.all_modules} /> */}
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
	theme: PropTypes.object.isRequired
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
