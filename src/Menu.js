import React from 'react';
import Gameboard from './Gameboard';

class Menu extends React.Component {
  constructor(props) {
  super(props);
  this.state = { tiles: props.tiles };
  this.newGame = this.newGame.bind(this);
  }

  newGame() {
    this.setState({tiles: this.state.tiles});
  }

    render() {
        return (
          <div>
            <h1>TOTAL RECALL</h1>
            <button onClick={this.newGame}>NEW GAME</button>
          </div>
        );
    }
}

export default Menu;
