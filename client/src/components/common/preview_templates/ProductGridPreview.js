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
		console.log(module, "******this is the props I need to send*****");
		const objKeys =module.imageSets.map(key =>
				Object.keys(key).map(image => (
					key.image
		)))
		console.log(objKeys);

		return (
			<div style={{ maxWidth: "980px", margin: "auto" }}>
				{module.layout === "Left" ? (
					<section className="left_product_grid cs_container-crocs">
						{/* <div className="PRODUCTS_CONTAINER">
							{module.imageSets.map((key) =>
								Object.keys(key).map((image) => (
									<a href="">
										<img src={key.image.SRC} alt="" />
									</a>
								)) */}
							)}
							<div class="product col-xs-12 col-md-4">
								<a href="">
									<img src="" alt="" />
								</a>
							</div>
							<div class="product col-xs-12 col-md-4">
								<a href="">
									<img src="" alt="" />
								</a>
							</div>
							<div class="product col-xs-12 col-md-4">
								<a href="">
									<img src="" alt="" />
								</a>
							</div>
							<div class="product col-xs-12 col-md-4">
								<a href="">
									<img src="" alt="" />
								</a>
							</div>
						</div>
						<div class="MODULE_CONTAINER">
							<a href="">
								<img src="" alt="" title="" />
							</a>
						</div>
					</section>
				) : null}
			</div>
		);
	}
}
export default ProductGridPreview;
