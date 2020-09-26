import React, { Component } from 'react'
import Player from './Player'
import Item from './Item'
import Button from './Button'
import Instructions from './Instructions'
import Gameplay from './Gameplay'
import Homepage from './Homepage'
import Endscreen from './Endscreen'


class Canvas extends Component {
    state = {
        scenes : [<Homepage />, <Instructions />, <Gameplay />, <Endscreen />],
        buttons : []
    }
    render() {
        return(
            <canvas style={{width: 500, backgroundColor:'steelblue'}}>
                <Player />
            </canvas>
        )
    } 
}

export default Canvas
