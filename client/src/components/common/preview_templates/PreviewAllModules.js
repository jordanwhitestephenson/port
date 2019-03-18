import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductGridPreview from "../preview_templates/ProductGridPreview";
import JumbotronPreview from "../preview_templates/JumboTronPreview";
import GalleryPreview from "../preview_templates/GalleryPreview";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentProject } from "../../../actions/profileActions";

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
			// hash: this.props.location.hash.slice(1)
		};
	}
	static propTypes = {
		prop: PropTypes
	};

	componentDidMount(props) {
		this.setState({
			project: this.props.moduleArray
		});
	}
	// componentDidUpdate(prevProps, prevState) {
	// 	// Typical usage (don't forget to compare props):
	// 	if (this.props.moduleArray !== prevProps.moduleArray) {
	// 		this.setState({
	// 			project: this.props.moduleArray
	// 		});
	// 	}
	// }
	componentWillReceiveProps(nextProps, nextContext) {
		if (nextProps.moduleArray !== this.props.moduleArray) {
			this.setState({
				project: nextProps.moduleArray
			});
		}
	}

	render() {
		// var project = this.props.moduleArray;
		var project = this.state.project;

		console.log(this.props.moduleArray, "PROPS_CHANGE");
		console.log("STATE_CHANGE?", this.state.project);
		if (project) {
			var ProductGridProps = project.filter(
				(type) => type.type === "ProductGrid"
			)[0];
			var JumboTronProps = project.filter(
				(type) => type.type === "Jumbotron"
			)[0];
			var GalleryProps = project.filter((type) => type.type === "Gallery")[0];
			return (
				<div>
					{project.map((module) =>
						module.location === "Section1" && module.type === "Jumbotron" ? (
							<JumbotronPreview modulePreview={JumboTronProps} />
						) : module.location === "Section1" &&
						  module.type === "ProductGrid" ? (
							<ProductGridPreview modulePreview={ProductGridProps} />
						) : module.location === "Section1" && module.type === "Gallery" ? (
							<GalleryPreview modulePreview={GalleryProps} />
						) : null
					)}
					{project.map((module) =>
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
		} else {
			return <div>loading project...</div>;
		}
	}
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		changeZipcode: (zipcode) => {
// 			dispatch(changeZipcode(zipcode));
// 			dispatch(checkAddress());
// 		}
// 	}
// }
export default PreviewAllModules;
// const mapStateToProps = (state) => ({
// 	project: state.project
// });
// export default withRouter(
// 	connect(
// 		mapStateToProps,
// 		{ getCurrentProject }
// 	)(PreviewAllModules)
// );
