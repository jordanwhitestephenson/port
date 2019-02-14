import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			galleryImg_SRC: "",
			galleryImg_Link: "",
			galleryImg_Alt: "",
			galleryImg_Title: "",
			galleryImg_NAME: this.props.galleryImageName
		};
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		if (this.state.galleryImg_NAME === "Left") {
			const Left = {
				gallery_Left_Img_SRC: this.state.galleryImg_SRC,
				gallery_Left_Link: this.state.galleryImg_Link,
				gallery_Left_Alt: this.state.galleryImg_Alt,
				gallery_Left_Title: this.state.galleryImg_Title
            };
            this.props.retrieveGalleryFormInput(Left);
        }
        if (this.state.galleryImg_NAME === "Center") {
            const Center = {
                gallery_Center_Img_SRC: this.state.galleryImg_SRC,
                gallery_Center_Link: this.state.galleryImg_Link,
                gallery_Center_Alt: this.state.galleryImg_Alt,
                gallery_Center_Title: this.state.galleryImg_Title
            };
            this.props.retrieveGalleryFormInput(Center);
        }
        if (this.state.galleryImg_NAME === "Right") {
            const Right = {
                gallery_Right_Img_SRC: this.state.galleryImg_SRC,
                gallery_Right_Link: this.state.galleryImg_Link,
                gallery_Right_Alt: this.state.galleryImg_Alt,
                gallery_Right_Title: this.state.galleryImg_Title
            };
            this.props.retrieveGalleryFormInput(Right);
        }

		this.setState({ open: false });
       
	};
	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
		});
	};

	render() {
		console.log(this.props);
		return (
			<div>
				<Button
					style={{ color: "#fff", border: "none" }}
					variant="outlined"
					onClick={this.handleClickOpen}>
					{this.props.galleryImageName}
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">
						Image Info for {this.props.galleryImageName}
					</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							name="galleryImg_SRC"
							margin="dense"
							id="name"
							label="SRC for Image"
							type="text"
							fullWidth
							value={this.state.galleryImg_SRC}
                            onChange={this.handleChange("galleryImg_SRC")}
						/>

						<TextField
							autoFocus
							name="galleryImg_Link"
							margin="dense"
							id="galleryImg_Link"
							label="Image Link"
							type="text"
							fullWidth
							value={this.state.galleryImg_Link}
							onChange={this.handleChange("galleryImg_Link")}
						/>
						<TextField
							name="galleryImg_Alt"
							autoFocus
							margin="dense"
							id="galleryImg_Alt"
							label="Alt Description for Image"
							type="text"
							fullWidth
							value={this.state.galleryImg_Alt}
                            onChange={this.handleChange("galleryImg_Alt")}
						/>
						<TextField
							autoFocus
							name="galleryImg_Title"
							margin="dense"
							id="galleryImg_Title"
							label="Image Title"
							type="text"
							fullWidth
							value={this.state.galleryImg_Title}
                            onChange={this.handleChange("galleryImg_Title")}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleClose} color="primary">
							Save
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
