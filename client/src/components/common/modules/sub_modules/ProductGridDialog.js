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
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ProductGridDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			SRC: "",
			Link: "",
			Alt: "",
			Title: "",
			galleryImg_NAME: this.props.galleryImageName,
			savedProductGrid: "",
			imageSets: "",
			product1_SRC: "",
			product1_Title: "",
			product1_Alt: "",
			product1_Link: "",
			product2_SRC: "",
			product2_Title: "",
			product2_Alt: "",
			product2_Link: "",
			product3_SRC: "",
			product3_Title: "",
			product3_Alt: "",
			product3_Link: "",
			product4_SRC: "",
			product4_Title: "",
			product4_Alt: "",
			product4_Link: "",
			Model_SRC: "",
			Model_Title: "",
			Model_Alt: "",
			Model_Link: ""
		};
		this.newInput = React.createRef();
		this.handleChange = this.handleChange.bind(this);
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};
	componentWillMount() {

		//PROJECT STATE: ALREADY HAS MODULES && PRODUCT GRID HASNT BEEN ADDED TO PROJECT
		if (this.props.project.project.modules.length && this.props.project.project.modules.filter(module => module.type === "ProductGrid").length < 0) {
			console.log('MODULES OROPS?')
			//FIND CURRENT PRODUCTGRID IN MODULES ARRAY and ADD STATE:
			const productGrid = this.props.project.project.modules.filter(
				(module) => module.type === "ProductGrid"
			)[0];
			console.log(productGrid, 'WYYY')
			const Product_1 = productGrid.imageSets.filter(
				(product) => product["Product_1"]
			)[0].Product_1;
			const Product_2 = productGrid.imageSets.filter(
				(product) => product["Product_2"]
			)[0].Product_2;
			const Product_3 = productGrid.imageSets.filter(
				(product) => product["Product_3"]
			)[0].Product_3;
			const Product_4 = productGrid.imageSets.filter(
				(product) => product["Product_4"]
			)[0].Product_4;
			const Model = productGrid.imageSets.filter(
				(product) => product["Model"]
			)[0].Model;

			this.setState({
				savedProductGrid: productGrid,
				product1_SRC: Product_1.SRC,
				product1_Title: Product_1.Title,
				product1_Alt: Product_1.Alt,
				product1_Link: Product_1.Link,
				product2_SRC: Product_2.SRC,
				product2_Title: Product_2.Title,
				product2_Alt: Product_2.Alt,
				product2_Link: Product_2.Link,
				product3_SRC: Product_3.SRC,
				product3_Title: Product_3.Title,
				product3_Alt: Product_3.Alt,
				product3_Link: Product_3.Link,
				product4_SRC: Product_4.SRC,
				product4_Title: Product_4.Title,
				product4_Alt: Product_4.Alt,
				product4_Link: Product_4.Link,
				Model_SRC: Model.SRC,
				Model_Title: Model.Title,
				Model_Alt: Model.Alt,
				Model_Link: Model.Link
			});
		}
		//PROJECT STATE : HAVENT ADDED YET
		else {
			console.log("NO MODULES IN THIS PROJECT in PRODUCTGRIDDIALOG");
		}
	}
	//***** */TAKE TEXT INPUT FROM DIALOG POPUP******//
	handleClose = () => {
		console.log(this.props, "HANDLE CLOSE");
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
		var ModelObject = {
			SRC: this.state.Model_SRC,
			Link: this.state.Model_Link,
			Alt: this.state.Model_Alt,
			Title: this.state.Model_Title
		};

		if (selectedImage === "Product_1") {
			console.log(productOneObject, 'productOneObject')
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
			this.props.retrieveGalleryFormInput({ Product_4: productFourObject });
		}
		if (selectedImage === "Model") {
			this.props.retrieveGalleryFormInput({ Model: ModelObject });
		}
	};

	//******* */EVENT CHANGE FOR WHEN PROPS ARE NOT PASSED**********//
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		console.log(this.state.savedProductGrid, "***saved ");
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
					{this.props.project.project.modules ? (
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
										? this.state.product2_SRC
										: this.state.galleryImg_NAME === "Product_3"
										? this.state.product3_SRC
										: this.state.galleryImg_NAME === "Product_4"
										? this.state.product4_SRC
										: this.state.galleryImg_NAME === "Model"
										? this.state.Model_SRC
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
										? "product1_Link"
										: this.state.galleryImg_NAME === "Product_2"
										? "product2_Link"
										: this.state.galleryImg_NAME === "Product_3"
										? "product3_Link"
										: this.state.galleryImg_NAME === "Product_4"
										? "product4_Link"
										: this.state.galleryImg_NAME === "Model"
										? "Model_Link"
										: null
								}
								margin="dense"
								id="Link"
								type="text"
								fullWidth
								value={
									this.state.galleryImg_NAME === "Product_1"
										? this.state.product1_Link
										: this.state.galleryImg_NAME === "Product_2"
										? this.state.product2_Link
										: this.state.galleryImg_NAME === "Product_3"
										? this.state.product3_Link
										: this.state.galleryImg_NAME === "Product_4"
										? this.state.product4_Link
										: this.state.galleryImg_NAME === "Model"
										? this.state.Model_Link
										: null
								}
								onChange={this.props.handleInputChange}
							/>
							<TextField
								name={
									this.state.galleryImg_NAME === "Product_1"
										? "product1_Alt"
										: this.state.galleryImg_NAME === "Product_2"
										? "product2_Alt"
										: this.state.galleryImg_NAME === "Product_3"
										? "product3_Alt"
										: this.state.galleryImg_NAME === "Product_4"
										? "product4_Alt"
										: this.state.galleryImg_NAME === "Model"
										? "Model_Alt"
										: null
								}
								autoFocus
								required
								margin="dense"
								id="galleryImg_Alt"
								label="Alt Description for Image"
								type="text"
								fullWidth
								value={
									this.state.galleryImg_NAME === "Product_1"
										? this.state.product1_Alt
										: this.state.galleryImg_NAME === "Product_2"
										? this.state.product2_Alt
										: this.state.galleryImg_NAME === "Product_3"
										? this.state.product3_Alt
										: this.state.galleryImg_NAME === "Product_4"
										? this.state.product4_Alt
										: this.state.galleryImg_NAME === "Model"
										? this.state.Model_Alt
										: null
								}
								onChange={this.props.handleInputChange}
							/>
							<TextField
								autoFocus
								name={
									this.state.galleryImg_NAME === "Product_1"
										? "product1_Title"
										: this.state.galleryImg_NAME === "Product_2"
										? "product2_Title"
										: this.state.galleryImg_NAME === "Product_3"
										? "product3_Title"
										: this.state.galleryImg_NAME === "Product_4"
										? "product4_Title"
										: this.state.galleryImg_NAME === "Model"
										? "Model_Title"
										: null
								}
								margin="dense"
								id="Title"
								label="Image Title"
								type="text"
								fullWidth
								value={
									this.state.galleryImg_NAME === "Product_1"
										? this.state.product1_Title
										: this.state.galleryImg_NAME === "Product_2"
										? this.state.product2_Title
										: this.state.galleryImg_NAME === "Product_3"
										? this.state.product3_Title
										: this.state.galleryImg_NAME === "Product_4"
										? this.state.product4_Title
										: this.state.galleryImg_NAME === "Model"
										? this.state.Model_Title
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
										? this.state.product2_SRC
										: this.state.galleryImg_NAME === "Product_3"
										? this.state.product3_SRC
										: this.state.galleryImg_NAME === "Product_4"
										? this.state.product4_SRC
										: this.state.galleryImg_NAME === "Model"
										? this.state.Model_SRC
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
										? "product1_Link"
										: this.state.galleryImg_NAME === "Product_2"
										? "product2_Link"
										: this.state.galleryImg_NAME === "Product_3"
										? "product3_Link"
										: this.state.galleryImg_NAME === "Product_4"
										? "product4_Link"
										: this.state.galleryImg_NAME === "Model"
										? "Model_Link"
										: null
								}
								margin="dense"
								id="Link"
								type="text"
								fullWidth
								value={
									this.state.galleryImg_NAME === "Product_1"
										? this.state.product1_Link
										: this.state.galleryImg_NAME === "Product_2"
										? this.state.product2_Link
										: this.state.galleryImg_NAME === "Product_3"
										? this.state.product3_Link
										: this.state.galleryImg_NAME === "Product_4"
										? this.state.product4_Link
										: this.state.galleryImg_NAME === "Model"
										? this.state.Model_Link
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
										? this.state.product1_Title
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
	retrieveGalleryFormInput: PropTypes.func.isRequired,
	project: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	project: state.project
});

export default withRouter(connect(mapStateToProps)(ProductGridDialog));
