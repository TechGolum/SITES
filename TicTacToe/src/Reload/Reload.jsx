import React from 'react';
import './Reload.css';

function ReloadComponent(state)
{
    return <button id="restart" onClick = {() => {Reload(state)}}>Restart</button>;
}

function Reload(state)   
{
    for(let i = 0; i < document.getElementsByClassName('square').length; i++)
        document.getElementsByClassName('square')[i].innerText = '';
    state.border.fill(null);
    state.is_finished = false;
    state.isXnow = true;
    document.getElementById('next-move').innerText = 'Next move: X'; 
    state.moves = 0;
}


export default ReloadComponent;