import React from 'react';
import Tile from './Tile';

class Gameboard extends React.Component {
  render() {
    const { flipTile, tiles } = this.props
    return (
      <ul className="gameboard">
        {tiles.map((tile, index) => (
            <li className="tile" key={index}>
              <Tile { ...tile } index={index} flipTile={flipTile}/>
            </li>
        ))}
      </ul>
    );
  }
}
export default Gameboard;
