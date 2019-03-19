import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ImageContainer from "./preview_components/ImageContainer";
import TextContainer from "./preview_components/TextContainer";
import PropTypes from "prop-types";
import { ADD_MODULE } from "../../../actions/types";

class JumboTronPreview extends Component {
	state = {
		modulePreview: ""
	};
	componentWillMount(props) {
		this.setState({
			modulePreview: this.props.modulePreview
		})
	}
	render() {
		const module = this.props.modulePreview;

		return (
			<div className="">
				{module.layout === "Left" ? (
					<div
						className="module_container jumboTron cs_container-fluid flex_box_default background_colored_div"
						style={{ margin: "auto", background: `${module.backgroundColor}` }}
						modulename={module.type}>
						<div
							className="col-xs-12 col-sm-6"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}>
							<ImageContainer modulePreview={module} />
						</div>
						<div
							className="col-xs-12 col-md-6"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}>
							<TextContainer
								textBoxBackground={module.textBoxBackground}
								modulePreview={module}
							/>
						</div>
					</div>
				) : module.layout === "Right" ? (
					<div
						className="module_container jumboTron cs_container-fluid flex_box_default background_colored_div"
						modulename={module.type}
						style={{ background: `${module.backgroundColor}` }}>
						<div
							className="col-xs-12 col-sm-6"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}>
							<TextContainer
								textBoxBackground={module.textBoxBackground}
								modulePreview={module}
							/>
						</div>
						<div
							className="col-xs-12 col-sm-6"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}>
							<ImageContainer modulePreview={module} />
						</div>
					</div>
				) : (
					<div
						className="module_container jumboTron cs_container-fluid flex_box_default background_colored_div"
						modulename={module.type}
						style={{ background: `${module.backgroundColor}` }}>
						<div
							className="col-xs-12"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}>
							<TextContainer modulePreview={module} />
						</div>
					</div>
				)}
			</div>
		);
	}
}
JumboTronPreview.propTypes = {
	modulePreview: PropTypes.object.isRequired
};

export default JumboTronPreview;
