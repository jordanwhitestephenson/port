import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import EditIcon from '@material-ui/icons/Edit';
import PreviewIcon from '@material-ui/icons/PlayArrow';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import { deleteProject } from '../../actions/profileActions'
import PostMalone from '../common/icons/PostClog.jpg'
import DrewBarrymore from '../common/icons/DrewBarryMoreCrocs.png'
import JohnCen from '../common/icons/PostClog.jpg'
import Reviva from '../common/icons/Reviva.jpeg'
import LiteRide from '../common/icons/LiteRide.jpeg'
import ClassicClog from '../common/icons/ClassicClog.jpeg'


const styles = {
	card: {
		maxWidth: 345,
		margin: "20px"
	},
	media: {
		// ⚠️ object-fit is not supported by IE 11.
		objectFit: 'cover'
  },
  list: {
    justifyContent : "center"
  }
};

class ImgMediaCard extends Component {


	constructor(props) {
		super(props);
		this.state = {
			title: this.props.state,
			heading: '',
			openingParagraph: '',
			description: '',
			errors: {},
			icon: this.props.icon

		};

		this.onDeleteClick = this.onDeleteClick.bind(this);
	}


	onDeleteClick(e) {
		e.preventDefault();
		this.props.deleteProject(this.props.id, this.props.history)
		this.props.onDeleteClick(this.props.id)
	}
	render() {
		var photo = ''
		if (this.props.icon === "Post Malone") {
			photo =  PostMalone 
		}
		if (this.props.icon === "Drew Barrymore") {
			photo =  DrewBarrymore 
		}
		if (this.props.icon === "John Cena") {
			photo = JohnCen
		}
		if (this.props.icon === "LiteRide") {
			photo = LiteRide
		}
		if (this.props.icon === "Reviva") {
			photo = Reviva
		}
		if (this.props.icon === "Classic Clog") {
			photo = ClassicClog
		}
		const { classes } = this.props;
	
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					className={classes.media}
					height="140"
					image={photo}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{this.props.title}
					</Typography>
					<Typography component="p">{this.props.description}</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.list}>
				<Link
					to={{
						pathname: '/add-module',
						search: `?name=${this.props.title}`,
						hash: `${this.props.id}`
					}}
					className=""
				>
					<BuildIcon />
					<Typography>Build</Typography>
				</Link>

				<Link
					to={{
						pathname: '/edit-project',
						hash: `${this.props.id}`
					}}
				>
					<EditIcon />
					<Typography>Edit</Typography>
				</Link>

				<Link
					to={{
						pathname: '/preview-project',
						hash: `${this.props.id}`
					}}
				>
					<PreviewIcon />
					<Typography>Preview</Typography>
				</Link>

				<div>
					<IconButton onClick={this.onDeleteClick}>
						<DeleteIcon />
						<Typography>Delete</Typography>
					</IconButton>
				</div>
			</CardActions>
		</Card>
	);
}
}

ImgMediaCard.propTypes = {
	classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	project: state.project,
	errors: state.errors
});

// export default connect(
// 	mapStateToProps,
// 	{ addProject }
// )(withRouter(AddProject));

export default withRouter(connect(mapStateToProps, {deleteProject})(withStyles(styles)(ImgMediaCard)))

