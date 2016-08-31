import React from 'react';

class Menu extends React.Component {
  constructor(props) {
  super(props);
  this.state = { tiles: props.tiles };
  this.newGame = this.newGame.bind(this);
  }

  newGame() {
    this.props.resetGame();
  }

    render() {
        return (
          <div className="menu">
            <h1>Total Recall</h1>
            <button onClick={this.newGame}>NEW GAME</button>
          </div>
        );
    }
}

export default Menu;
