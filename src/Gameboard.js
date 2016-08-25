import React from 'react';
import Tile from './Tile';

class Gameboard extends React.Component {
  constructor(props) {
  super(props);

    this.state = {
      tiles: props.tiles,
      players: props.players
    };
  }

// Fisher Yates Algorithm
  shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  render() {
      return (
        <ul className="gameboard">
          {this.state.tiles.map((tile, index) => (
              <li className="tile" key={index}>
                {console.log(tile.image)}
                <Tile image={tile.image}/>
              </li>
          ))}
        </ul>
      );
  }
}
export default Gameboard;
