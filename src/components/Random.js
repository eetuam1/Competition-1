import React from 'react';
import '../styles.css';

class Random extends React.Component {
  render() {
    const { min, max } = this.props;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
      <div className="random-box">
        Random value between {min} and {max} {'=>'} {randomNumber}
      </div>
    );
  }
}

export default Random;
