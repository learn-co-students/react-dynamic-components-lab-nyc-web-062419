import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    if (this.props) {
      if (this.props.opacity > 0.2) {
        let newOpacity = this.props.opacity - 0.1
        let newOpacityStyle = newOpacity + 0.1
        const divStyle = {
          opacity: newOpacityStyle
        };
        return (
          <div style={divStyle}>
            <ColorBox opacity={newOpacity} />
          </div>
        );
      } else {
        return null;
      }
    }
  }
  
}