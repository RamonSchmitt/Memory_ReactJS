import React from 'react';
import Memory from './Memory';

class Progress extends React.Component {
    render() {
      var rows = []; 
        return (
            <div>
            <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Score</th>
              </tr>
            </thead>
              <tbody>{rows}</tbody>
            </table>
            </div>
        );
    }
}

export default Progress;
