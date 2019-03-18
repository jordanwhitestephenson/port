import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            open: false,
            error: '',
			galleryImg_SRC: "",
			galleryImg_Link: "",
			galleryImg_Alt: "",
			galleryImg_Title: "",
            galleryImg_NAME: this.props.galleryImageName,
		};
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		if (this.state.galleryImg_NAME === "Left") {
			const Left = {
                galleryImg_SRC: this.state.galleryImg_SRC,
                galleryImg_Link: this.state.galleryImg_Link,
                galleryImg_Alt: this.state.galleryImg_Alt,
                galleryImg_Title: this.state.galleryImg_Title
            };
            if (!this.state.galleryImg_SRC) {
                this.setState({
                    error: 'Please add an SRC for the image'
                })
            }
            else {
                this.props.retrieveGalleryFormInput({ Left });
                this.setState({ open: false });
            }
        }
        if (this.state.galleryImg_NAME === "Center") {
            const Center = {
                galleryImg_SRC: this.state.galleryImg_SRC,
                galleryImg_Link: this.state.galleryImg_Link,
                galleryImg_Alt: this.state.galleryImg_Alt,
                galleryImg_Title: this.state.galleryImg_Title
            };
            if (!this.state.galleryImg_SRC) {
                this.setState({
                    error: 'Please add an SRC for the image'
                })
            }
            else {
                this.props.retrieveGalleryFormInput({ Center });
                this.setState({ open: false });
            }
        }
        if (this.state.galleryImg_NAME === "Right") {
            const Right = {
                galleryImg_SRC: this.state.galleryImg_SRC,
                galleryImg_Link: this.state.galleryImg_Link,
                galleryImg_Alt: this.state.galleryImg_Alt,
                galleryImg_Title: this.state.galleryImg_Title
            };
            if (!this.state.galleryImg_SRC) {
                this.setState({
                    error: 'Please add an SRC for the image'
                })
            }
            else {
                this.props.retrieveGalleryFormInput({ Right });
                this.setState({ open: false });
            }
            
        }

		
       
	};
	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
		});
	};

    render() {
        var exampleImage = ''
        if (this.state.galleryImg_NAME === "Left") {
            exampleImage = 'GalleryExample_01.jpg?$staticlink$'
        }
        if (this.state.galleryImg_NAME === "Center") {
            exampleImage = 'GalleryExample_03.jpg?$staticlink$'
        }
        if (this.state.galleryImg_NAME === "Right") {
            exampleImage = 'GalleryExample_05.jpg?$staticlink$'
        }
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
                            required
                            label="SRC for Image"
                            type="text"
                            fullWidth
                            value={this.state.galleryImg_SRC}
                            onChange={this.handleChange("galleryImg_SRC")}
                            helperText={`Try Using this example ${exampleImage}`}
                            
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
							value={this.state.galleryImg_Link}
							onChange={this.handleChange("galleryImg_Link")}
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
                        {this.state.error ? <p class="error_text">{this.state.error}</p> : null}
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
