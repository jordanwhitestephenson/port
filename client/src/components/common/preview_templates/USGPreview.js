import React, { Component } from "react";
import PropTypes from "prop-types";

class USGPreview extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<section
				className="preview_container cs_container-crocs  module_container flex_box_column"
				style={{ width: "100%" }}>
				<div className="text-center fancy-headline">
					<p>Tag @Crocs and #ComeAsYouAre</p>
				</div>
				<div
					className=" widget_container cs_container-crocs "
					style={{ maxWidth: "100%" }}>
                    <div className="olapic-header flex_box_column">
						<div className="olapic-carousel-subtitle">
							Help others find comfort by sharing your selfie shoefie or
							favorite Crocs photo!
						</div>
						<button
							aria-disabled="false"
							type="button"
							className="olapic-upload-link cx-button cx-button-cta">
							Upload a Photo
						</button>
					</div>
					<div
						className="js-olapic olapic-carousel"
						data-source="signal"
						data-location="pdp-top"
						data-useproduct="true"
						data-useproductcategory="true"
						data-widgets="Homepage"
					/>
				</div>
			</section>
		);
	}
}

export default USGPreview;
