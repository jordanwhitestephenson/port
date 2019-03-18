import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Example1 from "../icons/Story3_Example1.png";
import Example2 from "../icons/Story3_Example2.png";
import Example3 from "../icons/Story3_Example3.png";
import ThreeStoryDialog from "./sub_modules/ThreeStoryDialog";
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
    },
    	{
        url: Example3,
        title: "Story_3",
        width: "100%"
    }
];

class TwoStoriesForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classes: this.props.classes,
			hash: this.props.projectID,
			errors: "",
			refresh: "Upload",
			location: this.props.location,
			projectID: this.props.location.hash.slice(1),
			stories: [],
			originalStory: []
		};
		this.addStoriesToProject = this.addStoriesToProject.bind(this);
	}

	componentWillMount() {
		let originalStory = this.props.project.project.modules.filter(
			(module) =>
				module.location === this.props.currentSection &&
				module.type === "Three_Stories"
		);
		//Checking to see if Two_Stories is already in project
		if (originalStory.length > 0) {
			this.setState({
				originalStory: originalStory[0].stories
			});
		}
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
		if (this.state.stories.length < 3) {
			this.setState({
				error: "Please add both stories"
			});
		} else {
			const moduleData = {
				stories: this.state.stories,
				type: "Three_Stories",
				location: this.props.currentSection,
				project_id: this.state.projectID
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
		return (
			<div style={{ width: "100%" }}>
				<div className="flex_box_default_no_wrap">
					{images.map((image, index) => (
						<div className="col-xs-12 col-md-4">
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
								<ThreeStoryDialog
									storyType={image.title}
									retrieveStoryFormInput={this.retrieveStoryFormInput}
									originalStory={this.state.originalStory}
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

TwoStoriesForm.propTypes = {
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
	)(withStyles(styles)(TwoStoriesForm))
);
// export default withStyles(styles)(TwoStoriesForm);
