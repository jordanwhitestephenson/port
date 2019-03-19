import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ImageContainer from './preview_components/ImageContainer';
import TextContainer from './preview_components/TextContainer';
import PropTypes from 'prop-types';


class JumboTronPreview extends Component {
	state = {
		modulePreview: this.props.modulePreview
	};

	render() {
		const module = this.state.modulePreview;

		return (
			<div className="jumboTron" className= "cs_container-crocss" style={{  margin: 'auto' }}>		
				{module.layout === 'Left' ? (
					<Grid
						container
						spacing={24}
						className="module_container"
						modulename={module.type}
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
						modulename={module.type}
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
						modulename={module.type}
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
	modulePreview: PropTypes.object.isRequired,

};

export default JumboTronPreview;
