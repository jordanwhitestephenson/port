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
			editSection: "",
			product1: "",
			product2: "",
			product3: "",
			product4: "",
			Model: ""
		};
		this.newInput = React.createRef();
		this.handleChange = this.handleChange.bind(this);
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};
	componentWillReceiveProps(nextProps) {
		if (nextProps.editSection) {
			var product1 = nextProps.editSection.filter(
				(product) => product.Product_1
			)[0].Product_1;
			var product2 = nextProps.editSection.filter(
				(product) => product.Product_2
			)[0].Product_2;
			var product3 = nextProps.editSection.filter(
				(product) => product.Product_3
			)[0].Product_3;
			var product4 = nextProps.editSection.filter(
				(product) => product.Product_4
			)[0].Product_4;
			var Model = nextProps.editSection.filter(
				(product) => product.Model
			)[0].Model;

			this.setState({
				editSection: nextProps.editSection,
				product1: product1,
				product2: product2,
				product3: product3,
				product4: product4,
				Model: Model
			});
		}
	}

	handleClose = () => {
		this.setState({ open: false });
		const selectedImage = this.state.galleryImg_NAME;

		if (selectedImage === "Product_1") {
			return this.props.retrieveGalleryFormInput({
				Product_1: this.state.product1
			});
		}
		if (selectedImage === "Product_2") {
			return this.props.retrieveGalleryFormInput({
				Product_2: this.state.product2
			});
		}
		if (selectedImage === "Product_3") {
			return this.props.retrieveGalleryFormInput({ Product_3: this.state.product3 });
		}
		if (selectedImage === "Product_4") {
			this.props.retrieveGalleryFormInput({ Product_4: this.state.product4  });
		}
		if (selectedImage === "Model") {
			this.props.retrieveGalleryFormInput({ Model: this.Model});
		}
	};
	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
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
									: null
							}
							margin="dense"
							id="SRC"
							required
							value={
								this.state.galleryImg_NAME === "Product_1"
									? `${
											this.props.editSection.filter(
												(section) => section.Product_1
											)[0].Product_1.SRC
									  }`
									: this.state.galleryImg_NAME === "Product_2"
									? `${
											this.props.editSection.filter(
												(section) => section.Product_2
											)[0].Product_2.SRC
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
									: null
							}
							margin="dense"
							id="Link"
							type="text"
							fullWidth
							value={
								this.state.galleryImg_NAME === "Product_1"
									? `${
											this.props.editSection.filter(
												(section) => section.Product_1
											)[0].Product_1.Link
									  }`
									: this.state.galleryImg_NAME === "Product_2"
									? `${
											this.props.editSection.filter(
												(section) => section.Product_2
											)[0].Product_2.Link
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
									? this.state.product1.Alt
									: this.state.galleryImg_NAME === "Product_2"
									? this.state.product2.Alt
									: this.state.galleryImg_NAME === "Product_3"
									? this.state.product3.Alt
									: this.state.galleryImg_NAME === "Product_4"
									? this.state.product4.Alt
									: null
							}
							value={this.state.Alt}
							onChange={this.props.handleInputChange}
						/>
						<TextField
							autoFocus
							name="galleryImg_Title"
							margin="dense"
							id="galleryImg_Title"
							label="Image Title"
							type="text"
							fullWidth
							placeholder={
								this.state.galleryImg_NAME === "Product_1"
									? this.state.product1.Title
									: this.state.galleryImg_NAME === "Product_2"
									? this.state.product2.Title
									: this.state.galleryImg_NAME === "Product_3"
									? this.state.product3.Title
									: this.state.galleryImg_NAME === "Product_4"
									? this.state.product4.Title
									: null
							}
							value={this.state.Title}
							onChange={this.props.handleInputChange}
						/>
						{this.state.error ? (
							<p class="error_text">{this.state.error}</p>
						) : null}
					</DialogContent>
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
