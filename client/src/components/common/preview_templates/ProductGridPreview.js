import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ImageContainer from './preview_components/ImageContainer';
import ProductContainer from './preview_components/ProductContainer';

const styles  = {
	flexbox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
	},
};


class ProductGridPreview extends Component {
	state = {
		modulePreview: this.props.modulePreview
    };
 
	render() {
		const module = this.state.modulePreview;

		return (
			<div style={{ maxWidth: '980px', margin: 'auto' }}>
				{module.layout === 'Left' ? (
					<Grid container  spacing={24}   moduleName={module.type}>
                        <Grid item xs={12} style={styles.flexbox} sm={6}>
							<ProductContainer modulePreview={this.state.modulePreview} />
						</Grid>
						<Grid style={styles.flexbox} item xs={12} sm={6}>
							<ImageContainer modulePreview={this.state.modulePreview} />
						</Grid>
					</Grid>
				) : (
					<Grid container spacing={24} lassName={styles.flexbox} moduleName={module.type}>
						<Grid item style={styles.flexbox} xs={12} sm={6}>
							<ImageContainer modulePreview={this.state.modulePreview} />
						</Grid>
						<Grid item style={styles.flexbox}  xs={12} sm={6}>
							<ProductContainer modulePreview={this.state.modulePreview} />
						</Grid>
					</Grid>
				)}
			</div>
		);
	}
}
export default ProductGridPreview;
