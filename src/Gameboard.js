import React from 'react';
import Tile from './Tile';

class Gameboard extends React.Component {

// Fisher Yates
  shuffle(tiles) {
    var m = tiles.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = tiles[m];
      tiles[m] = tiles[i];
      tiles[i] = t;
    }

    return tilesShuffled;
  }

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
