import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Three_StoriesPreview extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		console.log(this.props, "NO PROPS>");
		let Story1 = this.props.modulePreview.stories.filter(
			(story) => Object.keys(story)[0] === "Story_1"
		)[0].Story_1;
		let Story2 = this.props.modulePreview.stories.filter(
			(story) => Object.keys(story)[0] === "Story_2"
		)[0].Story_2;
		let Story3 = this.props.modulePreview.stories.filter(
			(story) => Object.keys(story)[0] === "Story_3"
		)[0].Story_3;
		const Story1_IMG =
			"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
			Story1.story1_ImgSRC.replace("?$staticlink$", "");
		const Story2_IMG =
			"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
			Story2.story2_ImgSRC.replace("?$staticlink$", "");
		const Story3_IMG =
			"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
			Story3.story3_ImgSRC.replace("?$staticlink$", "");
		return (
			<div style={{ width: "100%" }}>
				<div className="story1 col-xs-12 col-md-4  flex_box_column">
					<a href={Story1.story1_Link}>
						<img
							className="img-responsive mobile_image_full_screen"
							alt={Story1.story1_ImgAlt}
							src={Story1_IMG}
						/>
					</a>
					<div className="story_text">
						<h3
							className="cx-heavy-brand-font text-left"
							style={{ fontSize: "20px" }}>
							{Story1.story1_Headline_Text}
						</h3>
						<p className="cx-brand-font text-left paragraph_text">
							{Story1.story1_Paragraph_Text}
						</p>
						<div className="text-left">
							<a
								href={Story1.story1_Link}
								className="cta_text cx-brand-font text-left">
								{Story1.story1_CTA}
							</a>
						</div>
					</div>
				</div>
				<div className="story2 col-xs-12 col-md-4  flex_box_column">
					<a href={Story2.story2_Link}>
						<img
							className="img-responsive"
							alt={Story2.story2_ImgAlt}
							src={Story2_IMG}
						/>
					</a>
					<div class="story_text">
						<h3
							className="cx-heavy-brand-font text-left"
							style={{ fontSize: "20px" }}>
							{Story2.story2_Headline_Text}
						</h3>
						<p class="cx-brand-font text-left paragraph_text">
							{Story2.story2_Paragraph_Text}
						</p>
						<div className="text-left">
							<a href={Story2.story2_Link} className="cta_text cx-brand-font">
								{Story2.story2_CTA}
							</a>
						</div>
					</div>
				</div>

				<div className="story3 col-xs-12 col-md-4  flex_box_column">
					<a href={Story3.story3_Link}>
						<img
							className="img-responsive mobile_image_full_screen"
							alt={Story3.story3_ImgAlt}
							src={Story3_IMG}
						/>
					</a>
					<div className="story_text">
						<h3
							className="cx-heavy-brand-font text-left"
							style={{ fontSize: "20px" }}>
							{Story3.story3_Headline_Text}
						</h3>
						<p className="cx-brand-font text-left paragraph_text">
							{Story3.story3_Paragraph_Text}
						</p>
						<div className="text-left">
							<a href={Story3.story3_Link} className="cta_text cx-brand-font">
								{Story3.story3_CTA}
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Three_StoriesPreview);
