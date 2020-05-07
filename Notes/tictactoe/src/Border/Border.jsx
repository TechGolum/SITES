import React from 'react';
import Square from '../Square/Square.jsx.js'
import ReloadComponent from '../Reload/Reload.jsx.js';
import handleClick from './functions/handleClick.js.js';
import './NextMove.css';

class Border extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            side: winnumber,
            border: Array(winnumber * winnumber).fill(null),
            isXnow: true,
            is_finished: false,
            moves: 0
        }
    }

    render()
    {
        return(
            <div id= 'border'>
                {CreateBorder(this.state)}
                <div id = 'next-move'>Next move: X </div>
                {ReloadComponent(this.state)}
           </div>
            );
    }
}

var winnumber = 3;

function CreateBorder(state)
{
    let border = [];
    let row = [];
    for(let i = 0; i < state.side; i++)
    {
        for(let j = 0; j < state.side; j++)
        {
            row.push(<Square onClick = {() => {handleClick(i * winnumber + j, state)}}/>);
        }
        border.push(<div id = 'row'>{row}</div>);
        row = [];
    }
    return border;
}

export default Border; 