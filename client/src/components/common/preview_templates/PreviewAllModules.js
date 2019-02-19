import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductGridPreview from "../preview_templates/ProductGridPreview";
import JumbotronPreview from "../preview_templates/JumboTronPreview";
import GalleryPreview from "../preview_templates/GalleryPreview";

export class PreviewAllModules extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			openingParagraph: "",
			icon: "",
			heading: "",
			description: "",
			errors: {},
			project: ""
		};
	}
	static propTypes = {
		prop: PropTypes
	};

	render() {
		const ProductGridProps = this.props.moduleArray.filter(
			(type) => type.type === "ProductGrid"
		)[0];
		const JumboTronProps = this.props.moduleArray.filter(
			(type) => type.type === "Jumbotron"
		)[0];
		const GalleryProps = this.props.moduleArray.filter(
			(type) => type.type === "Gallery"
		)[0];
		return (
			<div>
				{this.props.moduleArray.map((module) =>
					module.location === "Section1" && module.type === "Jumbotron" ? (
						<JumbotronPreview modulePreview={JumboTronProps} />
					) : module.location === "Section1" &&
					  module.type === "ProductGrid" ? (
						<ProductGridPreview modulePreview={ProductGridProps} />
					) : module.location === "Section1" && module.type === "Gallery" ? (
						<GalleryPreview modulePreview={GalleryProps} />
					) : null
				)}
				{this.props.moduleArray.map((module) =>
					module.location === "Section2" && module.type === "Jumbotron" ? (
						<JumbotronPreview modulePreview={JumboTronProps} />
					) : module.location === "Section2" &&
					  module.type === "ProductGrid" ? (
						<ProductGridPreview modulePreview={ProductGridProps} />
					) : module.type === "Gallery" && module.location === "Section2" ? (
						<GalleryPreview modulePreview={GalleryProps} />
					) : null
				)}
			</div>
		);
	}
}

export default PreviewAllModules;
