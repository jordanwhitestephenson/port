import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import $ from "jquery";
import Dialog from "@material-ui/core/Dialog";
import { addHTML } from "../../actions/profileActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

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

class SimpleModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			HTML: "",
			scroll: "paper"
		};
	}

	handleOpen = (e) => {
		let HTML = $(e.target)
			.parentsUntil(".parentDiv")
			.find(".parentDiv")[0].innerHTML;
		this.setState({
			HTML: HTML,
			open: true,
			scroll: "paper"
		});
		// this.props.addHTML(this.state.HTML, this.props.projectID);
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;

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
							<DialogContentText>{this.state.HTML}</DialogContentText>
						</DialogContent>
					</Dialog>
				</Modal>
			</div>
		);
	}
}

SimpleModal.propTypes = {
	classes: PropTypes.object.isRequired,
	projectID: PropTypes.string.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

// export default connect({ addHTML })(withRouter(SimpleModalWrapped));
export default SimpleModalWrapped
