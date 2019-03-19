import React, { Component } from "react";
import PropTypes from "prop-types";

class StoryHeadlinePreview extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		var headline = this.props.modulePreview.storyInfo
			.storyHeadline_HeadlineText;
        var paragraph = this.props.modulePreview.storyInfo.storyHeadline_ParagraphText;
		console.log(
			this.props.modulePreview.storyInfo,
			" this.props.modulePreview.storyInfo"
		);
		return (
			<div className="cs_container-fluid">
				<div className="padding-crocs-stories">
					<h2 className="cx-heavy-brand-font text-center text-uppercase crocs_story_headline">
						{headline}
					</h2>
					<p className="cx-brand-font text-center">{paragraph}</p>
				</div>
			</div>
		);
	}
}

export default StoryHeadlinePreview;
