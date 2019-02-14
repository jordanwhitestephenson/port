import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import { withRouter } from "react-router-dom";
import Example1 from "../icons/GalleryExample_01.jpg";
import Example2 from "../icons/GalleryExample_03.jpg";
import Example3 from "../icons/GalleryExample_05.jpg";
import SimpleDialog from "../SimpleDialog";
import { addModule } from "../../../actions/profileActions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

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
		opacity: 0.4,
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
		title: "Left",
		width: "20%"
	},
	{
		url: Example2,
		title: "Center",
		width: "60%"
	},
	{
		url: Example3,
		title: "Right",
		width: "20%"
	}
];

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classes: this.props.classes,
            hash: this.props.location.hash.slice(1),
            image1Preview: '',
			galleryPhotos: [],
			errors: ""
		};
		this.addGalleryToProject = this.addGalleryToProject.bind(this);
	}
    retrieveGalleryFormInput = (info) => {
        
        var rightDW_Image =
            "http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
            info.gallery_Right_Img_SRC.replace("?$staticlink$", "");
        

        var joined = this.state.galleryPhotos.concat(info);
  
        console.log(rightDW_Image, 'CHILD PROP')
		this.setState({
			galleryPhotos: joined
		});
    };
    // 205338_001_Leigh_Wedge_Chelsea_Boot_W_main.png?$staticlink$
	addGalleryToProject(e) {
		e.preventDefault();
		if (this.state.galleryPhotos.length < 3) {
			this.setState({
				error: "Please add all image information, must have 3"
			});
        }
        else {
            this.props.addModule({ type: "Gallery", imageSets: this.state.galleryPhotos }, this.state.hash)
            this.setState({
                error: 'Success!'
            })
        }
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				{images.map((image) => (
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
						<SimpleDialog
							galleryImageName={image.title}
							retrieveGalleryFormInput={this.retrieveGalleryFormInput}
						/>
					</ButtonBase>
				))}
				<div className="error_container">
					<p style={{ color: "red" }}>{this.state.error}</p>

					<Button
						onClick={this.addGalleryToProject}
						variant="contained"
						color="default"
						className={classes.button}>
						Upload
						<CloudUploadIcon className={classes.rightIcon} />
					</Button>
				</div>
			</div>
		);
	}
}

Gallery.propTypes = {
	classes: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	project: state.project
});

export default withRouter(
	connect(
		mapStateToProps,
		{ addModule }
	)(withStyles(styles)(Gallery))
);
