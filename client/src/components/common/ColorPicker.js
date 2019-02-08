import React from 'react';
import { TwitterPicker } from 'react-color';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class ColorPicker extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color, event) => {
    this.setState({ background: color.hex });
    console.log(color)
  };


  render() {
    return <TwitterPicker onChangeComplete={this.handleChangeComplete} color = {this.state.background} />;
  }
}


const mapStateToProps = state => ({
	background: state.background,
});

export default connect(
	mapStateToProps, {})(withRouter(ColorPicker));