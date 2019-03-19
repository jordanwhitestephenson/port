import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Example1 from "../icons/StoriesHeadlineExample.png";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import USGDialog from "./sub_modules/USGDialog";
import TextField from "@material-ui/core/TextField";
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
		height: 400,
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
		backgroundPosition: "center center"
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

class StoryHeadlineForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classes: this.props.classes,
			hash: this.props.projectID,
			errors: "",
			refresh: "Upload",
			storyHeadline_HeadlineText: "",
			storyHeadline_ParagraphText: "",
			location: this.props.currentSection,
			projectID: this.props.location.hash.slice(1)
		};
		this.addStoriesToProject = this.addStoriesToProject.bind(this);
	}

	addStoriesToProject(e) {
		e.preventDefault();
		if (!this.state.storyHeadline_HeadlineText) {
			this.setState({
				error: "Headline text is required"
			});
		} else if (!this.state.storyHeadline_ParagraphText) {
			this.setState({
				error: "Paragraph text is required"
			});
		} else {
			const moduleData = {
				location: this.props.currentSection,
				type: "Story_Headline",
				storyInfo: {
					storyHeadline_HeadlineText: this.state.storyHeadline_HeadlineText,
                    storyHeadline_ParagraphText: this.state.storyHeadline_ParagraphText
				},
				project_id: this.state.projectID
			};
			this.props.addModule(moduleData, this.state.projectID);
			this.setState({
				error:
					""
			});
		}
	}
	handleChange = (name) => (event) => {
		this.setState({ [name]: event.target.value });
    };
    

	render() {
		const { classes } = this.props;

		return (
			<div style={{ width: "100%" }} className = "flex_box_column">
				<div className="flex_box_default" style = {{ marginTop: "auto"}}>
					<div className="col-xs-12 col-md-12">
						<img src={Example1} className= "img-responsive box-shadow" style = {{marginBottom : "2em"}} />
						<FormGroup row>
							<TextField
								id="outlined-full-width"
								label="Story Headline"
								value={this.state.storyHeadline_HeadlineText}
								style={{ margin: 8 }}
								onChange={this.handleChange("storyHeadline_HeadlineText")}
								fullWidth
								helperText={"Example: Crocs Stories"}
								margin="normal"
								variant="outlined"
								InputLabelProps={{
									shrink: true
								}}
							/>
							<TextField
								id="outlined-full-width"
								label="Story Headline"
								value={this.state.storyHeadline_ParagraphText}
								style={{ margin: 8 }}
								onChange={this.handleChange("storyHeadline_ParagraphText")}
								fullWidth
								helperText={
									"Example: The place for recent news, events and what we're doing to help everyone be comfortable in their own shoes."
								}
								margin="normal"
								variant="outlined"
								InputLabelProps={{
									shrink: true
								}}
							/>
						</FormGroup>
					</div>
				</div>
				<div className="error_container">
					<div>
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
			</div>
		);
	}
}

StoryHeadlineForm.propTypes = {
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
	)(withStyles(styles)(StoryHeadlineForm))
);
// export default withStyles(styles)(StoryHeadlineForm);
