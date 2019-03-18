import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductGridPreview from "../preview_templates/ProductGridPreview";
import JumbotronPreview from "../preview_templates/JumboTronPreview";
import GalleryPreview from "../preview_templates/GalleryPreview";
import Two_StoryPreview from "../preview_templates/Two_StoriesPreview";
import Three_StoryPreview from "../preview_templates/Three_StoriesPreview";

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

		if (project) {
			var ProductGridProps = project.filter(
				(type) => type.type === "ProductGrid"
			)[0];
			var JumboTronProps = project.filter(
				(type) => type.type === "Jumbotron"
			)[0];
			var TwoStoryProps = project.filter(
				(type) => type.type === "Two_Stories"
			)[0];
			var ThreeStoryProps = project.filter(
				(type) => type.type === "Three_Stories"
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
						) : module.location === "Section1" &&
						  module.type === "Two_Stories" ? (
							<Two_StoryPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section1" &&
						  module.type === "Three_Stories" ? (
							<Three_StoryPreview modulePreview={ThreeStoryProps} />
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
						) : module.location === "Section2" &&
						  module.type === "Two_Stories" ? (
							<Two_StoryPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section2" &&
						  module.type === "Three_Stories" ? (
							<Three_StoryPreview modulePreview={TwoStoryProps} />
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
