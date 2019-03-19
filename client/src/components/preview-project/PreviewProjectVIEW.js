import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import JumboTronPreview from "../common/preview_templates/JumboTronPreview";
import ProductGridPreview from "../common/preview_templates/ProductGridPreview";
import GalleryPreview from "../common/preview_templates/GalleryPreview";
import Two_StoryPreview from "../common/preview_templates/Two_StoriesPreview";
import Three_StoryPreview from "../common/preview_templates/Three_StoriesPreview";
import StoryHeadlinePreview from "../common/preview_templates/StoryHeadline_Preview";
import USGPreview from "../common/preview_templates/USGPreview";
import RetrieveHTML from "../common/RetrieveHTML";
import EmailSocialPreview from "../common/preview_templates/EmailSocialPreview";

export class PreviewProjectVIEW extends Component {
	static propTypes = {
		prop: PropTypes
	};
	constructor(props) {
		super(props);
		this.state = {
			project: "",
			modules: "",
			Section1: "",
			Section2: "",
			Section3: "",
			Section4: "",
			Section5: "",
			Section6: ""
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			project: nextProps.project.project,
			modules: nextProps.project.project.modules
		});
		if (nextProps.project) {
			if (
				nextProps.project.project.modules.filter(
					(section) => section.location === "Section1"
				).length > 0
			) {
				this.setState({
					Section1: nextProps.project.project.modules.filter(
						(section) => section.location === "Section1"
					)[0]
				});
			}
			if (
				nextProps.project.project.modules.filter(
					(section) => section.location === "Section2"
				).length > 0
			) {
				this.setState({
					Section2: nextProps.project.project.modules.filter(
						(section) => section.location === "Section2"
					)[0]
				});
			}
			if (
				nextProps.project.project.modules.filter(
					(section) => section.location === "Section3"
				).length > 0
			) {
				this.setState({
					Section3: nextProps.project.project.modules.filter(
						(section) => section.location === "Section3"
					)[0]
				});
			}
			if (
				nextProps.project.project.modules.filter(
					(section) => section.location === "Section4"
				).length > 0
			) {
				this.setState({
					Section4: nextProps.project.project.modules.filter(
						(section) => section.location === "Section4"
					)[0]
				});
			}
			if (
				nextProps.project.project.modules.filter(
					(section) => section.location === "Section5"
				).length > 0
			) {
				this.setState({
					Section5: nextProps.project.project.modules.filter(
						(section) => section.location === "Section5"
					)[0]
				});
			}
			if (
				nextProps.project.project.modules.filter(
					(section) => section.location === "Section6"
				).length > 0
			) {
				this.setState({
					Section6: nextProps.project.project.modules.filter(
						(section) => section.location === "Section6"
					)[0]
				});
			}
		}
	}

	render() {
		if (this.state.modules.length > 0) {
			const Section1 = this.state.Section1;
			const Section2 = this.state.Section2;
			const Section3 = this.state.Section3;
			const Section4 = this.state.Section4;
			const Section5 = this.state.Section5;
			const Section6 = this.state.Section6;

			return (
				<section>
					<a className="btn btn-light" href="/dashboard">
						Go Back
					</a>

					<div className="parentDiv preview_container" id = "FindCSS">
						<div className="cs_container-crocs ">
							<div className="SECTION_1">
								{Section1.type === "Jumbotron" ? (
									<JumboTronPreview modulePreview={Section1} />
								) : Section1.type === "Story_Headline" ? (
									<StoryHeadlinePreview modulePreview={Section1} />
								) : Section1.type === "ProductGrid" ? (
									<ProductGridPreview modulePreview={Section1} />
								) : Section1.type === "Gallery" ? (
									<GalleryPreview modulePreview={Section1} />
								) : Section1.type === "Two_Stories" ? (
									<Two_StoryPreview modulePreview={Section1} />
								) : Section1.type === "Three_Stories" ? (
									<Three_StoryPreview modulePreview={Section1} />
								) : Section1.type === "USG" ? (
									<USGPreview modulePreview={Section1} />
								) : null}
							</div>

							<div className="SECTION_2 ">
								{Section2.type === "Jumbotron" ? (
									<JumboTronPreview modulePreview={Section2} />
								) : Section2.type === "ProductGrid" ? (
									<ProductGridPreview modulePreview={Section2} />
								) : Section2.type === "Story_Headline" ? (
									<StoryHeadlinePreview modulePreview={Section2} />
								) : Section2.type === "Gallery" ? (
									<GalleryPreview modulePreview={Section2} />
								) : Section2.type === "Two_Stories" ? (
									<Two_StoryPreview modulePreview={Section2} />
								) : Section2.type === "Three_Stories" ? (
									<Three_StoryPreview modulePreview={Section2} />
								) : Section2.type === "USG" ? (
									<USGPreview modulePreview={Section2} />
								) : null}
							</div>
							<div className="SECTION_3">
								{Section3.type === "Jumbotron" ? (
									<JumboTronPreview modulePreview={Section3} />
								) : Section3.type === "ProductGrid" ? (
									<ProductGridPreview modulePreview={Section3} />
								) : Section3.type === "Gallery" ? (
									<GalleryPreview modulePreview={Section3} />
								) : Section3.type === "Two_Stories" ? (
									<Two_StoryPreview modulePreview={Section3} />
								) : Section3.type === "Three_Stories" ? (
									<Three_StoryPreview modulePreview={Section3} />
								) : Section3.type === "USG" ? (
									<USGPreview modulePreview={Section3} />
								) : null}
							</div>

							<div className="SECTION_4">
								{Section4.type === "Jumbotron" ? (
									<JumboTronPreview modulePreview={Section4} />
								) : Section4.type === "ProductGrid" ? (
									<ProductGridPreview modulePreview={Section4} />
								) : Section4.type === "Gallery" ? (
									<GalleryPreview modulePreview={Section4} />
								) : Section4.type === "Two_Stories" ? (
									<Two_StoryPreview modulePreview={Section4} />
								) : Section4.type === "Three_Stories" ? (
									<Three_StoryPreview modulePreview={Section4} />
								) : Section4.type === "USG" ? (
									<USGPreview modulePreview={Section4} />
								) : Section4.type === "Email_Social" ? (
									<USGPreview modulePreview={Section4} />
								) : null}
							</div>

							<div className="SECTION_5">
								{Section5.type === "Jumbotron" ? (
									<JumboTronPreview modulePreview={Section5} />
								) : Section5.type === "ProductGrid" ? (
									<ProductGridPreview modulePreview={Section5} />
								) : Section5.type === "Gallery" ? (
									<GalleryPreview modulePreview={Section5} />
								) : Section5.type === "Two_Stories" ? (
									<Two_StoryPreview modulePreview={Section5} />
								) : Section5.type === "Three_Stories" ? (
									<Three_StoryPreview modulePreview={Section5} />
								) : Section5.type === "USG" ? (
									<USGPreview modulePreview={Section5} />
								) : Section5.type === "Email_Social" ? (
									<EmailSocialPreview modulePreview={Section5} />
								) : null}
							</div>
							<div className="SECTION_6">
								{Section6.type === "Jumbotron" ? (
									<JumboTronPreview modulePreview={Section6} />
								) : Section6.type === "ProductGrid" ? (
									<ProductGridPreview modulePreview={Section6} />
								) : Section6.type === "Gallery" ? (
									<GalleryPreview modulePreview={Section6} />
								) : Section6.type === "Two_Stories" ? (
									<Two_StoryPreview modulePreview={Section6} />
								) : Section6.type === "Three_Stories" ? (
									<Three_StoryPreview modulePreview={Section6} />
								) : Section6.type === "USG" ? (
									<USGPreview modulePreview={Section6} />
								) : Section6.type === "Email_Social" ? (
									<EmailSocialPreview modulePreview={Section6} />
								) : null}
							</div>
						</div>
					</div>
					<RetrieveHTML projectID={this.props.project.project._id} />
				</section>
			);
		}
		if (!this.props.project.modules) {
			return <h1>No modules found..</h1>;
		} else {
			return <h1>Loading....</h1>;
		}

		//
	}
}
const mapStateToProps = (state) => ({
	project: state.project
});

export default connect(mapStateToProps)(PreviewProjectVIEW);
