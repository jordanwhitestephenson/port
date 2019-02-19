import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import { withRouter } from "react-router-dom";
import Example1 from "../icons/GalleryExample_01.jpg";
import Example2 from "../icons/GalleryExample_03.jpg";
import Example3 from "../icons/GalleryExample_05.jpg";
import SimpleDialog from "../SimpleDialog";

import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import UpdateIcon from "@material-ui/icons/Update";

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
		width: "100%"
	},
	{
		url: Example2,
		title: "Center",
		width: "100%"
	},
	{
		url: Example3,
		title: "Right",
		width: "100%"
	}
];

class GalleryForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classes: this.props.classes,
			hash: this.props.projectID,
			image1Preview: "",
			galleryPhotos: [],
			errors: "",
			leftDW_Image: "",
			rightDW_Image: "",
			centerDW_Image: "",
            dm_IMAGE_ARRAY: [],
            refresh: 'Upload',
            location: this.props.location
		};
		this.addGalleryToProject = this.addGalleryToProject.bind(this);
	}
    retrieveGalleryFormInput = (info) => {
       var locationKey = Object.keys(info)[0]
        var galleryPhotosInfo = this.state.galleryPhotos.concat(info)
        if (this.state.galleryPhotos.filter(image => Object.keys(image)[0] === locationKey).length > 0) {
           galleryPhotosInfo = this.state.galleryPhotos.filter(image => Object.keys(image)[0] !== locationKey).concat(info)
        }
          
		this.setState({
			galleryPhotos: galleryPhotosInfo
        });
       
    };

    addGalleryToProject(e) {
        e.preventDefault();
		if (this.state.galleryPhotos.length < 3) {
			this.setState({
				error: "Please add all image information, must have 3"
			});
        } else {
            this.props.callbackfromparent(
                { type: "Gallery", location: this.props.location, imageSets: this.state.galleryPhotos },
				this.state.hash
			);
			this.setState({
                error: "",
                refresh: 'Refresh'
			});
		}
	}

	render() {
        const { classes } = this.props;

		return (
            <div style = {{ width: "100%"}}>
                <div className= "flex_box_default_no_wrap">
				{images.map((image, index) => (
					<div className="col-xs-12 col-md-3">

			
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
						
					</div>
                ))}
                </div>
				<div className="error_container">
					<p style={{ color: "red" }}>{this.state.error}</p>

					<Button
						onClick={this.addGalleryToProject}
						variant="contained"
						color="default"
						className={classes.button}>
						{this.state.refresh}
                        {this.state.refresh === "Refresh" ? 
                            <UpdateIcon className={classes.rightIcon} />
                        : 
                            <CloudUploadIcon className={classes.rightIcon} />
                        }
						
					</Button>
				</div>
			</div>
		);
	}
}

GalleryForm.propTypes = {
	classes: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	project: state.project
});

export default withStyles(styles)(GalleryForm)
