import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import JumboTronPreview from "../common/preview_templates/JumboTronPreview";
import ProductGridPreview from "../common/preview_templates/ProductGridPreview";
import GalleryPreview from "../common/preview_templates/GalleryPreview";

export class PreviewProjectVIEW extends Component {
	static propTypes = {
		prop: PropTypes
	};
	constructor(props) {
		super(props);
		this.state = {
			project: this.props.project.project
		};
	}
	render() {
		if (this.props.project.project) {
			const Section1 = this.props.project.project.modules.filter(
				(section) => section.location === "Section1"
			)[0];
			const Section2 = this.props.project.project.modules.filter(
				(section) => section.location === "Section2"
			)[0];
			const Section3 = this.props.project.project.modules.filter(
				(section) => section.location === "Section3"
			)[0];
			const Section4 = this.props.project.project.modules.filter(
				(section) => section.location === "Section4"
			)[0];

			return (
				<section>
					<a class="btn btn-light" href="/dashboard">
						Go Back
					</a>
					<div className="cs_container-crocs">
						<div className="SECTION_1">
							{Section1.type === "Jumbotron" ? (
								<JumboTronPreview />
							) : Section1.type === "ProductGrid" ? (
								<ProductGridPreview modulePreview={Section1} />
							) : Section1.type === "Gallery" ? (
								<GalleryPreview modulePreview={Section1} />
							) : null}
						</div>
						<div className="SECTION_2">
							{Section2.type === "Jumbotron" ? (
								<JumboTronPreview modulePreview={Section2} />
							) : Section2.type === "ProductGrid" ? (
								<ProductGridPreview modulePreview={Section2} />
							) : Section2.type === "Gallery" ? (
								<GalleryPreview modulePreview={Section2} />
							) : null}
						</div>
						<div className="SECTION_3">
							{Section3.type === "Jumbotron" ? (
								<JumboTronPreview modulePreview={Section3} />
							) : Section3.type === "ProductGrid" ? (
								<ProductGridPreview modulePreview={Section3} />
							) : Section3.type === "Gallery" ? (
								<GalleryPreview modulePreview={Section3} />
							) : null}
						</div>
					</div>
				</section>
			);
		} else {
			return <h1>Loading....</h1>;
		}

		//
	}
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PreviewProjectVIEW);
