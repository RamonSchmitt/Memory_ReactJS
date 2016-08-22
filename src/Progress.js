import React from 'react';
import Memory from './Memory';
import Turn from './Turn';

class Progress extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <th>Player 1</th>
          <th>0</th>
        </tr>
        <tr>
          <th>Player 2</th>
          <th>0</th>
        </tr>
        </tbody>
      </table>
    );
  }
}

export default Progress;
