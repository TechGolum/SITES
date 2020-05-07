import React from 'react';
import './Square.css';

function Square(props)
{
    return(<div className = 'square'  onClick = {props.onClick}></div>);
}

export default Square; 