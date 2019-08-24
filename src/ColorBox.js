import React, { Component } from "react";

export default class ColorBox extends Component {
  render() {
    if (this.props.opacity > 0.2) {
      const newVal = this.props.opacity - 0.1;
      return (
        <div class="color-box" style={{ opacity: this.props.opacity }}>
          <ColorBox opacity={newVal} />
        </div>
      );
    } else {
      return null;
    }
  }
}
