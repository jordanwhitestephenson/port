import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import PropTypes from 'prop-types';
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
            galleryImg_NAME: this.props.galleryImageName
        }
    }


	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
        const selectedImage = this.state.galleryImg_NAME;
        
        console.log(selectedImage)
		const selectedImageInfo = {
			SRC: this.state.SRC,
			Link: this.state.Link,
			Alt: this.state.Alt,
			Title: this.state.Title
		};
        if (selectedImage === "Product_1") {
            return this.props.retrieveGalleryFormInput({ Product_1: selectedImageInfo });
		}
		if (selectedImage === "Product_2") {
			this.props.retrieveGalleryFormInput({ Product_2: selectedImageInfo });
		}
		if (selectedImage === "Product_3") {
			this.props.retrieveGalleryFormInput({ Product_3: selectedImageInfo });
		}
		if (selectedImage === "Product_4") {
			this.props.retrieveGalleryFormInput({ Product_4: selectedImageInfo });
        }
        if (selectedImage === "Model") {
            this.props.retrieveGalleryFormInput({ Model: selectedImageInfo });
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
							name="galleryImg_SRC"
							margin="dense"
							id="name"
							required
							label="SRC for Image"
							type="text"
							fullWidth
							value={this.state.SRC}
							onChange={this.handleChange("SRC")}
						/>
						<TextField
							autoFocus
							required
							name="galleryImg_Link"
							margin="dense"
							id="galleryImg_Link"
							label="Image Link"
							type="text"
							fullWidth
							value={this.state.Link}
							onChange={this.handleChange("Link")}
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
							value={this.state.Alt}
							onChange={this.handleChange("Alt")}
						/>
						<TextField
							autoFocus
							name="galleryImg_Title"
							margin="dense"
							id="galleryImg_Title"
							label="Image Title"
							type="text"
							fullWidth
							value={this.state.Title}
							onChange={this.handleChange("Title")}
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

