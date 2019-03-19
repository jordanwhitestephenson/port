import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductGridPreview from "../preview_templates/ProductGridPreview";
import JumbotronPreview from "../preview_templates/JumboTronPreview";
import GalleryPreview from "../preview_templates/GalleryPreview";
import TwoStoryPreview from "../preview_templates/Two_StoriesPreview";
import ThreeStoryPreview from "../preview_templates/Three_StoriesPreview";
import StoryHeadlinePreview from "../preview_templates/StoryHeadline_Preview";
import USGPreview from "../preview_templates/USGPreview";
import EmailSocialPreview from "../preview_templates/EmailSocialPreview";

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

	componentWillMount(props) {
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
		var project = this.state.project;

		if (project) {
			var ProductGridProps = project.filter(
				(type) => type.type === "ProductGrid"
			)[0];
			var StoryHeadlineProps = project.filter(
				(type) => type.type === "Story_Headline"
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
				<div className="preview_container">
					{project.map((module) =>
						module.location === "Section1" && module.type === "Jumbotron" ? (
							<JumbotronPreview modulePreview={JumboTronProps} />
						) : module.location === "Section1" &&
						  module.type === "Story_Headline" ? (
							<StoryHeadlinePreview modulePreview={StoryHeadlineProps} />
						) : module.location === "Section1" &&
						  module.type === "ProductGrid" ? (
							<ProductGridPreview modulePreview={ProductGridProps} />
						) : module.location === "Section1" && module.type === "Gallery" ? (
							<GalleryPreview modulePreview={GalleryProps} />
						) : module.location === "Section1" &&
						  module.type === "Two_Stories" ? (
							<TwoStoryPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section1" &&
						  module.type === "Three_Stories" ? (
							<ThreeStoryPreview modulePreview={ThreeStoryProps} />
						) : module.location === "Section1" && module.type === "USG" ? (
							<USGPreview modulePreview={ThreeStoryProps} />
						) : module.location === "Section1" &&
						  module.type === "Email_Social" ? (
							<EmailSocialPreview />
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
							<TwoStoryPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section2" &&
						  module.type === "Three_Stories" ? (
							<ThreeStoryPreview modulePreview={ThreeStoryProps} />
						) : module.location === "Section2" && module.type === "USG" ? (
							<USGPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section2" &&
						  module.type === "Email_Social" ? (
							<EmailSocialPreview />
						) : null
					)}
					{project.map((module) =>
						module.location === "Section3" && module.type === "Jumbotron" ? (
							<JumbotronPreview modulePreview={JumboTronProps} />
						) : module.location === "Section3" &&
						  module.type === "ProductGrid" ? (
							<ProductGridPreview modulePreview={ProductGridProps} />
						) : module.type === "Gallery" && module.location === "Section3" ? (
							<GalleryPreview modulePreview={GalleryProps} />
						) : module.location === "Section3" &&
						  module.type === "Two_Stories" ? (
							<TwoStoryPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section3" &&
						  module.type === "Three_Stories" ? (
							<ThreeStoryPreview modulePreview={ThreeStoryProps} />
						) : module.location === "Section3" && module.type === "USG" ? (
							<USGPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section3" &&
						  module.type === "Email_Social" ? (
							<EmailSocialPreview />
						) : null
					)}
					{project.map((module) =>
						module.location === "Section4" && module.type === "Jumbotron" ? (
							<JumbotronPreview modulePreview={JumboTronProps} />
						) : module.location === "Section4" &&
						  module.type === "ProductGrid" ? (
							<ProductGridPreview modulePreview={ProductGridProps} />
						) : module.type === "Gallery" && module.location === "Section4" ? (
							<GalleryPreview modulePreview={GalleryProps} />
						) : module.location === "Section4" &&
						  module.type === "Two_Stories" ? (
							<TwoStoryPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section4" &&
						  module.type === "Three_Stories" ? (
							<ThreeStoryPreview modulePreview={ThreeStoryProps} />
						) : module.location === "Section4" && module.type === "USG" ? (
							<USGPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section4" &&
						  module.type === "Email_Social" ? (
							<EmailSocialPreview />
						) : null
					)}
					{project.map((module) =>
						module.location === "Section5" && module.type === "Jumbotron" ? (
							<JumbotronPreview modulePreview={JumboTronProps} />
						) : module.location === "Section5" &&
						  module.type === "ProductGrid" ? (
							<ProductGridPreview modulePreview={ProductGridProps} />
						) : module.type === "Gallery" && module.location === "Section5" ? (
							<GalleryPreview modulePreview={GalleryProps} />
						) : module.location === "Section5" &&
						  module.type === "Two_Stories" ? (
							<TwoStoryPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section5" &&
						  module.type === "Three_Stories" ? (
							<ThreeStoryPreview modulePreview={ThreeStoryProps} />
						) : module.location === "Section5" && module.type === "USG" ? (
							<USGPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section5" &&
						  module.type === "Email_Social" ? (
							<EmailSocialPreview />
						) : null
					)}
					{project.map((module) =>
						module.location === "Section6" && module.type === "Jumbotron" ? (
							<JumbotronPreview modulePreview={JumboTronProps} />
						) : module.location === "Section6" &&
						  module.type === "ProductGrid" ? (
							<ProductGridPreview modulePreview={ProductGridProps} />
						) : module.type === "Gallery" && module.location === "Section6" ? (
							<GalleryPreview modulePreview={GalleryProps} />
						) : module.location === "Section6" &&
						  module.type === "Two_Stories" ? (
							<TwoStoryPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section6" &&
						  module.type === "Three_Stories" ? (
							<ThreeStoryPreview modulePreview={ThreeStoryProps} />
						) : module.location === "Section6" && module.type === "USG" ? (
							<USGPreview modulePreview={TwoStoryProps} />
						) : module.location === "Section6" &&
						  module.type === "Email_Social" ? (
							<EmailSocialPreview />
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
