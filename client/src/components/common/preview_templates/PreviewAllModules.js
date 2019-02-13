import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProject } from '../../../actions/profileActions'
import ProductGridPreview from '../preview_templates/ProductGridPreview'
import JumbotronPreview from '../preview_templates/JumboTronPreview'

export class PreviewAllModules extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      openingParagraph: "",
      icon: "",
      heading: "",
      description: "",
      errors: {},
      project: "",
     
    };
  }
  static propTypes = {
    prop: PropTypes
  };
    


  render() {

      const ProductGridProps = this.props.moduleArray.filter(type => type.type === "ProductGrid")[0]
      const JumboTronProps =  this.props.moduleArray.filter(type => type.type === "Jumbotron")[0]
      console.log(this.props.moduleArray)
      return <div>
             {this.props.moduleArray.map(module =>
            (module.location === "Section1" && module.type === "Jumbotron" ? <JumbotronPreview modulePreview={JumboTronProps} /> : module.location === "Section1" && module.type === "ProductGrid" ? <ProductGridPreview modulePreview={ProductGridProps} /> : null)
          )}
            {this.props.moduleArray.map(module =>
             (module.location === "Section2" && module.type === "Jumbotron" ? <JumbotronPreview modulePreview={JumboTronProps}/> : module.location === "Section2" && module.type === "ProductGrid" ? <ProductGridPreview modulePreview={ProductGridProps} /> : null)
            )}
              
    </div>;
  }
}





export default PreviewAllModules
