import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-Empty";

import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import PreviewIcon from "@material-ui/icons/PlayArrow";
import PreviewProjectVIEW from "../preview-project/PreviewProjectVIEW";

class ProfileAbout extends Component {
	render() {
		const { profile } = this.props;

		// Get first name
		const firstName = profile.user.name.trim().split(" ")[0];

		// Skill List
		const skills = profile.projects.map((project, index) => (
			<div key={index} className="p-3">
		
				<Link
					exact
					to={{
						pathname: "/preview-project",
						hash: project._id
					}}
          activeClassName="preview_container">
					<PreviewIcon />
					<Typography>Preview</Typography>
				</Link>
			</div>
		));

		const projects = profile.projects.map((project, index) => project);

		return (
			<div className="row">
				<div className="col-md-12">
					<div className="card card-body bg-light mb-3">
						<h3 className="text-center text-info">{firstName}'s Bio</h3>
						<p className="lead">
							{isEmpty(profile.bio) ? (
								<span>{firstName} does not have a bio</span>
							) : (
								<span>{profile.bio}</span>
							)}
						</p>
						<hr />
						<h3 className="text-center text-info">Projects</h3>
						<div className="row">
							<div className="d-flex flex-wrap justify-content-center align-items-center">
								{skills}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ProfileAbout.propTypes = {
	profile: PropTypes.object.isRequired
};

export default ProfileAbout;
