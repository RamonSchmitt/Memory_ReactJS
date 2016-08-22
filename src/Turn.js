import React from 'react';
import Progress from './Progress';

class Turn extends React.Component {
  render() {
    var name = this.props.players.turn ?
      this.props.players.name :
      <span style={{color: 'red'}}>
        {this.props.players.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.players.score}</td>
      </tr>
    );
  }
}

export default Turn;
