import React from 'react';

class Menu extends React.Component {
  constructor() {
    super();
    this. _handleClick = this. _handleClick.bind(this);
  }

  _handleClick() {
    alert("Good luck");
  }

    render() {
        return (
          <div>
            <h1>TOTAL RECALL</h1>
            <button onClick={this._handleClick}>NEW GAME</button>
          </div>
        );
    }
}

export default Menu;
