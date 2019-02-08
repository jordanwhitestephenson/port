import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { TwitterPicker } from 'react-color';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import LeftIcon from '../../common/icons/browser-27.png';
import RightIcon from '../../common/icons/browser-33.png';
import IconButton from '@material-ui/core/IconButton';
import UpdateIcon from '@material-ui/icons/Update';
import AddIcon from '@material-ui/icons/Add';
import GridForm from './sub_modules/GridForm';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	dense: {
		marginTop: 16
	},
	menu: {
		width: 200
	},
	root: {
		display: 'flex'
	},
	formControl: {
		margin: theme.spacing.unit * 3
	},
	group: {
		margin: `${theme.spacing.unit}px 0`
	},
	icon: {
		width: '50px',
		height: '50px'
	},
	formContainer: {
		padding: '20px',
		backgroundColor: '#f6f6f640',
		boxShadow: '1px 6px 22px 0px #888888',
		margin: '10px'
	}
});

class ProductGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: this.props.location,
			updateButton: 'ADD MODULE',
			imageSets: '',
			layout: '',
			main_image_SRC: 'MODEL_TEST.png?$staticlink$',
			main_image_alt: '',
			main_image_link: ''
		};

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		const moduleData = {
			type: 'ProductGrid',
			location: this.state.location,
			layout: this.state.layout,
			imageSets: this.state.imageSets,
			main_image: {
				SRC: this.state.main_image_SRC,
				link: this.state.main_image_link,
				alt: this.state.main_image_alt
			}
		};
		this.props.callbackfromparent(moduleData);
		this.setState({
			updateButton: 'UPDATE MODULE'
		});
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};
	handleButton = event => {
		this.setState({ button: event.target.value });
	};

	handleLayout = event => {
		this.setState({ layout: event.target.value });
	};
	handleColorChange = color => {
		this.setState({ backgroundColor: color.hex });
	};
	GridFormCallback = dataFromGridForm => {
		this.setState({ imageSets: dataFromGridForm });
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.formContainer}>
				<form className={classes.container} onSubmit={this.onSubmit}>
					<Grid container direction="row" spacing={2} xs={12}>
						<Grid item xs={12}>
							<IconButton
								role="input"
								style={{ float: 'left' }}
								type="submit"
								value="Add Module"
								color="secondary"
								variant="contained"
								className={classes.button}
							>
								{this.state.updateButton === 'ADD MODULE' ? <AddIcon /> : <UpdateIcon />}
							</IconButton>

							<Typography component="h2" variant="display1" gutterBottom>
								Product Grid
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<FormLabel>Layout</FormLabel>
						</Grid>

						<Grid container direction="column" justify="center" alignItems="center" xs={6}>
							<img src={RightIcon} alt="ya" className={classes.icon} />
							<Radio
								checked={this.state.layout === 'Right'}
								onChange={this.handleLayout}
								value="Right"
								name="radio-Right"
								aria-label="A"
							/>
						</Grid>

						<Grid container direction="column" justify="center" alignItems="center" xs={6}>
							<img src={LeftIcon} alt="ya" className={classes.icon} />
							<Radio
								checked={this.state.layout === 'Left'}
								onChange={this.handleLayout}
								value="Left"
								name="radio-left"
								aria-label="Left"
							/>
						</Grid>

						<Grid item xs={12}>
							<FormLabel>Product Grid Images</FormLabel>
							<GridForm callBackFromParent={this.GridFormCallback} />
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="outlined-uncontrolled"
							fullWidth
							label="Single Model/Product Image"
							className={classes.textField}
							margin="normal"
							variant="outlined"
							value={this.state.main_image_SRC}
							onChange={this.handleChange('main_image_SRC')}
							InputLabelProps={{
								shrink: true
							}}
						/>
						<TextField
							id="outlined-uncontrolled"
							fullWidth
							label="Link"
							className={classes.textField}
							margin="normal"
							variant="outlined"
							value={this.state.main_image_link}
							onChange={this.handleChange('main_image_link')}
							InputLabelProps={{
								shrink: true
							}}
						/>
						<TextField
							id="outlined-uncontrolled"
							fullWidth
							label="Alt Tag"
							className={classes.textField}
							margin="normal"
							variant="outlined"
							value={this.state.main_image_alt}
							onChange={this.handleChange('main_image_alt')}
							InputLabelProps={{
								shrink: true
							}}
						/>
					</Grid>

					<div />
				</form>
			</div>
		);
	}
}

ProductGrid.propTypes = {
	classes: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductGrid);
