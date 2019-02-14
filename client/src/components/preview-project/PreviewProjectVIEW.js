import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class PreviewProjectVIEW extends Component {
	static propTypes = {
		prop: PropTypes
	};
	constructor(props) {
		super(props);
		this.state = {
			project: this.props.project.PreviewProjectVIEW
		};
	}

	render() {
		var modulesArray;
		var section1Array;
		var section2Array;
		var previewSRCSection1;
		var previewSRCSection2;
		var previewSRCSection2Product1;
		var previewSRCSection2Product2;
		var previewSRCSection2Product3;
		var previewSRCSection2Product4;
		if (this.props.project.project) {
			modulesArray = this.props.project.project.modules;
			section1Array = modulesArray.filter(
				(location) => location.location === "Section1"
			)[0];
			section2Array = modulesArray.filter(
				(location) => location.location === "Section2"
			)[0];
			var originalSRCSection1 = section1Array.main_image.SRC;
			var originalSRCSection2 = section2Array.main_image.SRC;

			var updateSRCSection1 =
				"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
				originalSRCSection1.replace("?$staticlink$", "");
			previewSRCSection1 = updateSRCSection1;
			var updateSRCSection2 =
				"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
				originalSRCSection2.replace("?$staticlink$", "");
			previewSRCSection2 = updateSRCSection2;
			previewSRCSection2Product1 =
				"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
				section2Array.imageSets.image1.SRC.replace("?$staticlink$", "");
			previewSRCSection2Product2 =
				"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
				section2Array.imageSets.image2.SRC.replace("?$staticlink$", "");
			previewSRCSection2Product3 =
				"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
				section2Array.imageSets.image3.SRC.replace("?$staticlink$", "");
			previewSRCSection2Product4 =
				"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
				section2Array.imageSets.image4.SRC.replace("?$staticlink$", "");
		}

		console.log(section2Array);
		return (
			<div>
				{this.props.project.project ? (
					<div className="cs_container-fluid">
						<div
							className="Section_1_PREVIEW cs_container-crocs"
							style={{ backgroundColor: section1Array.backgroundColor }}>
							{section1Array.layout === "no_image" ? (
								<h2 style={{ color: section1Array.textColor }}>
									{section1Array.headline}
								</h2>
							) : (
								<div>
									<div className="col-xs-12 col-md-6">
										<img
											src={previewSRCSection1}
											alt={section1Array.main_image.alt}
										/>
									</div>
									<div className="col-xs-12 col-md-6">
										<h2> {section1Array.headline}</h2>
										<p> {section1Array.paragraphText} </p>
										{section1Array.button ? (
											<a href={section1Array}>
												<button className="cx-button">
													{section1Array.buttonInfo.text}
												</button>
											</a>
										) : null}
									</div>
								</div>
							)}
						</div>
						{section2Array.type === "ProductGrid" ? (
							<div className="Section_2_Preview  module_container_spacing cs_container-crocs flex_box_default">
								{section2Array.layout === "Right" ? (
									<div className="Grid_Container right_layout flex_box_default ">
										<div className="col-xs-12 col-sm-6 flex_box_space_around">
											<div class="col-xs-12 col-sm-6 ">
												<a href={section2Array.imageSets.image1.link}>
													<img
														className="img-responsive"
														src={previewSRCSection2Product1}
														alt={section2Array.imageSets.image1.src}
													/>
													<p class="cx-brand-font text-center black_text">
														{section2Array.imageSets.image1.alt}
													</p>
												</a>
											</div>
											<div class="col-xs-12 col-sm-6">
												<a href={section2Array.imageSets.image2.link}>
													<img
														className="img-responsive"
														src={previewSRCSection2Product2}
														alt={section2Array.imageSets.image2.src}
													/>
													<p class="cx-brand-font text-center black_text">
														{section2Array.imageSets.image2.alt}
													</p>
												</a>
											</div>
											<div class="col-xs-12 col-sm-6 ">
												<a href={section2Array.imageSets.image3.link}>
													<img
														className="img-responsive"
														src={previewSRCSection2Product3}
														alt={section2Array.imageSets.image3.src}
													/>
													<p class="cx-brand-font text-center black_text">
														{section2Array.imageSets.image3.alt}
													</p>
												</a>
											</div>
											<div class="col-xs-12 col-sm-6">
												<a href={section2Array.imageSets.image4.link}>
													<img
														className="img-responsive"
														src={previewSRCSection2Product4}
														alt={section2Array.imageSets.image4.src}
													/>
													<p class="cx-brand-font text-center black_text">
														{section2Array.imageSets.image4.alt}
													</p>
												</a>
											</div>
										</div>

										<div className="Model_Container col-xs-12 col-md-6">
											<a href={section2Array.main_image.link}>
                        <img
                          src={previewSRCSection2}
                          alt={section2Array.main_image.alt}
                          className = "img-responsive"
												/>
											</a>
										</div>
									</div>
								) : (
									<div className="Grid_Container left_layout flex_box_default col-xs-12">
										<div className="col-xs-12 col-sm-6 flex_box_space_around">
											<div className="Model_Container col-xs-12 col-md-6">
												<a href={section2Array.main_image.link}>
													<img
														src={previewSRCSection2}
														className="img-responsive"
														alt={section2Array.main_image.alt}
													/>
												</a>
											</div>

											<div class="col-xs-12 col-sm-6 ">
												<a href={section2Array.imageSets.image1.link}>
													<img
														className="img-responsive"
														src={previewSRCSection2Product1}
														alt={section2Array.imageSets.image1.src}
													/>
												</a>
											</div>
											<div class="col-xs-12 col-sm-6">
												<a href={section2Array.imageSets.image2.link}>
													<img
														className="img-responsive"
														src={previewSRCSection2Product2}
														alt={section2Array.imageSets.image2.src}
													/>
												</a>
											</div>
											<div class="col-xs-12 col-sm-6 ">
												<a href={section2Array.imageSets.image3.link}>
													<img
														className="img-responsive"
														src={previewSRCSection2Product3}
														alt={section2Array.imageSets.image3.src}
													/>
												</a>
											</div>
											<div class="col-xs-12 col-sm-6">
												<a href={section2Array.imageSets.image4.link}>
													<img
														className="img-responsive"
														src={previewSRCSection2Product4}
														alt={section2Array.imageSets.image4.src}
													/>
												</a>
											</div>
										</div>
									</div>
								)}
							</div>
						) : (
							<div>NOT PRODUCT GRID</div>
						)}
					</div>
				) : (
					<div>Loading...</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PreviewProjectVIEW);
