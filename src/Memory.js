import React from 'react';
import Menu from './Menu';
import Gameboard from './Gameboard';
import Progress from './Progress';

class Memory extends React.Component {
    render() {
        return (
          <div className="container">
            <Menu/>
            <Gameboard />
            <Progress />
          </div>
        );
    }
}

export default Memory;
