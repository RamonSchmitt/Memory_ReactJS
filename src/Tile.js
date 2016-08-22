import React from 'react';
import Gameboard from './Gameboard';

class Tile extends React.Component {
  constructor() {
  super();
  this.state = { flip: true };

  }

  toggleFlip() {
    this.setState({flip: !this.state.flip});
  }

  render() {
    return (
      <a href="#" onClick={this.toggleFlip.bind(this)}>
        { this.state.flip ? <img src={require('./images/bg.gif')} /> : "open" }
      </a>
    );
  }
}

export default Tile;
