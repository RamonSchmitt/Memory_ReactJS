import React from 'react';
import Tile from './Tile';

class Gameboard extends React.Component {
  render() {
    return (
      <ul className="gameboard">
        {this.props.tiles.map(function(tile) {
          return <li className="tile">{tile}</li>;
          })
        }
      </ul>
    )
  }
}

export default Gameboard;
