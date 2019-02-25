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
import Typography from "@material-ui/core/Typography";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ProjectViewDialog from "../common/modules/sub_modules/ProjectViewDialog";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import GalleryForm from "../common/modules/GalleryForm";

const styles = (theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
		position: "relative",
		overflow: "auto",
		maxHeight: 300
	}
});

class ListModules extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: this.props.selectedIndex,
			currentSection: this.props.location,
			listDataFromChild: ""
		};
		this.onUndo = this.onUndo.bind(this);
	}

	handleListItemClick = (event, index) => {
		this.setState({ selectedIndex: index });
	};

	// sendModuleToProject = (dataFromChild) => {
	// 	this.setState({ listDataFromChild: dataFromChild });
	// 	const projectID = this.props.projectID;
	// 	this.props.addModuleToProject(dataFromChild, projectID)
	// 	this.props.addModuleInfoToContainer(dataFromChild);
	// };
	onUndo() {
		this.setState({
			listDataFromChild: "",
			selectedIndex: 0
		});
	}
	

	render() {
		console.log(this.state, 'listDataFromChild')
		const { classes } = this.props;
	
			return (
				<div>
					<div style={{ display: "flex" }}>
						{this.state.listDataFromChild === "" ? (
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
											<CallToAction />
										</ListItemIcon>
										<ListItemText primary="Footer" />
									</ListItem>

									<ListItem
										button
										selected={this.state.selectedIndex === 5}
										onClick={(event) => this.handleListItemClick(event, 5)}>
										<ListItemIcon>
											<MediaLeft />
										</ListItemIcon>
										<ListItemText primary="Media Left" />
									</ListItem>

									<ListItem
										button
										selected={this.state.selectedIndex === 6}
										onClick={(event) => this.handleListItemClick(event, 6)}>
										<ListItemIcon>
											<MediaRight />
										</ListItemIcon>
										<ListItemText primary="Media Right" />
									</ListItem>

									<ListItem
										button
										selected={this.state.selectedIndex === 7}
										onClick={(event) => this.handleListItemClick(event, 7)}>
										<ListItemIcon>
											<ProductGridThree />
										</ListItemIcon>
										<ListItemText primary="Product Gallery 3" />
									</ListItem>
								</List>

								<Divider />
							</div>
						) : (
							<div className="home_base">
								<IconButton
									onClick={this.onUndo}
									color="default"
									variant="contained">
									<DeleteIcon fontSize="large" />
								</IconButton>
								<ProjectViewDialog
									modulePreview={this.state.listDataFromChild}
								/>
							</div>
						)}
						{this.state.selectedIndex === 1 ? (
							<JumboTronForm
								editSection = {this.props.editSection}
								location={this.props.location}
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
								location={this.props.location}
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

export default withStyles(styles)(ListModules);
