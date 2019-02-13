import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

export class ImageContainer extends Component {
	static propTypes = {
		prop: PropTypes
	};
	state = {
		modulePreview: this.props.modulePreview
	};
	render() {
		const module = this.props.modulePreview;
		var main_image_replaced = this.state.modulePreview.main_image.SRC;
		console.log('*****IMAGE CONTAINER', main_image_replaced)
		if (module.main_image.SRC.includes('?$staticlink$')) {
			let main_image_SRC = module.main_image.SRC;

			main_image_SRC =
				'http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/' +
				main_image_SRC.replace('?$staticlink$', '');
			main_image_replaced = main_image_SRC;
		}


		return (
			
			<Grid item xs={12} className="IMAGE_CONTAINER">
				<a href={this.state.modulePreview.main_image.link}>
					<img src={main_image_replaced} class="img-responsive" title={this.state.modulePreview.main_image.title} alt={this.state.modulePreview.main_image.alt}/>
				</a>
			</Grid>
		
		);
	}
}

export default ImageContainer;
