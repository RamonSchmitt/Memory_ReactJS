import React from 'react';
import Menu from './Menu';
import Gameboard from './Gameboard';
import Progress from './Progress';

function createTiles() {
  return shuffle([
    { tileid: 1, pair: false, flip: false, image: "01.gif" },
    { tileid: 1, pair: false, flip: false, image: "01.gif" },
    { tileid: 2, pair: false, flip: false, image: "02.gif" },
    { tileid: 2, pair: false, flip: false, image: "02.gif" },
    { tileid: 3, pair: false, flip: false, image: "03.gif" },
    { tileid: 3, pair: false, flip: false, image: "03.gif" },
    { tileid: 4, pair: false, flip: false, image: "04.gif" },
    { tileid: 4, pair: false, flip: false, image: "04.gif" },
    { tileid: 5, pair: false, flip: false, image: "05.gif" },
    { tileid: 5, pair: false, flip: false, image: "05.gif" },
    { tileid: 6, pair: false, flip: false, image: "06.gif" },
    { tileid: 6, pair: false, flip: false, image: "06.gif" },
    { tileid: 7, pair: false, flip: false, image: "07.gif" },
    { tileid: 7, pair: false, flip: false, image: "07.gif" },
    { tileid: 8, pair: false, flip: false, image: "08.gif" },
    { tileid: 8, pair: false, flip: false, image: "08.gif" },
    { tileid: 9, pair: false, flip: false, image: "09.gif" },
    { tileid: 9, pair: false, flip: false, image: "09.gif" },
    { tileid: 10, pair: false, flip: false, image: "10.gif" },
    { tileid: 10, pair: false, flip: false, image: "10.gif" },
    { tileid: 11, pair: false, flip: false, image: "11.gif" },
    { tileid: 11, pair: false, flip: false, image: "11.gif" },
    { tileid: 12, pair: false, flip: false, image: "12.gif" },
    { tileid: 12, pair: false, flip: false, image: "12.gif" },
    { tileid: 13, pair: false, flip: false, image: "13.gif" },
    { tileid: 13, pair: false, flip: false, image: "13.gif" },
    { tileid: 14, pair: false, flip: false, image: "14.gif" },
    { tileid: 14, pair: false, flip: false, image: "14.gif" },
    { tileid: 15, pair: false, flip: false, image: "15.gif" },
    { tileid: 15, pair: false, flip: false, image: "15.gif" },
    { tileid: 16, pair: false, flip: false, image: "16.gif" },
    { tileid: 16, pair: false, flip: false, image: "16.gif" },
    { tileid: 17, pair: false, flip: false, image: "17.gif" },
    { tileid: 17, pair: false, flip: false, image: "17.gif" },
    { tileid: 18, pair: false, flip: false, image: "18.gif" },
    { tileid: 18, pair: false, flip: false, image: "18.gif" },
    { tileid: 19, pair: false, flip: false, image: "19.gif" },
    { tileid: 19, pair: false, flip: false, image: "19.gif" },
    { tileid: 20, pair: false, flip: false, image: "20.gif" },
    { tileid: 20, pair: false, flip: false, image: "20.gif" },
    { tileid: 21, pair: false, flip: false, image: "21.gif" },
    { tileid: 21, pair: false, flip: false, image: "21.gif" },
    { tileid: 22, pair: false, flip: false, image: "22.gif" },
    { tileid: 22, pair: false, flip: false, image: "22.gif" },
    { tileid: 23, pair: false, flip: false, image: "23.gif" },
    { tileid: 23, pair: false, flip: false, image: "23.gif" },
    { tileid: 24, pair: false, flip: false, image: "24.gif" },
    { tileid: 24, pair: false, flip: false, image: "24.gif" },
    { tileid: 25, pair: false, flip: false, image: "25.gif" },
    { tileid: 25, pair: false, flip: false, image: "25.gif" },
    { tileid: 26, pair: false, flip: false, image: "26.gif" },
    { tileid: 26, pair: false, flip: false, image: "26.gif" },
    { tileid: 27, pair: false, flip: false, image: "27.gif" },
    { tileid: 27, pair: false, flip: false, image: "27.gif" },
    { tileid: 28, pair: false, flip: false, image: "28.gif" },
    { tileid: 28, pair: false, flip: false, image: "28.gif" },
    { tileid: 29, pair: false, flip: false, image: "29.gif" },
    { tileid: 29, pair: false, flip: false, image: "29.gif" },
    { tileid: 30, pair: false, flip: false, image: "30.gif" },
    { tileid: 30, pair: false, flip: false, image: "30.gif" },
    { tileid: 31, pair: false, flip: false, image: "31.gif" },
    { tileid: 31, pair: false, flip: false, image: "31.gif" },
    { tileid: 32, pair: false, flip: false, image: "32.gif" },
    { tileid: 32, pair: false, flip: false, image: "32.gif" }
  ]);
}

var players = [
  { name: "Player 1", turn: true, score: 0 },
  { name: "Player 2", turn: false, score: 0 }
];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class TotalRecall extends React.Component {
  constructor() {
  super();
    this.state = {
      tiles: createTiles(),
      players: players
    };
  }

  resetGame() {
    console.log("Resetting game...")
    this.setState({tiles: createTiles()})
  }

  flipTile(index) {
    console.log(`Flipping tile ${index}!`)
    let { tiles } = this.state
    tiles[index].flip = true
    this.setState({tiles: tiles})
  }

  render() {
    console.log(this.state.tiles);
    return (
      <div className="container">
        <Menu resetGame={this.resetGame.bind(this)} />
        <Gameboard tiles={this.state.tiles} flipTile={this.flipTile.bind(this)}/>
        <Progress players={this.state.players}/>
      </div>
    );
  }
}

export default TotalRecall;
