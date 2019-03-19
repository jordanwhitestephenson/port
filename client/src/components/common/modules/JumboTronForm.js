import React from "react";
import PropTypes from "prop-types";

import Radio from "@material-ui/core/Radio";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import { TwitterPicker } from "react-color";
import Avatar from "@material-ui/core/Avatar";
import BeachAccessIcon from "@material-ui/icons/TextFields";
import CTAIcon from "@material-ui/icons/TouchApp";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import LeftIcon from "../../common/icons/browser-27.png";
import RightIcon from "../../common/icons/browser-33.png";
import Paper from "@material-ui/core/Paper";
import UpdateIcon from "@material-ui/icons/Update";
import AddIcon from "@material-ui/icons/Add";
import CenterIcon from "../../common/icons/browser-8.png";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addModule } from "../../../actions/profileActions";
import JumboTronExamplePhoto from "../icons/JumboTronExample_03.jpg";

const styles = (theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	dense: {
		marginTop: 16
	},
	menu: {
		width: 200
	},
	root: {
		display: "flex"
	},
	formControl: {
		margin: theme.spacing.unit * 3
	},
	group: {
		margin: `${theme.spacing.unit}px 0`
	},
	icon: {
		width: "50px",
		height: "50px"
	},
	formContainer: {
		padding: "20px",
		backgroundColor: "#f6f6f640",
		boxShadow: "1px 6px 22px 0px #888888",
		margin: "10px"
	},
	flexBoxColumn: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	},
	flexBoxEnd: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "end"
	}
});

class JumboTronForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			html: "",
			headline: "",
			paragraphText: this.props.paragraphText,
			location: this.props.currentSection,
			type: "Jumbotron",
			button: false,
			buttonText: "",
			buttonLink: this.props.buttonLink,
			layout: "",
			backgroundColor: "#fff",
			textColor: "#444",
			headlineSize: "20px",
			errors: "",
			editSection: "",
			projectID: this.props.location.hash.slice(1),
			main_image_SRC: "",
			main_image_link: "",
			main_image_alt: "",
			main_image_title: "",
			updateButton: "ADD MODULE",
			include_image: false,
			textBoxBackground: false,
			submitReady: false,
			errors_object: {}
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.handleRadioChange = this.handleRadioChange.bind(this);
	}

	componentWillMount() {
		let jumboTron = this.props.project.project.modules.filter(
			(module) =>
				module.location === this.props.currentSection &&
				module.type === "Jumbotron" &&
				module.projectID === this.state.projectID
		);
		if (jumboTron.length > 0) {
			var editSection = this.props.project.project.modules.filter(
				(module) =>
					module.location === this.props.currentSection &&
					module.type === "Jumbotron"
			)[0];
			console.log(editSection.main_image, "editSection.main_imagei");
			//If main_image is present in the modules array, then show image input fields//
			// eslint-disable-next-line no-unused-expressions
			editSection.main_image ? this.setState({ include_image: true }) : null;
			// eslint-disable-next-line no-unused-expressions
			editSection.errors_object
				? this.setState({ errors_object: this.props.errors_object })
				: null;
			this.setState({
				editSection: editSection,
				headline: editSection.headline,
				backgroundColor: editSection.backgroundColor,
				button: editSection.button,
				buttonText: editSection.buttonInfo.text,
				buttonLink: editSection.buttonInfo.link,
				layout: editSection.layout,
				paragraphText: editSection.paragraphText,
				headlineSize: editSection.headlineSize,
				main_image_SRC: editSection.main_image.SRC,
				main_image_link: editSection.main_image.link,
				main_image_alt: editSection.main_image.alt,
				main_image_title: editSection.main_image.title,
				textBoxBackground: editSection.textBoxBackground,
				new: false
			});
		}
	}

	onSubmit(e) {
		e.preventDefault();
		//TO DO : MAKE THIS FUNCTION FOR OTHER REGIONS!!//
		const moduleData = {
			headline: this.state.headline,
			headlineSize: this.state.headlineSize,
			paragraphText: this.state.paragraphText,
			type: "Jumbotron",
			location: this.state.location,
			button: this.state.button,
			buttonInfo: {
				text: this.state.buttonText,
				link: this.state.buttonLink
			},
			layout: this.state.layout,
			backgroundColor: this.state.backgroundColor,
			textColor: this.state.textColor,
			main_image: {
				SRC: this.state.main_image_SRC,
				link: this.state.main_image_link,
				alt: this.state.main_image_alt,
				title: this.state.main_image_title
			},
			textBoxBackground: this.state.textBoxBackground
		};

		this.props.addModule(moduleData, this.state.projectID);
		this.setState({
			updateButton: "UPDATE MODULE",
			errors: ""
		});
		// }
	}

	handleChange = (name) => (event) => {
		if (name === "gradient") {
			this.setState({
				backgroundColor: event.target.value
			});
		}
		this.setState({
			[name]: event.target.value
		});
	};
	handleButton = (event) => {
		this.setState({ button: event.target.value });
	};

	handleLayout = (event) => {
		if (event.target.value === "no_image") {
			this.setState({
				layout: event.target.value,
				include_image: false
			});
		} else {
			this.setState({
				layout: event.target.value,
				include_image: true
			});
		}
	};
	handleBackgroundColorChange = (color) => {
		this.setState({ backgroundColor: color.hex });
	};

	handleTextColorChange = (color) => {
		this.setState({ textColor: color.hex });
	};
	handleRadioChange = (name) => (event) => {
		this.setState({ [name]: event.target.checked });
	};

	render() {
		const { classes } = this.props;
		const { errors_object } = this.state;

		return (
			<div className={classes.formContainer}>
				{this.state.errors ? (
					<Paper elevation={1}>
						<Typography variant="p">
							<span style={{ color: "red" }}>{this.state.errors}</span>
						</Typography>
					</Paper>
				) : null}

				<form className={classes.container} onSubmit={this.onSubmit}>
					<div className="col-xs-12">
						<div className="col-xs-12 ">
							<IconButton
								role="input"
								style={{ float: "left" }}
								type="submit"
								value="Add Module"
								color="secondary"
								variant="contained"
								className={classes.button}>
								{this.state.updateButton === "ADD MODULE" ? (
									<div>
										<AddIcon />
									</div>
								) : (
									<div>
										<UpdateIcon />
									</div>
								)}
							</IconButton>
							<img
								src={JumboTronExamplePhoto}
								className="jumbo_image_box-shadow"
								alt="JumboTron Example"
							/>
							<Typography component="h2" variant="display1" gutterBottom>
								JumboTron
							</Typography>
						</div>

						<div className="col-xs-12 layout_container">
							<FormLabel>Layout</FormLabel>
							<p className="error_text">{errors_object.layout}</p>

							<div className="col-xs-12 col-md-4">
								<img src={RightIcon} alt="ya" className={classes.icon} />
								<FormLabel component="legend">Image To Right</FormLabel>
								<Radio
									checked={this.state.layout === "Right"}
									onChange={this.handleLayout}
									value="Right"
									name="radio-Right"
									aria-label="A"
								/>
							</div>
							<div className="col-xs-12 col-md-4">
								<img src={CenterIcon} alt="ya" className={classes.icon} />
								<FormLabel component="legend">No Image</FormLabel>
								<Radio
									checked={this.state.layout === "no_image"}
									onChange={this.handleLayout}
									value="no_image"
									name="radio-no_image"
									aria-label="A"
								/>
							</div>

							<div className="col-xs-12 col-md-4">
								<img src={LeftIcon} alt="ya" className={classes.icon} />
								<FormLabel component="legend">Image To Left</FormLabel>
								<Radio
									checked={this.state.layout === "Left"}
									onChange={this.handleLayout}
									value="Left"
									name="radio-left"
									aria-label="Left"
									label="Image To left"
								/>
							</div>
						</div>

						{this.state.layout}
						{this.state.include_image ? (
							<div className="col-xs-12">
								<TextField
									label="Image SRC"
									fullWidth
									error={errors_object.main_image_SRC}
									helperText={errors_object.main_image_SRC}
									className={classes.textField}
									variant="outlined"
									InputLabelProps={{
										shrink: true
									}}
									margin="normal"
									value={this.state.main_image_SRC}
									onChange={this.handleChange("main_image_SRC")}
								/>
								<TextField
									id="outlined-full-width"
									label="Image Link"
									value={this.state.main_image_link}
									style={{ margin: 8 }}
									onChange={this.handleChange("main_image_link")}
									placeholder="Add product/collection link to image"
									fullWidth
									margin="normal"
									error={errors_object.main_image_link}
									helperText={errors_object.main_image_link}
									variant="outlined"
									InputLabelProps={{
										shrink: true
									}}
								/>

								<TextField
									id="outlined-full-width"
									label="Image Alt"
									value={this.state.main_image_alt}
									style={{ margin: 8 }}
									onChange={this.handleChange("main_image_alt")}
									placeholder="Add Alt Tag Description"
									fullWidth
									error={errors_object.main_image_alt}
									helperText={errors_object.main_image_alt}
									margin="normal"
									variant="outlined"
									InputLabelProps={{
										shrink: true
									}}
								/>
								<TextField
									id="outlined-full-width"
									label="Image Title"
									value={this.state.main_image_title}
									style={{ margin: 8 }}
									onChange={this.handleChange("main_image_title")}
									placeholder="Need a title tag for image?"
									fullWidth
									margin="normal"
									variant="outlined"
									InputLabelProps={{
										shrink: true
									}}
								/>
							</div>
						) : null}
					</div>

					<div className="col-xs-12">
						<div>
							<FormLabel component="legend" className="text-left">
								Background Color
							</FormLabel>
							<TwitterPicker
								className="col-xs-12 "
								width="100%"
								name="backgroundColor"
								color={this.state.backgroundColor}
								onChangeComplete={this.handleBackgroundColorChange}
							/>
							<TextField
								id="outlined-uncontrolled"
								label="Gradient Background?"
								className={classes.textField}
								margin="normal"
								fullWidth
								error={errors_object.backgroundColor}
								helperText={errors_object.backgroundColor}
								value={this.state.backgroundColor}
								onChange={this.handleChange("gradient")}
								InputLabelProps={{
									shrink: true
								}}
							/>
						</div>
					</div>

					<div className="col-xs-12">
						<div className="flex_box_default box-shadow-padding ">
							<Avatar>
								<BeachAccessIcon />
							</Avatar>
							<Typography
								variant="h6"
								align="center"
								style={{ paddingLeft: "10px" }}>
								Text Box Section
							</Typography>
						</div>

						<div>
							<TextField
								id="outlined-uncontrolled"
								label="Paragraph Text:"
								className={classes.textField}
								margin="normal"
								fullWidth
								error={errors_object.paragraphText}
								helperText={errors_object.paragraphText}
								value={this.state.paragraphText}
								onChange={this.handleChange("paragraphText")}
								InputLabelProps={{
									shrink: true
								}}
							/>
						</div>
						<div className="col-xs-12" style={{ marginTop: "1em" }}>
							<FormLabel component="legend" className="text-left">
								Text Color
							</FormLabel>
							<div style={{ display: "flex", flexDirection: "column-reverse" }}>
								<p>Chosen text color : {this.state.textColor}</p>
								<TwitterPicker
									width="100%"
									name="textColor"
									color={this.state.textColor}
									onChangeComplete={this.handleTextColorChange}
								/>
							</div>
						</div>
						<div className="col-xs-12">
							<FormControlLabel
								style={{ margin: "auto" }}
								control={
									<Switch
										checked={this.state.textBoxBackground}
										onChange={this.handleRadioChange("textBoxBackground")}
										value="textBoxBackground"
									/>
								}
								label={
									this.state.textBoxBackground
										? "Text Box will have padding and a white background"
										: "Text Box normal settings without background color"
								}
							/>
							<TextField
								label="Headline Text:"
								error={errors_object.headline}
								helperText={errors_object.headline}
								className={classes.textField}
								margin="normal"
								value={this.state.headline}
								onChange={this.handleChange("headline")}
								required
								InputLabelProps={{
									shrink: true
								}}
								fullWidth
							/>
							<TextField
								id="outlined-number"
								label="Headline Size"
								value={this.state.headlineSize}
								onChange={this.handleChange("headlineSize")}
								type="number"
								className={classes.textField}
								InputLabelProps={{
									shrink: true
								}}
								margin="normal"
								fullWidth
							/>
						</div>
					</div>

					<section className="col-xs-12">
						<div className="flex_box_default box-shadow-padding ">
							<Avatar>
								<CTAIcon />
							</Avatar>
							<Typography
								variant="h6"
								align="center"
								style={{ paddingLeft: "10px" }}>
								CTA Section
							</Typography>
						</div>
						<FormControl component="fieldset" className={classes.formControl}>
							<FormGroup row>
								<FormControlLabel
									style={{ margin: "auto" }}
									control={
										<Switch
											checked={this.state.button}
											onChange={this.handleRadioChange("button")}
											value="button"
										/>
									}
									label={
										this.state.button
											? "Include button? : True"
											: "Include button? : False"
									}
								/>
							</FormGroup>

							{this.state.button ? (
								<div>
									<TextField
										id="outlined-number"
										label="Button Text"
										required
										value={this.state.buttonText}
										onChange={this.handleChange("buttonText")}
										type="text"
										className={classes.textField}
										InputLabelProps={{
											shrink: true
										}}
										margin="normal"
										variant="outlined"
									/>
									<TextField
										required
										id="outlined-number"
										label="Button Link"
										value={this.state.buttonLink}
										onChange={this.handleChange("buttonLink")}
										type="text"
										className={classes.textField}
										InputLabelProps={{
											shrink: true
										}}
										margin="normal"
										variant="outlined"
									/>
								</div>
							) : null}
						</FormControl>
					</section>
					<div />
					<div style={{ width: "100%" }} />
				</form>
				{this.state.errors}
			</div>
		);
	}
}

JumboTronForm.propTypes = {
	classes: PropTypes.object.isRequired,
	errors_object: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	project: state.project,
	errors_object: state.errors_object
});

export default withRouter(
	connect(
		mapStateToProps,
		{ addModule }
	)(withStyles(styles)(JumboTronForm))
);
