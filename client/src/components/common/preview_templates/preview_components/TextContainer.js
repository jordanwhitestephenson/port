import React, { Component } from "react";


export class TextContainer extends Component {

	state = {
		modulePreview: ""
	};
	componentWillMount() {
		this.setState({
			modulePreview: this.props.modulePreview
		});
	}
	render() {
		const module = this.props.modulePreview;
		var textBoxBackground = this.props.textBoxBackground;

		return (
			<div className={
					textBoxBackground
						? "TEXT_CONTAINER cs_container-crocs textBoxPadding flex_box_column col-xs-12"
						: "TEXT_CONTAINER cs_container-crocs flex_box_column col-xs-12 "
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
			</div>
		);
	}
}

export default TextContainer;
