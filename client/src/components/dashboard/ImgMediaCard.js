import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import EditIcon from '@material-ui/icons/Edit';
import PreviewIcon from '@material-ui/icons/PlayArrow';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
	card: {
    maxWidth: 345,
	},
	media: {
		// ⚠️ object-fit is not supported by IE 11.
		objectFit: 'cover'
  },
  list: {
    justifyContent : "center"
  }
};
// onDeleteClick(id) {
//   this.props.deleteProject(id);
// }

function ImgMediaCard(props) {
	const { classes } = props;
	const { title, description, id } = props;
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					className={classes.media}
					height="140"
					image="/static/images/cards/contemplative-reptile.jpg"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography component="p">{description}</Typography>
				</CardContent>
			</CardActionArea>
      <CardActions className={classes.list}>
				<Link
					to={{
						pathname: '/add-module',
						search: `?name=${title}`,
						hash: `${id}`
					}}
					className=""
				>
					<BuildIcon />
					<Typography>Build</Typography>
				</Link>

				<Link
					to={{
						pathname: '/edit-project',
						hash: `${id}`
					}}
				>
					<EditIcon />
					<Typography>Edit</Typography>
				</Link>

				<Link
					to={{
						pathname: '/preview-project',
						hash: `${id}`
					}}
				>
					<PreviewIcon />
					<Typography>Preview</Typography>
				</Link>

				<div>
					<DeleteIcon />
					<Typography>Delete</Typography>
				</div>
			</CardActions>
		</Card>
	);
}

ImgMediaCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
