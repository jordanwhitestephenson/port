import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";

export default class ProductGridDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			SRC: "",
			Link: "",
			Alt: "",
			Title: "",
			galleryImg_NAME: this.props.galleryImageName,
			imageSets: "",
			product1: "",
			product2: "",
			product3: "",
			product4: "",
			Model: "",
			product1_SRC: "",
			product1_Title: "",
			product1_Alt: "",
			product1_Link: ""
		};
		this.newInput = React.createRef();
		this.handleChange = this.handleChange.bind(this);
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};
	componentWillReceiveProps(nextProps) {
		// console.log(nextProps, "NEXTOROPS");
		// if (nextProps.imageSets !== this.props.imageSets ) {
		// 	var product1 = nextProps.imageSets.filter(
		// 		(product) => Object.keys(product)[0] === product.Product_1
		// 	);

		// 	// var product2 = nextProps.imageSets.filter(
		// 	// 	(product) => product.Product_2
		// 	// )[0].Product_2;
		// 	// var product3 = nextProps.imageSets.filter(
		// 	// 	(product) => product.Product_3
		// 	// )[0].Product_3;
		// 	// var product4 = nextProps.imageSets.filter(
		// 	// 	(product) => product.Product_4
		// 	// )[0].Product_4;
		// 	// var Model = nextProps.imageSets.filter(
		// 	// 	(product) => product.Model
		// 	// )[0].Model;

		// 	this.setState({
		// 		imageSets: nextProps.imageSets,
		// 		product1: nextProps.imageSets.Product_1
		// 		// product2: product2,
		// 		// product3: product3,
		// 		// product4: product4,
		// 		// Model: Model
		// 	});
		// }
		// //IF IMAGE SETS NULL//
		// if (!nextProps.imageSets) {
			
		// }
	}

	//***** */TAKE TEXT INPUT FROM DIALOG POPUP******//
	handleClose = () => {
		this.setState({ open: false });
		const selectedImage = this.state.galleryImg_NAME;
		var productOneObject = {
			SRC: this.state.product1_SRC,
			Link: this.state.product1_Link,
			Alt: this.state.product1_Alt,
			Title: this.state.product1_Title
		};
		var productTwoObject = {
			SRC: this.state.product2_SRC,
			Link: this.state.product2_Link,
			Alt: this.state.product2_Alt,
			Title: this.state.product2_Title
		};
		var productThreeObject = {
			SRC: this.state.product3_SRC,
			Link: this.state.product3_Link,
			Alt: this.state.product3_Alt,
			Title: this.state.product3_Title
		};
		var productFourObject = {
			SRC: this.state.product4_SRC,
			Link: this.state.product4_Link,
			Alt: this.state.product4_Alt,
			Title: this.state.product4_Title
		};

		if (selectedImage === "Product_1") {
			return this.props.retrieveGalleryFormInput({
				Product_1: productOneObject
			});
		}
		if (selectedImage === "Product_2") {
			return this.props.retrieveGalleryFormInput({
				Product_2: productTwoObject
			});
		}
		if (selectedImage === "Product_3") {
			return this.props.retrieveGalleryFormInput({
				Product_3: productThreeObject
			});
		}
		if (selectedImage === "Product_4") {
			this.props.retrieveGalleryFormInput({ Product_4: productFourObject});
		}
		if (selectedImage === "Model") {
			this.props.retrieveGalleryFormInput({ Model: this.state.Model });
		}
	};

	//******* */EVENT CHANGE FOR WHEN PROPS ARE NOT PASSED**********//
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {

		return (
			<div>
				<IconButton variant="outlined" onClick={this.handleClickOpen}>
					<Add />
				</IconButton>

				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">
						{this.props.galleryImageName}
					</DialogTitle>
					{this.props.imageSets && this.props.imageSets.length > 5 ? (
						<DialogContent>
							<TextField
								autoFocus
								name={
									this.state.galleryImg_NAME === "Product_1"
										? "Product_1"
										: this.state.galleryImg_NAME === "Product_2"
										? "Product_2"
										: this.state.galleryImg_NAME === "Product_3"
										? "Product_3"
										: this.state.galleryImg_NAME === "Product_4"
										? "Product_4"
										: this.state.galleryImg_NAME === "Product_4"
										? "Product_4"
										: this.state.galleryImg_NAME === "Model"
										? "Model"
										: null
								}
								margin="dense"
								id="SRC"
								required
								value={
									this.state.galleryImg_NAME === "Product_1"
										? `${
												this.props.imageSets.filter(
													(section) => section.Product_1
												)[0].Product_1.SRC
										  }`
										: this.state.galleryImg_NAME === "Product_2"
										? `${
												this.props.imageSets.filter(
													(section) => section.Product_2
												)[0].Product_2.SRC
										  }`
										: this.state.galleryImg_NAME === "Product_3"
										? `${
												this.props.imageSets.filter(
													(section) => section.Product_3
												)[0].Product_3.SRC
										  }`
										: this.state.galleryImg_NAME === "Product_4"
										? `${
												this.props.imageSets.filter(
													(section) => section.Product_4
												)[0].Product_4.SRC
										  }`
										: this.state.galleryImg_NAME === "Model"
										? `${
												this.props.imageSets.filter(
													(section) => section.Model
												)[0].Model.SRC
										  }`
										: null
								}
								type="text"
								fullWidth
								onChange={this.props.handleInputChange}
							/>

							<TextField
								autoFocus
								required
								name={
									this.state.galleryImg_NAME === "Product_1"
										? "Product_1"
										: this.state.galleryImg_NAME === "Product_2"
										? "Product_2"
										: this.state.galleryImg_NAME === "Product_3"
										? "Product_3"
										: this.state.galleryImg_NAME === "Product_4"
										? "Product_4"
										: this.state.galleryImg_NAME === "Product_4"
										? "Product_4"
										: this.state.galleryImg_NAME === "Model"
										? "Model"
										: null
								}
								margin="dense"
								id="Link"
								type="text"
								fullWidth
								value={
									this.state.galleryImg_NAME === "Product_1"
										? `${
												this.props.imageSets.filter(
													(section) => section.Product_1
												)[0].Product_1.Link
										  }`
										: this.state.galleryImg_NAME === "Product_2"
										? `${
												this.props.imageSets.filter(
													(section) => section.Product_2
												)[0].Product_2.Link
										  }`
										: this.state.galleryImg_NAME === "Product_3"
										? `${
												this.props.imageSets.filter(
													(section) => section.Product_3
												)[0].Product_3.Link
										  }`
										: this.state.galleryImg_NAME === "Product_4"
										? `${
												this.props.imageSets.filter(
													(section) => section.Product_4
												)[0].Product_4.Link
										  }`
										: this.state.galleryImg_NAME === "Model"
										? `${
												this.props.imageSets.filter(
													(section) => section.Model
												)[0].Model.Link
										  }`
										: null
								}
								onChange={this.props.handleInputChange}
							/>
							<TextField
								name="galleryImg_Alt"
								autoFocus
								required
								margin="dense"
								id="galleryImg_Alt"
								label="Alt Description for Image"
								type="text"
								fullWidth
								placeholder={
									this.state.galleryImg_NAME === "Product_1"
										? "Product_1"
										: this.state.galleryImg_NAME === "Product_2"
										? "Product_2"
										: this.state.galleryImg_NAME === "Product_3"
										? "Product_3"
										: this.state.galleryImg_NAME === "Product_4"
										? "Product_4"
										: this.state.galleryImg_NAME === "Model"
										? "Model"
										: null
								}
								value={this.state.Alt}
								onChange={this.props.handleInputChange}
							/>
							<TextField
								autoFocus
								name="galleryImg_Title"
								margin="dense"
								id="Title"
								label="Image Title"
								type="text"
								fullWidth
								value={
									this.state.galleryImg_NAME === "Product_1"
										? `${
												this.props.imageSets.filter(
													(section) => section.Product_1
												)[0].Product_1.Title
										  }`
										: this.state.galleryImg_NAME === "Product_2"
										? `${
												this.props.imageSets.filter(
													(section) => section.Product_2
												)[0].Product_2.Title
										  }`
										: this.state.galleryImg_NAME === "Product_3"
										? `${
												this.props.imageSets.filter(
													(section) => section.Product_3
												)[0].Product_3.Title
										  }`
										: this.state.galleryImg_NAME === "Product_4"
										? `${
												this.props.imageSets.filter(
													(section) => section.Product_4
												)[0].Product_4.Title
										  }`
										: this.state.galleryImg_NAME === "Model"
										? `${
												this.props.imageSets.filter(
													(section) => section.Model
												)[0].Model.Title
										  }`
										: null
								}
								onChange={this.props.handleInputChange}
							/>

							{this.state.error ? (
								<p class="error_text">{this.state.error}</p>
							) : null}
						</DialogContent>
					) : (
						//IF NO PROPS/EMPTY PROJECT
						<DialogContent>
							<TextField
								autoFocus
								name={
									this.state.galleryImg_NAME === "Product_1"
										? "product1_SRC"
										: this.state.galleryImg_NAME === "Product_2"
										? "product2_SRC"
										: this.state.galleryImg_NAME === "Product_3"
										? "product3_SRC"
										: this.state.galleryImg_NAME === "Product_4"
										? "product4_SRC"
										: this.state.galleryImg_NAME === "Model"
										? "Model_SRC"
										: null
								}
								margin="dense"
								id="SRC"
								required
								value={
									this.state.galleryImg_NAME === "Product_1"
										? this.state.product1_SRC
										: this.state.galleryImg_NAME === "Product_2"
										? this.state.product2.SRC
										: this.state.galleryImg_NAME === "Product_3"
										? this.state.product3.SRC
										: this.state.galleryImg_NAME === "Product_4"
										? this.state.product4.SRC
										: this.state.galleryImg_NAME === "Model"
										? this.state.Model.SRC
										: null
								}
								type="text"
								fullWidth
								onChange={this.handleChange}
							/>

							<TextField
								autoFocus
								required
								name={
									this.state.galleryImg_NAME === "Product_1"
										? "Product_1"
										: this.state.galleryImg_NAME === "Product_2"
										? "Product_2"
										: this.state.galleryImg_NAME === "Product_3"
										? "Product_3"
										: this.state.galleryImg_NAME === "Product_4"
										? "Product_4"
										: this.state.galleryImg_NAME === "Product_4"
										? "Product_4"
										: this.state.galleryImg_NAME === "Model"
										? "Model"
										: null
								}
								margin="dense"
								id="Link"
								type="text"
								fullWidth
								value={
									this.state.galleryImg_NAME === "Product_1"
										? this.state.product1.Link
										: this.state.galleryImg_NAME === "Product_2"
										? this.state.product2.Link
										: this.state.galleryImg_NAME === "Product_3"
										? this.state.product3.Link
										: this.state.galleryImg_NAME === "Product_4"
										? this.state.product4.Link
										: this.state.galleryImg_NAME === "Model"
										? this.state.Model.Link
										: null
								}
								onChange={this.handleChange}
							/>
							<TextField
								name="galleryImg_Alt"
								autoFocus
								required
								margin="dense"
								id="galleryImg_Alt"
								label="Alt Description for Image"
								type="text"
								fullWidth
								placeholder={
									this.state.galleryImg_NAME === "Product_1"
										? "Product_1"
										: this.state.galleryImg_NAME === "Product_2"
										? "Product_2"
										: this.state.galleryImg_NAME === "Product_3"
										? "Product_3"
										: this.state.galleryImg_NAME === "Product_4"
										? "Product_4"
										: this.state.galleryImg_NAME === "Model"
										? "Model"
										: null
								}
								value={this.state.Alt}
								onChange={this.props.handleInputChange}
							/>
							<TextField
								autoFocus
								name="galleryImg_Title"
								margin="dense"
								id="Title"
								label="Image Title"
								type="text"
								fullWidth
								value={
									this.state.galleryImg_NAME === "Product_1"
										? this.state.product1.Title
										: this.state.galleryImg_NAME === "Product_2"
										? this.state.product2.Title
										: this.state.galleryImg_NAME === "Product_3"
										? this.state.product3.Title
										: this.state.galleryImg_NAME === "Product_4"
										? this.state.product4.Title
										: this.state.galleryImg_NAME === "Model"
										? this.state.Model.Title
										: null
								}
								onChange={this.handleChange}
							/>

							{this.state.error ? (
								<p class="error_text">{this.state.error}</p>
							) : null}
						</DialogContent>
					)}
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Save
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
ProductGridDialog.propTypes = {
	galleryImageName: PropTypes.string.isRequired,
	retrieveGalleryFormInput: PropTypes.func.isRequired
};
