import React from 'react';
import './BoxColor.css';

class BoxColor extends React.Component {
  render() {
    const { r, g, b } = this.props;
    const colorStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
    };

    return (
      <div>
      <div className='boxcolor-box' style={colorStyle}>
        rgb: ({r}, {g}, {b}) 
        <br/>#ff0000
      </div>
      <div className='boxcolor-boxs' style={colorStyle}>
      rgb: ({r}, {g}, {b}) 
      <br/>#80ff00
    </div>
    </div>
    );
  }
}



export default BoxColor;