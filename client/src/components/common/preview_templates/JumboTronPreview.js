import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ImageContainer from './preview_components/ImageContainer';
import TextContainer from './preview_components/TextContainer';
import PropTypes from 'prop-types';


class JumboTronPreview extends Component {
	state = {
		modulePreview: ''
	};
	componentWillReceiveProps(nextProps, nextContext) {
		this.setState({
			modulePreview: nextProps.modulePreview
		})
	}

	render() {
		const module = this.state.modulePreview;
		return (
			<div className="jumboTron" style={{ maxWidth: '980px', margin: 'auto' }}>		
				{module.layout === 'Left' ? (
					<Grid
						container
						spacing={24}
						className="module_container"
						moduleName={module.type}
						style={{ background: `${module.backgroundColor}` }}
					>
						<Grid item xs={12} sm={6} style ={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
							<ImageContainer modulePreview={this.state.modulePreview} />
						</Grid>
						<Grid item xs={12} sm={6} style ={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
							<TextContainer modulePreview={this.state.modulePreview} />
						</Grid>
					</Grid>
				) : module.layout === "Right" ? (
					<Grid
						container
						spacing={24}
						className="module_container"
						moduleName={module.type}
						style={{ background: `${module.backgroundColor}` }}
					>
						<Grid item xs={12} sm={6} style ={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
							<TextContainer modulePreview={this.state.modulePreview} />
						</Grid>
						<Grid item xs={12} sm={6} style ={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
							<ImageContainer modulePreview={this.state.modulePreview} />
						</Grid>
					</Grid>
					) : 
					<Grid
						container
						spacing={24}
						className="module_container"
						moduleName={module.type}
						style={{ background: `${module.backgroundColor}` }}>
						<Grid item xs={12} style ={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
							<TextContainer modulePreview={this.state.modulePreview} />
						</Grid>
					</Grid>	
					}
			</div>
		);
	}
}
JumboTronPreview.propTypes = {
	modulePreview: PropTypes.string.isRequired,

};

export default JumboTronPreview;
