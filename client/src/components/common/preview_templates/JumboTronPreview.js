import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ImageContainer from './preview_components/ImageContainer';
import TextContainer from './preview_components/TextContainer';

class JumboTronPreview extends Component {
	state = {
		modulePreview: this.props.modulePreview
	};
	render() {
		const module = this.state.modulePreview;

		return (
			<div style={{ maxWidth: '980px', margin: 'auto' }}>
				{module.layout === 'Left' ? (
					<Grid
						container
						spacing={24}
						className="module_container"
						moduleName={module.type}
						style={{ backgroundColor: `${module.backgroundColor}` }}
					>
						<Grid item xs={12} sm={6}>
							<ImageContainer modulePreview={this.state.modulePreview} />
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextContainer modulePreview={this.state.modulePreview} />
						</Grid>
					</Grid>
				) : (
					<Grid
						container
						spacing={24}
						className="module_container"
						moduleName={module.type}
						style={{ backgroundColor: `${module.backgroundColor}` }}
					>
						<Grid item xs={12} sm={6}>
							<TextContainer modulePreview={this.state.modulePreview} />
						</Grid>
						<Grid item xs={12} sm={6}>
							<ImageContainer modulePreview={this.state.modulePreview} />
						</Grid>
					</Grid>
				)}
			</div>
		);
	}
}
export default JumboTronPreview;
