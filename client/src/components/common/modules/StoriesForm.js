import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Example1 from "../icons/Story1Example.png";
import Example2 from "../icons/StoryTwoExample.png";
import StoryDialog from "./sub_modules/StoryDialog";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import UpdateIcon from "@material-ui/icons/Update";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addModule } from "../../../actions/profileActions";

const styles = (theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		minWidth: 300,
		width: "100%"
	},
	image: {
		position: "relative",
		height: 200,
		[theme.breakpoints.down("xs")]: {
			width: "100% !important", // Overrides inline-style
			height: 100
		},
		"&:hover, &$focusVisible": {
			zIndex: 1,
			"& $imageBackdrop": {
				opacity: 0.15
			},
			"& $imageMarked": {
				opacity: 0
			},
			"& $imageTitle": {
				border: "4px solid currentColor"
			}
		}
	},
	focusVisible: {},
	imageButton: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: theme.palette.common.white
	},
	imageSrc: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: "cover",
		backgroundPosition: "center 40%"
	},
	imageBackdrop: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.1,
		transition: theme.transitions.create("opacity")
	},
	imageTitle: {
		position: "relative",
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
			.spacing.unit + 6}px`
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: "absolute",
		bottom: -2,
		left: "calc(50% - 9px)",
		transition: theme.transitions.create("opacity")
	}
});

const images = [
	{
		url: Example1,
		title: "Story_1",
		width: "100%"
	},
	{
		url: Example2,
		title: "Story_2",
		width: "100%"
	}
];

class StoriesForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classes: this.props.classes,
			hash: this.props.projectID,
			errors: "",
			refresh: "Upload",
			location: this.props.location,
			stories: []
		};
		this.addStoriesToProject = this.addStoriesToProject.bind(this);
	}
	retrieveStoryFormInput = (info) => {
		var storyType = Object.keys(info)[0];
		var storyState = this.state.stories;
		var storyAddedArray = storyState.filter(
			(story) => Object.keys(story)[0] === storyType
		);
		var addToArray = storyState.concat(info);
		var checkforDuplicate = storyState
			.filter((story) => Object.keys(story)[0] !== storyType)
			.concat(info);

		if (storyAddedArray.length > 0) {
			this.setState({
				stories: checkforDuplicate
			});
		} else {
			this.setState({
				stories: addToArray
			});
		}
	};

	addStoriesToProject(e) {
		e.preventDefault();
		if (this.state.stories.length < 2) {
			this.setState({
				error: "Please add both stories"
			});
		} else {
			const moduleData = {
				stories: this.state.stories
			};
			this.props.addModule(moduleData, this.state.hash);

			this.setState({
				error: "",
				refresh: "Refresh"
			});
		}
	}

	render() {
		const { classes } = this.props;
		var storyState = this.state.stories;
		console.log(this.state.stories, "stories");
		// var removeDuplicates = storyState.filter(story => story.)

		return (
			<div style={{ width: "100%" }}>
				<div className="flex_box_default_no_wrap">
					{images.map((image, index) => (
						<div className="col-xs-12 col-md-6">
							<ButtonBase
								focusRipple
								key={image.title}
								className={classes.image}
								focusVisibleClassName={classes.focusVisible}
								style={{
									width: image.width
								}}>
								<span
									className={classes.imageSrc}
									style={{
										backgroundImage: `url(${image.url})`
									}}
								/>
								<span className={classes.imageBackdrop} />
								<StoryDialog
									storyType={image.title}
									retrieveStoryFormInput={this.retrieveStoryFormInput}
								/>
							</ButtonBase>
						</div>
					))}
				</div>
				<div className="error_container">
					<p style={{ color: "red" }}>{this.state.error}</p>

					<Button
						onClick={this.addStoriesToProject}
						variant="contained"
						color="default"
						className={classes.button}>
						{this.state.refresh}
						{this.state.refresh === "Refresh" ? (
							<UpdateIcon className={classes.rightIcon} />
						) : (
							<CloudUploadIcon className={classes.rightIcon} />
						)}
					</Button>
				</div>
			</div>
		);
	}
}

StoriesForm.propTypes = {
	classes: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	project: state.project,
	errors_object: state.errors_object
});
export default withRouter(
	connect(
		mapStateToProps,
		{ addModule }
	)(withStyles(styles)(StoriesForm))
);
// export default withStyles(styles)(StoriesForm);
