import React from 'react';

class Gameboard extends React.Component {
  constructor() {
  super();


  const tiles = [
            { tileid: 1, flip: false, pair: false },
            { tileid: 1, flip: false, pair: false },
            { tileid: 2, flip: false, pair: false },
            { tileid: 2, flip: false, pair: false },
            { tileid: 3, flip: false, pair: false },
            { tileid: 3, flip: false, pair: false },
            { tileid: 4, flip: false, pair: false },
            { tileid: 4, flip: false, pair: false },
            { tileid: 5, flip: false, pair: false },
            { tileid: 5, flip: false, pair: false },
            { tileid: 6, flip: false, pair: false },
            { tileid: 6, flip: false, pair: false },
            { tileid: 7, flip: false, pair: false },
            { tileid: 7, flip: false, pair: false },
            { tileid: 8, flip: false, pair: false },
            { tileid: 8, flip: false, pair: false },
            { tileid: 9, flip: false, pair: false },
            { tileid: 9, flip: false, pair: false },
            { tileid: 10, flip: false, pair: false },
            { tileid: 10, flip: false, pair: false },
            { tileid: 11, flip: false, pair: false },
            { tileid: 11, flip: false, pair: false },
            { tileid: 12, flip: false, pair: false },
            { tileid: 12, flip: false, pair: false },
            { tileid: 13, flip: false, pair: false },
            { tileid: 13, flip: false, pair: false },
            { tileid: 14, flip: false, pair: false },
            { tileid: 14, flip: false, pair: false },
            { tileid: 15, flip: false, pair: false },
            { tileid: 15, flip: false, pair: false },
            { tileid: 16, flip: false, pair: false },
            { tileid: 16, flip: false, pair: false },
            { tileid: 17, flip: false, pair: false },
            { tileid: 17, flip: false, pair: false },
            { tileid: 18, flip: false, pair: false },
            { tileid: 18, flip: false, pair: false },
            { tileid: 19, flip: false, pair: false },
            { tileid: 19, flip: false, pair: false },
            { tileid: 20, flip: false, pair: false },
            { tileid: 20, flip: false, pair: false },
            { tileid: 21, flip: false, pair: false },
            { tileid: 21, flip: false, pair: false },
            { tileid: 22, flip: false, pair: false },
            { tileid: 22, flip: false, pair: false },
            { tileid: 23, flip: false, pair: false },
            { tileid: 23, flip: false, pair: false },
            { tileid: 24, flip: false, pair: false },
            { tileid: 24, flip: false, pair: false },
            { tileid: 25, flip: false, pair: false },
            { tileid: 25, flip: false, pair: false },
            { tileid: 26, flip: false, pair: false },
            { tileid: 26, flip: false, pair: false },
            { tileid: 27, flip: false, pair: false },
            { tileid: 27, flip: false, pair: false },
            { tileid: 28, flip: false, pair: false },
            { tileid: 28, flip: false, pair: false },
            { tileid: 29, flip: false, pair: false },
            { tileid: 29, flip: false, pair: false },
            { tileid: 30, flip: false, pair: false },
            { tileid: 30, flip: false, pair: false },
            { tileid: 31, flip: false, pair: false },
            { tileid: 31, flip: false, pair: false },
            { tileid: 32, flip: false, pair: false },
            { tileid: 32, flip: false, pair: false }
          ];


    this.state = { tiles };
  }

  render() {
      return (
        <ul className="gameboard">
          {this.state.tiles.map((tile, index) => (
              <li className="tile" key={index} >tile</li>
          ))}
        </ul>
      );
  }
}
export default Gameboard;
