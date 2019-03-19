import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import $ from "jquery";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getCSS } from "../../actions/profileActions";
import myCSS from "./preview_templates/preview_components/css";

const styles = (theme) => ({
	paper: {
		position: "absolute",
		width: theme.spacing.unit * 100,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: "none"
	}
});

class retrieveHTML extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			HTML: "",
			scroll: "paper"
		};
	}

	handleOpen = (e) => {
		// var style = css($("#elementToGetAllCSS"));
		// $("#elementToPutStyleInto").css(style);
		// let para = document.getElementById("FindCSS");
		// let compStyles = window.getComputedStyle(para);
		// // FindCSS

		// console.log(compStyles, "compStyles ");

		let HTML = $(e.target)
			.parentsUntil(".parentDiv")
			.find(".parentDiv")[0].innerHTML;
		let findCSS = $(e.target).parentsUntil(".parentDiv");

		this.setState({
			HTML: HTML,
			open: true,
			scroll: "paper"
		});
		// this.props.getCSS();
		// this.props.addHTML(this.state.HTML, this.props.projectID);
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;
		var para = document.getElementById("FindCSS");
		// document.getElementById("demo");
		// let para = document.querySelector("p");
		// let compStyles = window.getComputedStyle(para);
		console.log(myCSS[0], "compStyles");
		var styleDiv = "<style>" +  myCSS + "</style>";
		return (
			<div>
				<Button onClick={this.handleOpen}>GET HTML</Button>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.handleClose}>
					<Dialog
						open={this.state.open}
						onClose={this.handleClose}
						scroll={this.state.scroll}
						aria-labelledby="scroll-dialog-title">
						<DialogTitle id="scroll-dialog-title">HTML</DialogTitle>
						<DialogContent>
							<DialogContentText>
								<div className="preview_model">
									{styleDiv}
									{this.state.HTML}
								</div>
							</DialogContentText>
						</DialogContent>
					</Dialog>
				</Modal>
			</div>
		);
	}
}

retrieveHTML.propTypes = {
	classes: PropTypes.object.isRequired,
	projectID: PropTypes.string.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
// const SimpleModalWrapped = withStyles(styles)(retrieveHTML);

// // export default connect({ addHTML })(withRouter(SimpleModalWrapped));
// export default SimpleModalWrapped;
const mapStateToProps = (state) => ({
	CSS: state.CSS
});

export default withRouter(
	connect(
		mapStateToProps,
		{ getCSS }
	)(withStyles(styles)(retrieveHTML))
);
