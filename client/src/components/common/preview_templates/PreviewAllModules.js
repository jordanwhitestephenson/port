import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProject } from '../../../actions/profileActions'
import ProductGridPreview from '../preview_templates/ProductGridPreview'

export class PreviewAllModules extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      openingParagraph: "",
      heading: "",
      description: "",
      errors: {},
      project: "",
     
    };
  }
  static propTypes = {
    prop: PropTypes
  };
    
//   imageSets:
//   image1: {SRC: "205166_1AS_Crocband_Gallery_Clog_main.png?$staticlink$", link: "sdf", alt: "Crocband™ Platform Clog"}
//   image2: {SRC: "205330_97A_Crocband_Graphic_III_Clog_main.png?$staticlink$", link: "sdf", alt: "Crocband™ Graphic Clog"}
//   image3: {SRC: "205166_1AS_Crocband_Gallery_Clog_main.png?$staticlink$", link: "sdf", alt: "Crocband™ Gallery Clog"}
//   image4: {SRC: "205338_001_Leigh_Wedge_Chelsea_Boot_W_main.png?$staticlink$", link: "sdf", alt: "Leigh Wedge Chelsea Boot"}
//   __proto__: Object
//   layout: ""
//   location: "Section1"
//   main_image: {SRC: "MODEL_TEST.png?$staticlink$", link: "", alt: ""}
//   type: "ProductGrid"
//   __proto__: Object

  render() {

      const ProductGridProps = this.props.moduleArray.filter(type => type.type === "ProductGrid")
      console.log(ProductGridProps)
      return <div>
          {this.props.moduleArray.map(module =>
              (module.location === "Section1" ?
                //   (module.type === "Jumbotron" ? <div>{module.location}</div> : null)
                //   : null)
                  (module.type === "Jumbotron" ? <div>{module.location}</div> :
                  "ProductGrid" ? <ProductGridPreview modulePreview={ProductGridProps} /> : null)
              : null)
              
                 
              
            )}
              
    </div>;
  }
}





export default PreviewAllModules
