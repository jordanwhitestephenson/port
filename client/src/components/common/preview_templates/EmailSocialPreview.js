import React, { Component } from "react";
import PropTypes from "prop-types";

class EmailSocialPreview extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<div
				className="moduleSocial_mock  module_container flex_box_default"
				style={{ marginBottom: "40px", marginTop: "30px" }}>
				<div className="col-xs-12 padding-0 col-lg-12 flex_box_default gray_container">
					<div
						className="social_media_container flex_box_column col-xs-12 col-md-5 padding-0"
						style={{ backgroundColor: "#e1e1e1" }}>
						<h4 className="text-center text-uppercase cx-heavy-brand-font">
							Stay Connected
						</h4>
						<div className="icons flex_box_default">
							<a href="https://www.facebook.com/Crocs/" className="icon">
								<img
									src="http://staging-na-crox.demandware.net/on/demandware.static/-/Sites/default/Facebook_Crocs.png"
									className="img-responsive"
									alt="Crocs Facebook"
								/>
							</a>
							<a href="https://www.instagram.com/crocs/?hl=en" className="icon">
								<img
									src="http://staging-na-crox.demandware.net/on/demandware.static/-/Sites/default/Instagram_Crocs.png"
									className="img-responsive "
									alt="Crocs Instagram"
								/>
							</a>
							<a href="https://twitter.com/Crocs" className="icon">
								<img
									src="http://staging-na-crox.demandware.net/on/demandware.static/-/Sites/default/Twitter_Crocs.png"
									className="img-responsive"
									alt="Crocs Twitter"
								/>
							</a>
						</div>
					</div>
					<div
						className="social_media_container flex_box_row col-xs-12 col-md-5 padding-0"
						style={{ backgroundColor: "#e1e1e1" }}>
						<div className="flex_box_column col-xs-12">
							<h4 className="text-center text-uppercase cx-heavy-brand-font">
								So many Stories!
							</h4>
							<p
								className="text-center cx-brand-font paragraph_text"
								id="replaceText">
								Sign up for more original stories and
								<br /> the hottest content from Crocs.
							</p>
							<div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-0">
								<div
									className="footer-email-signup"
									style={{ marginBottom: "0px", marginTop: "0px" }}>
									<form id="storiesEmail" className="email-signup-form flex_box_default">
										<label for="StoriesEmailField" className="sr-only">
											Enter your email address
										</label>
										<input
											id="StoriesEmailField"
											className="email"
                                            type="text"
                                            style = {{height: "35px", width: "80%"}}
											placeholder="Enter your Email"
											title="Enter your Email"
											autocomplete="off"
											aria-labelledby="newsletterFooterEmailLabel"
										/>
										<div className="feedbackStories" />
										<button
                                            className="submitBtn storiesSubmit cx-brand-font"
                                            style = {{height: "35px"}}
											id="storiesSubmit"
											type="submit">
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default EmailSocialPreview;
