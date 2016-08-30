import React from 'react';

class Tile extends React.Component {
  flipTile() {
    this.props.flipTile(this.props.index)
  }

  render() {
    console.log(this.props)
    return (
      <a href="#" onClick={this.flipTile.bind(this)}>
        {this.props.flip ? <img src={require('./images/game/01/' + this.props.image)} /> : <img src={require('./images/bg.gif')} /> }
      </a>
    );
  }
}

export default Tile;
