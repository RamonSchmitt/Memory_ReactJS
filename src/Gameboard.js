import React from 'react';
import Tile from './Tile'

class Gameboard extends React.Component {
  constructor() {
  super();

  var tiles = [
            { tileid: 1, pair: false, image: "01.gif" },
            { tileid: 1, pair: false, image: "01.gif" },
            { tileid: 2, pair: false, image: "02.gif" },
            { tileid: 2, pair: false, image: "02.gif" },
            { tileid: 3, pair: false, image: "03.gif" },
            { tileid: 3, pair: false, image: "03.gif" },
            { tileid: 4, pair: false, image: "04.gif" },
            { tileid: 4, pair: false, image: "04.gif" },
            { tileid: 5, pair: false, image: "05.gif" },
            { tileid: 5, pair: false, image: "05.gif" },
            { tileid: 6, pair: false, image: "06.gif" },
            { tileid: 6, pair: false, image: "06.gif" },
            { tileid: 7, pair: false, image: "07.gif" },
            { tileid: 7, pair: false, image: "07.gif" },
            { tileid: 8, pair: false, image: "08.gif" },
            { tileid: 8, pair: false, image: "08.gif" },
            { tileid: 9, pair: false, image: "09.gif" },
            { tileid: 9, pair: false, image: "09.gif" },
            { tileid: 10, pair: false, image: "10.gif" },
            { tileid: 10, pair: false, image: "10.gif" },
            { tileid: 11, pair: false, image: "11.gif" },
            { tileid: 11, pair: false, image: "11.gif" },
            { tileid: 12, pair: false, image: "12.gif" },
            { tileid: 12, pair: false, image: "12.gif" },
            { tileid: 13, pair: false, image: "13.gif" },
            { tileid: 13, pair: false, image: "13.gif" },
            { tileid: 14, pair: false, image: "14.gif" },
            { tileid: 14, pair: false, image: "14.gif" },
            { tileid: 15, pair: false, image: "15.gif" },
            { tileid: 15, pair: false, image: "15.gif" },
            { tileid: 16, pair: false, image: "16.gif" },
            { tileid: 16, pair: false, image: "16.gif" },
            { tileid: 17, pair: false, image: "17.gif" },
            { tileid: 17, pair: false, image: "17.gif" },
            { tileid: 18, pair: false, image: "18.gif" },
            { tileid: 18, pair: false, image: "18.gif" },
            { tileid: 19, pair: false, image: "19.gif" },
            { tileid: 19, pair: false, image: "19.gif" },
            { tileid: 20, pair: false, image: "20.gif" },
            { tileid: 20, pair: false, image: "20.gif" },
            { tileid: 21, pair: false, image: "21.gif" },
            { tileid: 21, pair: false, image: "21.gif" },
            { tileid: 22, pair: false, image: "22.gif" },
            { tileid: 22, pair: false, image: "22.gif" },
            { tileid: 23, pair: false, image: "23.gif" },
            { tileid: 23, pair: false, image: "23.gif" },
            { tileid: 24, pair: false, image: "24.gif" },
            { tileid: 24, pair: false, image: "24.gif" },
            { tileid: 25, pair: false, image: "25.gif" },
            { tileid: 25, pair: false, image: "25.gif" },
            { tileid: 26, pair: false, image: "26.gif" },
            { tileid: 26, pair: false, image: "26.gif" },
            { tileid: 27, pair: false, image: "27.gif" },
            { tileid: 27, pair: false, image: "27.gif" },
            { tileid: 28, pair: false, image: "28.gif" },
            { tileid: 28, pair: false, image: "28.gif" },
            { tileid: 29, pair: false, image: "29.gif" },
            { tileid: 29, pair: false, image: "29.gif" },
            { tileid: 30, pair: false, image: "30.gif" },
            { tileid: 30, pair: false, image: "30.gif" },
            { tileid: 31, pair: false, image: "31.gif" },
            { tileid: 31, pair: false, image: "31.gif" },
            { tileid: 32, pair: false, image: "32.gif" },
            { tileid: 32, pair: false, image: "32.gif" }
          ];

    this.state = { tiles };
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
                {console.log(tile.tileid)}
                <Tile />
              </li>
          ))}
        </ul>
      );
  }
}
export default Gameboard;
