import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ImageContainer from "./preview_components/ImageContainer";
import TextContainer from "./preview_components/TextContainer";
import PropTypes from "prop-types";

class GalleryPreview extends Component {
	state = {
		modulePreview: this.props.modulePreview
	};

	render() {
		console.log(this.props.modulePreview, "IN GALLERY PREVIEW");
		const module = this.state.modulePreview.imageSets;
		const CenterImage = module.filter((image) => image.Center)[0].Center;
		const CenterImageSRC =
			"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
			CenterImage.galleryImg_SRC.replace("?$staticlink$", "");
		const RightImage = module.filter((image) => image.Right)[0].Right;
		const RightImageSRC =
			"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
			RightImage.galleryImg_SRC.replace("?$staticlink$", "");
		const LeftImage = module.filter((image) => image.Left)[0].Left;
		const LeftImageSRC =
			"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
			LeftImage.galleryImg_SRC.replace("?$staticlink$", "");
		console.log(CenterImage, "FROM PREVIEW GALLERY");
		return (
			<div
				className="Gallery_Preview flex_box_default"
				style={{ maxWidth: "980px", margin: "auto" }}>
				<div class="col-xs-12">
					<div className="col-xs-12 col-md-3">
						<a href={LeftImage.galleryImg_Link}>
							<img
								className="img-responsive"
								src={LeftImageSRC}
								alt={LeftImage.galleryImg_Alt}
								title={LeftImage.gallerImg_Title}
							/>
						</a>
					</div>
					<div className="col-xs-12 col-md-6">
						<a href={CenterImage.galleryImg_Link}>
                            <img
                                className="img-responsive"
								src={CenterImageSRC}
								alt={CenterImage.galleryImg_Alt}
								title={CenterImage.gallerImg_Title}
							/>
						</a>
					</div>
					<div className="col-xs-12 col-md-3">
						<a href={RightImage.galleryImg_Link}>
							<img
                                className="img-responsive"
								src={RightImageSRC}
								alt={RightImage.galleryImg_Alt}
								title={RightImage.gallerImg_Title}
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
GalleryPreview.propTypes = {
	modulePreview: PropTypes.string.isRequired
};

export default GalleryPreview;
