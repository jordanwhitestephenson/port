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
			error: "",
			story1_ImgSRC: "",
			story1_ImgAlt: "",
			story1_Link: "",
			story1_CTA: "",
			story1_Headline_Text: "",
			story1_Paragraph_Text: "",
			story2_ImgSRC: "",
			story2_ImgAlt: "",
			story2_Link: "",
			story2_CTA: "",
			story2_Headline_Text: "",
			story2_Paragraph_Text: ""
		};
		this.ErrorCheck = this.ErrorCheck.bind(this);
		this.sendStoryInfo = this.sendStoryInfo.bind(this);
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	ErrorCheck = () => {
		if (this.props.storyType === "Story_1") {
			if (!this.state.story1_ImgSRC) {
				this.setState({
					error: "Story1's Img SRC is required*"
				});
				console.log(this.state.error, "ERROR");
			} else if (!this.state.story1_ImgAlt) {
				this.setState({
					error: "Story1's Img Alt Tag Text is required*"
				});
			} else if (!this.state.story1_Link) {
				this.setState({
					error: "Story1's Link is required*"
				});
			} else if (!this.state.story1_CTA) {
				this.setState({
					error: "Story1's CTA is required*"
				});
			} else if (!this.state.story1_Headline_Text) {
				this.setState({
					error: "Story1's Headline is required*"
				});
			} else if (!this.state.story1_Paragraph_Text) {
				this.setState({
					error: "Story1's Paragraph is required*"
				});
			} else {
				this.setState({
					error: ""
				});
				this.sendStoryInfo();
			}
		}
		if (this.props.storyType === "Story_2") {
			if (!this.state.story2_ImgSRC) {
				this.setState({
					error: "Story2's Img SRC is required*"
				});
			} else if (!this.state.story2_ImgAlt) {
				this.setState({
					error: "Story2's Img Alt Tag Text is required*"
				});
			} else if (!this.state.story2_Link) {
				this.setState({
					error: "Story2's Link is required*"
				});
			} else if (!this.state.story2_CTA) {
				this.setState({
					error: "Story2's CTA is required*"
				});
			} else if (!this.state.story2_Headline_Text) {
				this.setState({
					error: "Story2's Headline is required*"
				});
			} else if (!this.state.story2_Paragraph_Text) {
				this.setState({
					error: "Story2's Paragraph is required*"
				});
			} else {
				this.setState({
					error: ""
				});
				this.sendStoryInfo();
			}
		}
	};
	handleClose = () => {
		this.ErrorCheck();
	};
	sendStoryInfo = () => {
		if (this.props.storyType === "Story_1") {
			let Story_1 = {
				story1_ImgSRC: this.state.story1_ImgSRC,
				story1_ImgAlt: this.state.story1_ImgAlt,
				story1_Link: this.state.story1_Link,
				story1_CTA: this.state.story1_CTA,
				story1_Headline_Text: this.state.story1_Headline_Text,
				story1_Paragraph_Text: this.state.story1_Paragraph_Text
			};
			this.props.retrieveStoryFormInput({ Story_1 });
			this.setState({
				open: false
			});
		}
		if (this.props.storyType === "Story_2") {
			let Story_2 = {
				story2_ImgSRC: this.state.story2_ImgSRC,
				story2_ImgAlt: this.state.story2_ImgAlt,
				story2_Link: this.state.story2_Link,
				story2_CTA: this.state.story2_CTA,
				story2_Headline_Text: this.state.story2_Headline_Text,
				story2_Paragraph_Text: this.state.story2_Paragraph_Text
			};
            this.props.retrieveStoryFormInput({ Story_2 });
            this.setState({
                open: false
            });
		}
	};
	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
		});
	};

	render() {
		let storyType = this.props.storyType;

		return (
			<div>
				<Button
					variant="outlined"
					color="primary"
					onClick={this.handleClickOpen}>
					Open form dialog
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">
						{this.props.storyType}
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							<div>
								Please enter all of the information for {this.props.storyType}
								<br />
								<span className="error_text">{this.state.error}</span>
							</div>
						</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label={
								storyType === "Story_1"
									? "Story1 Image SRC"
									: storyType === "Story_2"
									? "Story2_Image SRC"
									: null
							}
							type="image source"
							fullWidth
							onChange={
								storyType === "Story_1"
									? this.handleChange("story1_ImgSRC")
									: storyType === "Story_2"
									? this.handleChange("story2_ImgSRC")
									: null
							}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label={
								storyType === "Story_1"
									? "Story1 Image Alt"
									: storyType === "Story_2"
									? "Story2 Image Alt"
									: null
							}
							type="email"
							fullWidth
							onChange={
								storyType === "Story_1"
									? this.handleChange("story1_ImgAlt")
									: storyType === "Story_2"
									? this.handleChange("story2_ImgAlt")
									: null
							}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label={
								storyType === "Story_1"
									? "Story1 Link"
									: storyType === "Story_2"
									? "Story 2 Link"
									: null
							}
							type="email"
							fullWidth
							onChange={
								storyType === "Story_1"
									? this.handleChange("story1_Link")
									: storyType === "Story_2"
									? this.handleChange("story2_Link")
									: null
							}
						/>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label={
								storyType === "Story_1"
									? "Story1 CTA"
									: storyType === "Story_2"
									? "Story 2 CTA"
									: null
							}
							type="email"
							fullWidth
							onChange={
								storyType === "Story_1"
									? this.handleChange("story1_CTA")
									: storyType === "Story_2"
									? this.handleChange("story2_CTA")
									: null
							}
						/>

						<TextField
							autoFocus
							margin="dense"
							id="name"
							label={
								storyType === "Story_1"
									? "Story1 Headline Text"
									: storyType === "Story_2"
									? "Story 2 Headline Text"
									: null
							}
							type="email"
							fullWidth
							onChange={
								storyType === "Story_1"
									? this.handleChange("story1_Headline_Text")
									: storyType === "Story_2"
									? this.handleChange("story2_Headline_Text")
									: null
							}
						/>

						<TextField
							autoFocus
							margin="dense"
							id="name"
							label={
								storyType === "Story_1"
									? "Story1 Paragraph Text"
									: storyType === "Story_2"
									? "Story 2 Paragraph Text"
									: null
							}
							type="email"
							fullWidth
							onChange={
								storyType === "Story_1"
									? this.handleChange("story1_Paragraph_Text")
									: storyType === "Story_2"
									? this.handleChange("story2_Paragraph_Text")
									: null
							}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.ErrorCheck} color="primary">
							Subscribe
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
