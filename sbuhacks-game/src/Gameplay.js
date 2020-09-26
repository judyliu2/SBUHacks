import React, { Component } from 'react'
import Item from "./Item";
import Button from './Button';
import Player from './Player'

export class Gameplay extends Component {
  state = {
    player: { cords: [0, 0], 
            health: 100, 
            attacked: false },
  };
  render() {
    return <div></div>;
  }
}

export default Gameplay
