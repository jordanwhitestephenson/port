import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

export class TextContainer extends Component {
	static propTypes = {
		prop: PropTypes
	};
	state = {
		modulePreview: ""
	};
	componentWillMount() {
		this.setState({
			modulePreview: this.props.modulePreview,
		});
	}
	render() {
		const module = this.props.modulePreview;
		var textBoxBackground = this.props.textBoxBackground;

		return (
			<Grid
				item
				direction="column"
				justify="center"
				alignItems="center"
				xs={12}
				className={
					textBoxBackground
						? "TEXT_CONTAINER cs_container-crocs textBoxPadding"
						: "TEXT_CONTAINER cs_container-crocs "
				}>
				<h2
					style={{
						color: module.textColor,
						fontSize: `${module.headlineSize}px`
					}}
					className="cx-heavy-brand-font text-center">
					{module.headline}
				</h2>
				<p
					className="cx-brand-font text-center"
					style={{ color: module.textColor }}>
					{module.paragraphText}
				</p>
				{module.button == "true" ? (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						}}
						className="button_container">
						<a
							href={module.buttonInfo.link}
							className="cx-button"
							role="button">
							{module.buttonInfo.text}
						</a>
					</div>
				) : null}
			</Grid>
		);
	}
}

export default TextContainer;
