import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Two_StoriesPreview extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		let Story1 = this.props.modulePreview.stories.filter(
			(story) => Object.keys(story)[0] === "Story_1"
		)[0].Story_1;
		let Story2 = this.props.modulePreview.stories.filter(
			(story) => Object.keys(story)[0] === "Story_2"
		)[0].Story_2;
		const Story1_IMG =
			"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
            Story1.story1_ImgSRC.replace("?$staticlink$", "");
        const Story2_IMG =
            "http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
            Story2.story2_ImgSRC.replace("?$staticlink$", "");
		return (
			<div className="cs_container-crocs">
				<div className="story1 col-xs-12 col-md-6  flex_box_column">
					<a href={Story1.story1_Link}>
						<img
							className="img-responsive"
							alt={Story1.story1_ImgAlt}
                            src={Story1_IMG}
						/>
					</a>
					<div class="story_text">
                        <h3 class="cx-heavy-brand-font text-left" style={{ textSize: "20px" }}>
							{Story1.story1_Headline_Text}
						</h3>
						<p class="cx-brand-font text-left paragraph_text">
							{Story1.story1_Paragraph_Text}
						</p>
						<a
							href={Story1.story1_Link}
							className="cta_text cx-brand-font text-left">
							{Story1.story1_CTA}
						</a>
					</div>
				</div>
				<div className="story2 col-xs-12 col-md-6  flex_box_column">
					<a href={Story2.story2_Link}>
						<img
							className="img-responsive"
							alt={Story2.story2_ImgAlt}
                            src={Story2_IMG}
						/>
					</a>
					<div class="story_text">
                        <h3 class="cx-heavy-brand-font text-left" style={{ textSize: "20px" }}>
							{Story2.story2_Headline_Text}
						</h3>
						<p class="cx-brand-font text-left paragraph_text">
							{Story2.story2_Paragraph_Text}
						</p>
						<a
							href={Story2.story2_Link}
							className="cta_text cx-brand-font text-left">
							{Story2.story2_CTA}
						</a>
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
)(Two_StoriesPreview);
