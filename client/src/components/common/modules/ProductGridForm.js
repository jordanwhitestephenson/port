import React, { Component } from "react";
import PropTypes from "prop-types";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import LeftIcon from "../../common/icons/LEFT_PRODUCT_GRID.jpg";
import RightIcon from "../../common/icons/RIGHT_PRODUCT_GRID.jpg";
import {addModule, getCurrentProject} from "../../../actions/profileActions";
import Clog1 from "../icons/205330_97A_Crocband_Graphic_III_Clog_main.png";
import Clog2 from "../icons/205166_1AS_Crocband_Gallery_Clog_main.png";
import Clog3 from "../icons/205338_001_Leigh_Wedge_Chelsea_Boot_W_main.png";
import Model from "../icons/MODEL_TEST.png";
import Clog4 from "../icons/PinkCroc.png";
import ProductGridDialog from "./sub_modules/ProductGridDialog";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import UpdateIcon from "@material-ui/icons/Update";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

const styles = (theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		minWidth: 300,
		width: "100%"
	},
	image: {
		position: "relative",
		height: 145,
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
		backgroundSize: "contain",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat"
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
		url: Clog4,
		title: "Product_1",
		width: "50%"
	},
	{
		url: Clog2,
		title: "Product_2",
		width: "50%"
	},
	{
		url: Clog3,
		title: "Product_3",
		width: "50%"
	},
	{
		url: Clog1,
		title: "Product_4",
		width: "50%"
	}
];
const model = {
	url: Model,
	title: "Model",
	width: "100%",
	height: "100%"
};

class ProductGridForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classes: this.props.classes,
			hash: this.props.projectID,
			location: this.props.currentSection,
			layout: '',
			main_image_link: this.props.main_image_link,
			main_image_SRC: this.props.main_image_SRC,
			main_image_alt: this.props.main_image_alt,
			main_image_title: this.props.main_image_title,
			updateButton: "ADD MODULE",
			imageSets: '',
			editSection: '',
			errors: "",
			new: true,
			errors_object: {}
		};
		this.addGalleryToProject = this.addGalleryToProject.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	componentWillReceiveProps(nextProps, nextContext) {
		if (nextProps.errors_object) {
			this.setState({ errors_object: nextProps.errors_object });
		}
	}
	componentWillMount() {

		//CHECKING TO SEE IF MoudlesArray is empty, and if ProductGrid' type has been used ALREADY in this SECTION

		
		var fetchedProjectsLocation = this.props.project.project.modules.filter(module => module.location)

		
		if (this.props.project.project.modules.filter(module => module.location === this.props.currentSection && module.type === "ProductGrid").length > 0) {
			var editSection = this.props.project.project.modules.filter(module => module.location === this.props.currentSection && module.type === "ProductGrid")[0]
			var imageSets = editSection.imageSets
			this.setState({
				editSection: editSection,
				imageSets: imageSets,
				new: false
			})
		}
		//If ProductGrid is not found in the current project's modules
		else {
			
			this.setState({
				new: true
			})
		}
	}

	//********** */WHEN DIALOG IS CLOSED AND INPUTS ARE SENT FROM DIALOG*******//
	retrieveGalleryFormInput = (info) => {
		
		var locationKey = Object.keys(info)[0];
		// **IF IMAGES ARE ALREADY PRESENT**
		if (this.state.editSection.imageSets) {
			var productGridPhotosInfo = this.state.imageSets;
			if (locationKey === "Model") {
				this.setState({
					main_image_link: info.Model.Link,
					main_image_SRC: info.Model.SRC,
					main_image_alt: info.Model.Alt,
					main_image_title: info.Model.Title
				});
			} else if (productGridPhotosInfo.filter(
					(image) => Object.keys(image)[0] === locationKey
			).length > 0) {
				
				productGridPhotosInfo = productGridPhotosInfo
					.filter((image) => Object.keys(image)[0] !== locationKey)
					.concat(info);
			}
			this.setState({
				imageSets: productGridPhotosInfo
			});
			//IF NO IMAGES (aka editSection.imageSets === null)
		} else {
			var productGridPhotosInfo = this.state.imageSets;

			//CHECK FOR DUPLICATIONS
			if (
				this.state.imageSets &&
				this.state.imageSets.filter(
					(image) => Object.keys(image)[0] === locationKey
				) > 0
			) {
				var imageSetProperty = { ...this.state.productGridPhotos };
				imageSetProperty.imageSets = [];
				this.setState({ imageSetProperty });
			}

			//ADD TO EMPTY IMAGE ARRAY
			if (!this.state.imageSets) {
				var emptyArray = [];
				emptyArray.push(info);
				this.setState({ imageSets: emptyArray });
			} else {
				var stateArray = this.state.imageSets;
				stateArray.push(info);
				this.setState({ imageSets: stateArray });
			}
		}
	};

	handleInputChange(e) {
		//Name is the Product_1/ Product_2
		const { name, value } = e.target;
		const type = e.target.id;
		const productGridPhotosSTATE = this.state.imageSets;
		//Checking to see if 'this.state.image' is empty aka this would hopefully mean that ProductGrid is
		//not found in this current seciton
		if (productGridPhotosSTATE) {
			const filteredArray = productGridPhotosSTATE.filter(
				(image) => Object.keys(image)[0] !== name
			);
			const productArray = productGridPhotosSTATE.filter(
				(image) => Object.keys(image)[0] === name
			);
			var productObject = productArray[0];
			let k;
			for (k in productObject) {
				productObject[k][type] = value;
			}
			const finalResultArray = filteredArray.concat(productObject);

			this.setState({
				imageSets: finalResultArray
			});
		} 
		else {

		}


	}

	// **********ADD BUTTON EVENT********
	addGalleryToProject(e) {
		e.preventDefault();
		if (this.state.imageSets.length < 5) {
			this.setState({
				error: "Please add all image information, must have 4"
			});
		} else if (!this.state.layout) {
			this.setState({
				error: "Please pick a layout"
			});
		} else {
			this.props.addModule(
				{
					type: "ProductGrid",
					projectID: this.props.projectID,
					location: this.state.location,
					layout: this.state.layout,
					main_image: {
						SRC: this.state.main_image_SRC,
						link: this.state.main_image_link,
						alt: this.state.main_image_alt,
						title: this.state.main_image_title
					},
					imageSets: this.state.imageSets
				},
				this.state.hash
			);
			this.setState({
				error: "",
				refresh: "Refresh"
			});
			
		}
	}
	handleLayout = (event) => {
		this.setState({ layout: event.target.value });
	};

	render() {

		const { classes } = this.props;
		const { errors_object } = this.state;
		console.log('this.state.imageSets',  this.state.imageSets)
		return (
			<div style={{ width: "100%" }}>
				<Typography component="h2" variant="display1" gutterBottom>
					Product Grid
				</Typography>

				<div className="flex_box_default_bare box_shadow">
					<div className="col-xs-12 col-md-6 padding-0">
						{images.map((image, index) => (
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
								<ProductGridDialog
									galleryImageName={image.title}
									retrieveGalleryFormInput={this.retrieveGalleryFormInput}
									imageSets={this.state.imageSets}
									handleInputChange={this.handleInputChange}
									currentSelection = {this.state.location}
								/>
							</ButtonBase>
						))}
					</div>
					<div className="col-xs-12 col-md-6 padding-0">
						<ButtonBase
							focusRipple
							key={model.title}
							className={classes.image}
							focusVisibleClassName={classes.focusVisible}
							style={{
								width: model.width,
								height: model.height
							}}>
							<span
								className={classes.imageSrc}
								style={{
									backgroundImage: `url(${model.url})`
								}}
							/>
							<span className={classes.imageBackdrop}> {this.state.errors_object.imageSets}</span>
							<ProductGridDialog
								galleryImageName={model.title}
								retrieveGalleryFormInput={this.retrieveGalleryFormInput}
								imageSets={this.state.imageSets}
								handleInputChange={this.handleInputChange}
								currentSelection={this.state.location}
							/>
						</ButtonBase>
					</div>
				</div>
				<div className="layout col-xs-12" style={{ marginTop: "2em" }}>
					<div class="col-xs-12 col-md-12 flex_box_column">
						<FormLabel>Layout</FormLabel>
						<div className="col-xs-12 col-md-6">
							<div className="col-xs-12 col-md-6">
								<Radio
									checked={this.state.layout === "Right"}
									onChange={this.handleLayout}
									value="Right"
									name="radio-Right"
									aria-label="A"
								/>

								<img src={RightIcon} alt="ya" className={classes.icon} />
							</div>
							<div className="col-xs-12 col-md-6">
								<Radio
									checked={this.state.layout === "Left"}
									onChange={this.handleLayout}
									value="Left"
									name="radio-Right"
									aria-label="A"
								/>

								<img src={LeftIcon} alt="ya" className={classes.icon} />
							</div>
						</div>
					</div>
				</div>

				<div className="error_container col-xs-12">
					<p style={{ color: "red" }}>{this.state.error}</p>
					<Button
						onClick={this.addGalleryToProject}
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

ProductGridForm.propTypes = {
	classes: PropTypes.object.isRequired,
	projectID: PropTypes.string.isRequired,
	currentSelection: PropTypes.string.isRequired,
	project: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	project: state.project
});

export default withRouter(
	connect(
		mapStateToProps,
		{ addModule }
	)(withStyles(styles)(ProductGridForm))
);
