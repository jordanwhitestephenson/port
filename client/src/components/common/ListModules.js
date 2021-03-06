import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ViewModule from "@material-ui/icons/ViewColumn";
import CallToAction from "@material-ui/icons/CallToAction";
import MediaLeft from "@material-ui/icons/FeaturedVideo";
import MediaRight from "@material-ui/icons/BrandingWatermark";
import ProductGridThree from "@material-ui/icons/ViewCarousel";
import ProductGridForm from "./modules/ProductGridForm";
import JumboTron from "@material-ui/icons/PanoramaWideAngle";
import SquareGrid from "@material-ui/icons/ViewComfy";
import Divider from "@material-ui/core/Divider";
import JumboTronForm from "../common/modules/JumboTronForm";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ProjectViewDialog from "../common/modules/sub_modules/ProjectViewDialog";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import GalleryForm from "../common/modules/GalleryForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TwoStoriesForm from "./modules/TwoStoriesForm";
import ThreeStoriesForm from "./modules/ThreeStoriesForm";
import StoryHeadlineForm from "./modules/StoryHeadlineForm";
import EmailSocialForm from "./modules/EmailSocialForm";
import USGForm from "./modules/USGForm";
import TwoColumnStory from "./icons/twoColumn.png";
import ThreeColumnStory from "./icons/ThreeColumn.png";
import USG from "./icons/USGExample.png";
import Headliner from "./icons/HeadlineExample.png";
import EmailSignup from "./icons/SocialIcon.png";

const styles = (theme) => ({
	root: {
		width: "80%",
		maxWidth: 200,
		backgroundColor: theme.palette.background.paper,
		position: "relative",
		overflow: "auto",
		maxHeight: 800
	}
});

class ListModules extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: this.props.selectedIndex,
			currentSection: this.props.currentSection,
			listDataFromChild: "",
			previewEnabled: false,
			project: this.props.project.project
		};
		this.onUndo = this.onUndo.bind(this);
	}
	static getDerivedStateFromProps(props, state) {
		// eslint-disable-next-line no-unused-expressions

		if (
			props.project.preview_enabled &&
			props.project.previewEnabled !== state.previewEnabled
		) {
			return {
				previewEnabled: props.project.preview_enabled
			};
		}
		return props.tabIndex === 1
			? { currentSection: "Section1" }
			: props.tabIndex === 2
			? { currentSection: "Section2" }
			: props.tabIndex === 3
			? { currentSection: "Section3" }
			: null;
	}
	handleListItemClick = (event, index) => {
		this.setState({ selectedIndex: index });
	};
	onUndo() {
		this.setState({
			previewEnabled: false,
			selectedIndex: 0
		});
	}

	render() {
		const { classes } = this.props;

		return (
			<div>
				<div style={{ display: "flex" }}>
					{!this.state.previewEnabled ? (
						<div className={classes.root}>
							<List component="nav">
								<ListItem
									button
									selected={this.state.selectedIndex === 0}
									onClick={(event) => this.handleListItemClick(event, 0)}>
									<ListItemIcon>
										<ExpandMore />
									</ListItemIcon>
								</ListItem>
								<ListItem
									button
									selected={this.state.selectedIndex === 1}
									onClick={(event) => this.handleListItemClick(event, 1)}>
									<ListItemIcon>
										<JumboTron />
									</ListItemIcon>
									<ListItemText primary="JumboTron" />
								</ListItem>
								<ListItem
									button
									selected={this.state.selectedIndex === 2}
									onClick={(event) => this.handleListItemClick(event, 2)}>
									<ListItemIcon>
										<SquareGrid />
									</ListItemIcon>
									<ListItemText primary="With Product Grid" />
								</ListItem>
								<ListItem
									button
									selected={this.state.selectedIndex === 3}
									onClick={(event) => this.handleListItemClick(event, 3)}>
									<ListItemIcon>
										<ViewModule />
									</ListItemIcon>
									<ListItemText primary="Gallery" />
								</ListItem>

								<ListItem
									button
									selected={this.state.selectedIndex === 4}
									onClick={(event) => this.handleListItemClick(event, 4)}>
									<ListItemIcon>
										<img src={Headliner} />
									</ListItemIcon>
									<ListItemText primary="Stories Headline" />
								</ListItem>

								<ListItem
									button
									selected={this.state.selectedIndex === 5}
									onClick={(event) => this.handleListItemClick(event, 5)}>
									<ListItemIcon>
										<img src={TwoColumnStory} />
									</ListItemIcon>
									<ListItemText primary="Two Column" />
								</ListItem>

								<ListItem
									button
									selected={this.state.selectedIndex === 6}
									onClick={(event) => this.handleListItemClick(event, 6)}>
									<ListItemIcon>
										<img src={ThreeColumnStory} />
									</ListItemIcon>
									<ListItemText primary="Three Column" />
								</ListItem>

								<ListItem
									button
									selected={this.state.selectedIndex === 7}
									onClick={(event) => this.handleListItemClick(event, 7)}>
									<ListItemIcon>
										<img src={USG} />
									</ListItemIcon>
									<ListItemText primary="USG" />
								</ListItem>

								<ListItem
									button
									selected={this.state.selectedIndex === 8}
									onClick={(event) => this.handleListItemClick(event, 8)}>
									<ListItemIcon>
										<img src={EmailSignup} alt="email" />
									</ListItemIcon>
									<ListItemText primary="Email-Signup/Social-Links" />
								</ListItem>
							</List>

							<Divider />
						</div>
					) : (
						<div className="home_base">
							{this.state.previewEnabled ? (
								<div>
									<IconButton
										onClick={this.onUndo}
										color="default"
										variant="contained">
										<DeleteIcon fontSize="large" />
									</IconButton>
									<ProjectViewDialog
										modulePreview={this.props.project.addedModuleInfo}
									/>
								</div>
							) : (
								<div>NO preview available</div>
							)}
						</div>
					)}
					{this.state.selectedIndex === 1 ? (
						<JumboTronForm
							editSection={this.props.editSection}
							currentSection={this.state.currentSection}
							projectID={this.props.projectID}
							sendModuleToProject={this.sendModuleToProject}
						/>
					) : null}
					{this.state.selectedIndex === 2 ? (
						<ProductGridForm
							editSection={this.props.editSection}
							currentSection={this.state.currentSection}
							projectID={this.props.projectID}
							sendModuleToProject={this.sendModuleToProject}
						/>
					) : null}
					{this.state.selectedIndex === 3 ? (
						<GalleryForm
							editSection={this.props.editSection}
							currentSection={this.state.currentSection}
							projectID={this.props.projectID}
							sendModuleToProject={this.sendModuleToProject}
						/>
					) : null}
					{this.state.selectedIndex === 4 ? (
						<StoryHeadlineForm
							editSection={this.props.editSection}
							currentSection={this.state.currentSection}
							projectID={this.props.projectID}
							sendModuleToProject={this.sendModuleToProject}
						/>
					) : null}
					{this.state.selectedIndex === 5 ? (
						<TwoStoriesForm
							editSection={this.props.editSection}
							currentSection={this.state.currentSection}
							projectID={this.props.projectID}
							sendModuleToProject={this.sendModuleToProject}
						/>
					) : null}
					{this.state.selectedIndex === 6 ? (
						<ThreeStoriesForm
							editSection={this.props.editSection}
							currentSection={this.state.currentSection}
							projectID={this.props.projectID}
							sendModuleToProject={this.sendModuleToProject}
						/>
					) : null}
					{this.state.selectedIndex === 7 ? (
						<USGForm
							editSection={this.props.editSection}
							currentSection={this.state.currentSection}
							projectID={this.props.projectID}
							sendModuleToProject={this.sendModuleToProject}
						/>
					) : null}
					{this.state.selectedIndex === 8 ? (
						<EmailSocialForm
							editSection={this.props.editSection}
							currentSection={this.state.currentSection}
							projectID={this.props.projectID}
							sendModuleToProject={this.sendModuleToProject}
						/>
					) : null}
				</div>
			</div>
		);
	}
}

ListModules.propTypes = {
	classes: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	project: state.project
});
export default withRouter(
	connect(mapStateToProps)(withStyles(styles)(ListModules))
);
