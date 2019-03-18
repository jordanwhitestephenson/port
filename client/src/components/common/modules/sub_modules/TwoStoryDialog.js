import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class TwoStoryDialog extends React.Component {
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
		this.handleCancel = this.handleCancel.bind(this);
	}
	componentWillMount() {
		if (this.props.originalStory.length > 0) {
			const story1 = this.props.originalStory.filter(
				(story) => Object.keys(story)[0] === "Story_1"
			)[0].Story_1;
			const story2 = this.props.originalStory.filter(
				(story) => Object.keys(story)[0] === "Story_2"
			)[0].Story_2;

			this.setState({
				story1_ImgSRC: story1.story1_ImgSRC,
				story1_ImgAlt: story1.story1_ImgAlt,
				story1_Link: story1.story1_Link,
				story1_CTA: story1.story1_CTA,
				story1_Headline_Text: story1.story1_Headline_Text,
				story1_Paragraph_Text: story1.story1_Paragraph_Text,
				story2_ImgSRC: story2.story2_ImgSRC,
				story2_ImgAlt: story2.story2_ImgAlt,
				story2_Link: story2.story2_Link,
				story2_CTA: story2.story2_CTA,
				story2_Headline_Text: story2.story2_Headline_Text,
				story2_Paragraph_Text: story2.story2_Paragraph_Text
			});
		}
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
	handleCancel = () => {
		this.setState({
			open: false
		});
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
							value={
								storyType === "Story_1"
									? this.state.story1_ImgSRC
									: storyType === "Story_2"
									? this.state.story2_ImgSRC
									: null
							}
							label={
								storyType === "Story_1"
									? "Story1 Image SRC"
									: storyType === "Story_2"
									? "Story2_Image SRC"
									: null
							}
							helperText={
								storyType === "Story_1"
									? "Example : 205473_4S3_Reviva_Flip_W_SS19_OF_OL_Woani_0250.png?$staticlink$ "
									: "HeroYellowimage.png?$staticlink$"
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
							id="alt"
							value={
								storyType === "Story_1"
									? this.state.story1_ImgAlt
									: storyType === "Story_2"
									? this.state.story2_ImgAlt
									: null
							}
							helperText={
								storyType === "Story_1"
									? "Example : Reviva™ "
									: "Example : Our Favorite Destinations to Travel with Crocs"
							}
							label={
								storyType === "Story_1"
									? "Story1 Image Alt"
									: storyType === "Story_2"
									? "Story2 Image Alt"
									: null
							}
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
							helperText={
								storyType === "Story_1"
									? "Example : $httpUrl('Page-Show','cid','reviva')$"
									: "Example : $httpUrl('Page-Show','cid','best-destinations-to-travel')$"
							}
							value={
								storyType === "Story_1"
									? this.state.story1_Link
									: storyType === "Story_2"
									? this.state.story2_Link
									: null
							}
							id="link"
							label={
								storyType === "Story_1"
									? "Story1 Link"
									: storyType === "Story_2"
									? "Story 2 Link"
									: null
							}
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
							id="CTA"
							value={
								storyType === "Story_1"
									? this.state.story1_CTA
									: storyType === "Story_2"
									? this.state.story2_CTA
									: null
							}
							label={
								storyType === "Story_1"
									? "Story1 CTA"
									: storyType === "Story_2"
									? "Story 2 CTA"
									: null
							}
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
							id="headline"
							value={
								storyType === "Story_1"
									? this.state.story1_Headline_Text
									: storyType === "Story_2"
									? this.state.story2_Headline_Text
									: null
							}
							label={
								storyType === "Story_1"
									? "Story1 Headline Text"
									: storyType === "Story_2"
									? "Story 2 Headline Text"
									: null
							}
							helperText={
								storyType === "Story_1"
									? "Example : Introducing Reviva™ by Crocs"
									: "Example : Our Favorite Destinations to Travel with Crocs"
							}
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
							helperText={
								storyType === "Story_1"
									? "Example : Engineered to add a little bounce to your day, the all-new Crocs Reviva™ Collection features bliss-inducing bubbles that massage and comfort while you’re on the go."
									: "Example : An inspiring look at the places Crocs employees are visiting and the styles they’re packing to maximize the adventure."
							}
							value={
								storyType === "Story_1"
									? this.state.story1_Paragraph_Text
									: storyType === "Story_2"
                                        ? this.state.story2_Paragraph_Text
									: null
							}
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
						<Button onClick={this.handleCancel} color="primary">
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
