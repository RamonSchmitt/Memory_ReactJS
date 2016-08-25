import React from 'react';
import Gameboard from './Gameboard';

class Tile extends React.Component {
  constructor(props) {
  super(props);
  this.state = { tiles: props.tiles };
  this.toggleFlip = this.toggleFlip.bind(this);
  }

  toggleFlip() {
    this.setState({flip: !this.state.flip});
  }

  render() {
    return (
      <a href="#" onClick={this.toggleFlip.bind(this)}>
        {this.state.flip ? <img src={require('./images/' + this.props.image)} /> : <img src={require('./images/bg.gif')} /> }
      </a>
    );
  }
}

export default Tile;
