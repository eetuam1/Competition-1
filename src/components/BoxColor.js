import React from 'react';
import './BoxColor.css';

class BoxColor extends React.Component {
  render() {
    const { r, g, b } = this.props;
    const colorStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
    };

    let line1 = null;
    let line2 = null;

    if (r === 255 && g === 0 && b === 0) {
      line1 = (
        <div className='boxcolor-box' style={colorStyle}>
          rgb: ({r}, {g}, {b}) 
          <br/>#ff0000
        </div>
      );
    } else if (r === 128 && g === 255 && b === 0) {
      line2 = (
        <div className='boxcolor-boxs' style={colorStyle}>
          rgb: ({r}, {g}, {b}) 
          <br/>#80ff00
        </div>
      );
    }

    return (
      <div>
        {line1}
        {line2}
      </div>
    );
  }
}

export default BoxColor;
