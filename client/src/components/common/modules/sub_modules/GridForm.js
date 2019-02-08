import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import First from '@material-ui/icons/Filter1';
import Second from '@material-ui/icons/Filter2';
import Third from '@material-ui/icons/Filter3';
import Fourth from '@material-ui/icons/Filter4';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddCollection from '@material-ui/icons/AddAPhoto';

export default class GridForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image1_SRC: '205166_1AS_Crocband_Gallery_Clog_main.png?$staticlink$',
			image1_link: '',
			image1_alt: 'Crocband™ Platform Clog',
			image2_SRC: '205330_97A_Crocband_Graphic_III_Clog_main.png?$staticlink$',
			image2_link: '',
			image2_alt: 'Crocband™ Graphic Clog',
			image3_SRC: '205166_1AS_Crocband_Gallery_Clog_main.png?$staticlink$',
			image3_link: '',
			image3_alt: 'Crocband™ Gallery Clog',
			image4_SRC: '205338_001_Leigh_Wedge_Chelsea_Boot_W_main.png?$staticlink$',
			image4_link: '',
			image4_alt: 'Leigh Wedge Chelsea Boot'
		};
		this.handleChange = this.handleChange.bind(this);
		this.addCollection = this.addCollection.bind(this);
		console.log(props);
	}
	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};
	addCollection(e) {
		e.preventDefault();
		const GridPhotos = {
			image1: {
				SRC: this.state.image1_SRC,
				link: this.state.image1_link,
				alt: this.state.image1_alt
			},
			image2: {
				SRC: this.state.image2_SRC,
				link: this.state.image2_link,
				alt: this.state.image2_alt
			},
			image3: {
				SRC: this.state.image3_SRC,
				link: this.state.image3_link,
				alt: this.state.image3_alt
			},
			image4: {
				SRC: this.state.image4_SRC,
				link: this.state.image4_link,
				alt: this.state.image4_alt
			}
		};
		this.props.callBackFromParent(GridPhotos);
	}

	render() {
		return (
			<div className="">
				<Grid container spacing={16}>
					<Grid item xs={12} md={3}>
						<First />
						<TextField
							id="outlined-textarea"
							label="Image 1 SRC"
							margin="normal"
							variant="outlined"
							InputLabelProps={{
								shrink: true
							}}
							value={this.state.image1_SRC}
							onChange={this.handleChange('image1_SRC')}
						/>
						<TextField
							id="outlined-textarea"
							label="Image 1 Link To Product"
							margin="normal"
							variant="outlined"
							InputLabelProps={{
								shrink: true
							}}
							value={this.state.image1_link}
							onChange={this.handleChange('image1_link')}
						/>
						<TextField
							id="outlined-textarea"
							label="Image 1 Alt Text"
							margin="normal"
							variant="outlined"
							InputLabelProps={{
								shrink: true
							}}
							value={this.state.image1_alt}	
							onChange={this.handleChange('image1_alt')}
						/>
					</Grid>
					<Grid item xs={12} md={3}>
						<Second />
						<TextField
							id="outlined-textarea"
							label="Image 2 SRC"
							fullWidth
							margin="normal"
							variant="outlined"
							value={this.state.image2_SRC}
							onChange={this.handleChange('image2_SRC')}
							InputLabelProps={{
								shrink: true
							}}
							required
						/>
						<TextField
							id="outlined-textarea"
							label="Image 2 Link To Product"
							margin="normal"
							variant="outlined"
							required
							InputLabelProps={{
								shrink: true
							}}
							value={this.state.image2_link}
							onChange={this.handleChange('image2_link')}
						/>
						<TextField
							id="outlined-textarea"
							label="Image 2 Alt Text/Title"
							margin="normal"
							variant="outlined"
							required
							InputLabelProps={{
								shrink: true
							}}
							value={this.state.image2_alt}
							onChange={this.handleChange('image2_alt')}
						/>
					</Grid>
					<Grid item xs={12} md={3}>
						<Third />
						<TextField
							id="outlined-textarea"
							label="Image 3"
							value={this.state.image3_SRC}
							onChange={this.handleChange('image3_SRC')}
							fullWidth
							margin="normal"
							variant="outlined"
							InputLabelProps={{
								shrink: true
							}}
						/>
						<TextField
							id="outlined-textarea"
							label="Image 3 Link To Product"
							margin="normal"
							variant="outlined"
							required
							InputLabelProps={{
								shrink: true
							}}
							value={this.state.image3_link}
							onChange={this.handleChange('image3_link')}
						/>
						<TextField
							id="outlined-textarea"
							label="Image 3 Alt Text"
							margin="normal"
							variant="outlined"
							required
							InputLabelProps={{
								shrink: true
							}}
							value={this.state.image3_alt}
							onChange={this.handleChange('image3_alt')}
						/>
					</Grid>
					<Grid item xs={12} md={3}>
						<Fourth />
						<TextField
							value={this.state.image4_SRC}
							onChange={this.handleChange('image4_SRC')}
							id="outlined-textarea"
							label="Image 4"
							fullWidth
							margin="normal"
							variant="outlined"
							InputLabelProps={{
								shrink: true
							}}
                        />
                                                <TextField
							id="outlined-textarea"
							label="Image 4 Link To Product"
							margin="normal"
                            variant="outlined"
                            required
							InputLabelProps={{
								shrink: true
							}}
							value={this.state.image4_link}
							onChange={this.handleChange('image4_link')}
						/>
						<TextField
							id="outlined-textarea"
							label="Image 4 Alt Text"
							margin="normal"
                            variant="outlined"
                            required
							InputLabelProps={{
								shrink: true
							}}
							value={this.state.image4_alt}
							onChange={this.handleChange('image4_alt')}
						/>
					</Grid>
				</Grid>
				<IconButton onClick={this.addCollection}>
					<AddCollection textSize = "large" />
				</IconButton>
			</div>
		);
	}
}
