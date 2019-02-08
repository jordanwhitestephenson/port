import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

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

const styles = theme => ({
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: 'none'
	}
});

class SimpleModal extends React.Component {
	state = {
        open: false,
        errors: this.props.errorData
	};

    // componentDidRecieve(yes) {
    //     console.log(yes)
    //     console.log(this.props.handleOpen, 'handle opem')
    // }
    componentWillReceiveProps(props) {
        this.setState({
            open: this.props.openModal
        })
    }
	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<Typography gutterBottom>Click to get the full Modal experience!</Typography>
                <Button onClick={this.props.handleOpen}>{this.props.open}</Button>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.handleClose}
				>
					<div style={getModalStyle()} className={classes.paper}>
						<Typography variant="h6" id="modal-title">
							Text in a modal
						</Typography>
						<Typography variant="subtitle1" id="simple-modal-description">
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</Typography>
						<SimpleModalWrapped />
					</div>
				</Modal>
			</div>
		);
	}
}

SimpleModal.propTypes = {
	classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
