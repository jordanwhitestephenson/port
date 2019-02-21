import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ImageContainer from "./preview_components/ImageContainer";
import ProductContainer from "./preview_components/ProductContainer";
import { func } from "prop-types";

const styles = {
	flexbox: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}
};

class ProductGridPreview extends Component {
	state = {
		modulePreview: this.props.modulePreview
	};

	render() {
		const module = this.state.modulePreview;
		const key = module.imageSets.map((key) => key);
		const ModelInfo = key.filter((photo) => photo.Model);
		const ProductInfo = key.filter((photo) => !photo.Model);

		return (
			<div style={{ maxWidth: "980px", margin: "auto" }}>
				{module.layout === "Right" ? (
					<section className="right_product_grid flex_box_default cs_container-crocs">
						<div className="PRODUCTS_CONTAINER col-xs-12 col-md-6 flex_box_default">
							{ProductInfo.map((key) => (
								<div class="product col-xs-12 col-md-6">
									{key[Object.keys(key)[0]] !== "Model" ? (
										<a href={key[Object.keys(key)[0]].Link}>
											{key[Object.keys(key)[0]].SRC.includes(
												"?$staticlink$"
											) ? (
												<img
													src={
														"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
														key[Object.keys(key)[0]].SRC.replace(
															"?$staticlink$",
															""
														)
													}
													alt={[Object.keys(key)[0]].Alt}
												/>
											) : (
												<img src={key[Object.keys(key)[0]].SRC} alt="" />
											)}
											<p className="product_description cx-brand-font text-center">
												{key[Object.keys(key)[0]].Title}
											</p>
										</a>
									) : null}
								</div>
							))}
						</div>
						<div class="MODULE_CONTAINER col-xs-12 col-md-6 flex_box_default">
							{ModelInfo.map((key) => (
								<div class="model col-xs-12">
									<a href={key[Object.keys(key)[0]].Link}>
										{key[Object.keys(key)[0]].SRC.includes("?$staticlink$") ? (
											<img
												src={
													"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
													key[Object.keys(key)[0]].SRC.replace(
														"?$staticlink$",
														""
													)
												}
												alt={[Object.keys(key)[0]].Alt}
											/>
										) : (
											<img src={key[Object.keys(key)[0]].SRC} alt="" />
										)}
									</a>
								</div>
							))}
						</div>
					</section>
				) : (
					<section className="left_product_grid flex_box_default cs_container-crocs">
							<div class="MODULE_CONTAINER col-xs-12 col-md-6 flex_box_default">
							{ModelInfo.map((key) => (
								<div class="model col-xs-12">
									<a href={key[Object.keys(key)[0]].Link}>
										{key[Object.keys(key)[0]].SRC.includes("?$staticlink$") ? (
											<img
												src={
													"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
													key[Object.keys(key)[0]].SRC.replace(
														"?$staticlink$",
														""
													)
												}
												alt={[Object.keys(key)[0]].Alt}
											/>
										) : (
											<img src={key[Object.keys(key)[0]].SRC} alt="" />
										)}
									</a>
								</div>
							))}
						</div>
						<div className="PRODUCTS_CONTAINER col-xs-12 col-md-6 flex_box_default">
							{ProductInfo.map((key) => (
								<div class="product col-xs-12 col-md-6">
									{key[Object.keys(key)[0]] !== "Model" ? (
										<a href={key[Object.keys(key)[0]].Link}>
											{key[Object.keys(key)[0]].SRC.includes(
												"?$staticlink$"
											) ? (
												<img
													src={
														"http://staging-na-crox.demandware.net/on/demandware.static/-/Sites-crocs_us-Library/default/" +
														key[Object.keys(key)[0]].SRC.replace(
															"?$staticlink$",
															""
														)
													}
													alt={[Object.keys(key)[0]].Alt}
												/>
											) : (
												<img src={key[Object.keys(key)[0]].SRC} alt="" />
											)}
											<p className="product_description cx-brand-font text-center">
												{key[Object.keys(key)[0]].Title}
											</p>
										</a>
									) : null}
								</div>
							))}
						</div>
					</section>
				)}
			</div>
		);
	}
}
export default ProductGridPreview;
