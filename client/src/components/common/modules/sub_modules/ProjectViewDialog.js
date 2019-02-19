import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ViewIcon from '@material-ui/icons/Visibility';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import JumboTronPreview from '../../preview_templates/JumboTronPreview';
import ProductGridPreview from '../../preview_templates/ProductGridPreview';
import GalleryPreview from '../../preview_templates/GalleryPreview'
import ReactDOMServer from 'react-dom/server';

const styles = {
	appBar: {
		position: 'relative'
	},
	flex: {
		flex: 1
	}
};

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class ProjectViewDialog extends React.Component {
	state = {
		open: false,
		modulePreview: this.props.modulePreview,
		HTML: ''
	};
	componentWillReceiveProps(nextProps) {
		this.setState({
			modulePreview: nextProps,
			
		});
	}
	// const node = ReactDOM.findDOMNode(this);
	handleHTML = () => {
		var HTML = ReactDOMServer.renderToString(<JumboTronPreview modulePreview={this.state.modulePreview} />)
		this.setState({
			HTML: HTML,
		});
	}
	handleClickOpen = () => {
		this.setState({
			open: true,
			modulePreview: this.props.modulePreview
		});

	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;
		const module = this.state.modulePreview;
		console.log(module)
		
	

		return (
			<div>
				<IconButton variant="outlined" color="primary" onClick={this.handleClickOpen}>
					<ViewIcon frontSize="large" />
				</IconButton>
				<Dialog fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
								<CloseIcon />
							</IconButton>
						</Toolbar>
					</AppBar>
					<List>
						<div style={{ margin: 'auto' }}>
							{module.type === 'Jumbotron' ? (
								<JumboTronPreview modulePreview={this.state.modulePreview} />
							) : null}
							{module.type === 'ProductGrid' ? (
								<ProductGridPreview modulePreview={this.state.modulePreview} />
							) : null}
							{module.type === 'Gallery' ? (
								<GalleryPreview modulePreview={this.state.modulePreview} />
							) : null}
						</div>
	
					</List>
			
				</Dialog>
			</div>
		);
	}
}

ProjectViewDialog.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectViewDialog);
					// {/* <TextField
					// 		value={this.state.HTML}
					// 		multiLine={true}
					// 		rows={2}
					
					// 	/>
					// 	<button onClick = {this.handleHTML}>HTML</button> */}