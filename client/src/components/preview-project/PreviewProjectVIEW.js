import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import JumboTronPreview from "../common/preview_templates/JumboTronPreview";
import ProductGridPreview from "../common/preview_templates/ProductGridPreview";
import GalleryPreview from "../common/preview_templates/GalleryPreview";
import SimpleModal from '../common/Modal'

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
		}
	}

	render() {
		console.log(this.props.project, 'PRPKE')
		if (this.state.modules.length > 0) {
			const Section1 = this.state.Section1;
			const Section2 = this.state.Section2;
			const Section3 = this.state.Section3;
			const Section4 = this.state.Section4;
			
			return (
				<section>
					<a className="btn btn-light" href="/dashboard">
						Go Back
					</a>

					<div className="parentDiv">
						<div className="cs_container-crocs">
							<div className="SECTION_1">
								{Section1.type === "Jumbotron" ? (
									<JumboTronPreview modulePreview={Section1} />
								) : Section1.type === "ProductGrid" ? (
									<ProductGridPreview modulePreview={Section1} />
								) : Section1.type === "Gallery" ? (
									<GalleryPreview modulePreview={Section1} />
								) : null}
							</div>

							<div className="SECTION_2">
								{Section2.type === "Jumbotron" ? (
									<JumboTronPreview modulePreview={Section2} />
								) : Section2.type === "ProductGrid" ? (
									<ProductGridPreview modulePreview={Section2} />
								) : Section2.type === "Gallery" ? (
									<GalleryPreview modulePreview={Section2} />
								) : null}
							</div>
							<div className="SECTION_3">
								{Section3.type === "Jumbotron" ? (
									<JumboTronPreview modulePreview={Section3} />
								) : Section3.type === "ProductGrid" ? (
									<ProductGridPreview modulePreview={Section3} />
								) : Section3.type === "Gallery" ? (
									<GalleryPreview modulePreview={Section3} />
								) : null}
							</div>
						</div>
					</div>
					<SimpleModal projectID={this.props.project.project._id}/>
				</section>
			);
		}
		if (!this.props.project.modules) {
			return <h1>No modules found..</h1>;
		}
		else {
			return <h1>Loading....</h1>;
		}

		//
	}
}
const mapStateToProps = (state) => ({
	project: state.project
});

export default connect(mapStateToProps)(PreviewProjectVIEW);
