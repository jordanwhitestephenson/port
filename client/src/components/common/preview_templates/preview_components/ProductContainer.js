import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
const productStyle = {
	padding: '20px'
};
const marginBottom = {
	marginBottom: '20px'
};
export class ProductContainer extends Component {
	static propTypes = {
		prop: PropTypes
	};
	state = {
		modulePreview: this.props.modulePreview
	};
	render() {
		var image1_replaced = '';
		var image2_replaced = '';
		var image3_replaced = '';
		var image4_replaced = '';
		const module = this.state.modulePreview;


		if (
			module.imageSets.image1.SRC.includes('?$staticlink$') ||
			module.imageSets.image2.SRC.includes('?$staticlink$') ||
			module.imageSets.image3.SRC.includes('?$staticlink$') ||
			module.imageSets.image4.SRC.includes('?$staticlink$')
		) {
			let imageSRC1 = module.imageSets.image1.SRC;
			let imageSRC2 = module.imageSets.image2.SRC;
			let imageSRC3 = module.imageSets.image3.SRC;
			let imageSRC4 = module.imageSets.image4.SRC;
			imageSRC1 =
				'http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/' +
				imageSRC1.replace('?$staticlink$', '');
			imageSRC2 =
				'http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/' +
				imageSRC2.replace('?$staticlink$', '');
			imageSRC3 =
				'http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/' +
				imageSRC3.replace('?$staticlink$', '');
			imageSRC4 =
				'http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/' +
				imageSRC4.replace('?$staticlink$', '');
			image1_replaced = imageSRC1;
			image2_replaced = imageSRC2;
			image3_replaced = imageSRC3;
			image4_replaced = imageSRC4;
		}
		return (
			<Grid item xs={12} style={{ height: "100", display: "flex", justifyContent:"space-around", flexDirection : "column"}}>
				<Grid container alignItems="flex-end">
					<Grid style={productStyle} item xs={12} sm={6} className="IMAGE_CONTAINER">
						<img src={image1_replaced} className="img-responsive" style={marginBottom} alt={module.imageSets.image1.alt} />
						<p class="product_desctiption cx-brand-font text-center">{module.imageSets.image1.alt}</p>
					</Grid>
					<Grid item xs={12} sm={6} style={productStyle} className="IMAGE_CONTAINER">
						<img src={image2_replaced} className="img-responsive" style={marginBottom} alt={module.imageSets.image2.alt} />
						<p class="product_desctiption cx-brand-font text-center">{module.imageSets.image2.alt}</p>
					</Grid>
				</Grid>

				<Grid container alignItems="flex-end">
					<Grid item xs={12} sm={6} style={productStyle} className="IMAGE_CONTAINER">
						<img src={image3_replaced} className="img-responsive" style={marginBottom} alt={module.imageSets.image3.alt} />
						<p class="product_desctiption cx-brand-font text-center">{module.imageSets.image3.alt}</p>
					</Grid>
					<Grid item xs={12} sm={6} style={productStyle} className="IMAGE_CONTAINER">
						<img src={image4_replaced} className="img-responsive" style={marginBottom} alt={module.imageSets.image4.alt} />
						<p class="product_desctiption cx-brand-font text-center">{module.imageSets.image4.alt}</p>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
// http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/dwf83ca4f7/MenProduct4.jpg
export default ProductContainer;
// MenProduct3.jpg?$staticlink$
// MODEL_TEST.png?$staticlink$
