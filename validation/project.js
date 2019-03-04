const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProjectInput(data) {
	let errors_object = {};
	data.type = !isEmpty(data.type) ? data.type : "";

	if (data.type === "Jumbotron") {
		data.main_image.SRC = !isEmpty(data.main_image.SRC)
			? data.main_image.SRC
			: "";
		data.main_image.SRC = !isEmpty(data.main_image.SRC)
			? data.main_image.SRC
			: "";
		data.main_image.link = !isEmpty(data.main_image.link)
			? data.main_image.link
			: "";
		data.main_image.alt = !isEmpty(data.main_image.alt)
			? data.main_image.alt
			: "";
    data.paragraphText = !isEmpty(data.paragraphText) ? data.paragraphText : "";
    data.textColor = !isEmpty(data.textColor) ? data.textColor : "";
		data.backgroundColor = !isEmpty(data.backgroundColor)
			? data.backgroundColor
			: "";
		data.headline = !isEmpty(data.headline) ? data.headline : "";
		if (!data.layout === "no_image") {
			if (Validator.isEmpty(data.main_image.SRC)) {
				errors_object.main_image_SRC = "Image is required";
			}
			if (Validator.isEmpty(data.main_image.link)) {
				errors_object.main_image_link = "Image is required";
			}
			if (Validator.isEmpty(data.main_image.alt)) {
				errors_object.main_image_alt = "Image ALT is required";
			}
		}
		if (Validator.isEmpty(data.layout)) {
			errors_object.layout = "Please select a layout";
		}
		if (Validator.isEmpty(data.paragraphText)) {
			errors_object.paragraphText = "Please add paragraph text";
		}
		if (Validator.isEmpty(data.backgroundColor)) {
			errors_object.backgroundColor = "Please select a background color";
		}
		if (Validator.isEmpty(data.headline)) {
			errors_object.headline = "Jumbotron headline is required";
    }
    if (Validator.isEmpty(data.textColor)) {
      errors_object.textColor = "Please input a text color";
    }

	}
	if (data.type === "ProductGrid") {
		if (Validator.isEmpty(data.imageSets)) {
			errors_object.imageSets = "imageSets is required!";
		}
		
	}

	return {
		errors_object,
		isValid: isEmpty(errors_object)
	};
};
