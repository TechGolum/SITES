import generateMove from './generateMove.js.js';
import findWinner from './findWinner.js.js';

function handleClick(number, state)
{
    let winstr = '';
    if(!state.is_finished && document.getElementsByClassName('square')[number].innerText === '')
    {
        document.getElementsByClassName('square')[number].innerText = state.isXnow ? 'X' : 'O';
        state.border[number] = state.isXnow ? 'X' : 'O';
        state.isXnow = !state.isXnow;
        document.getElementById('next-move').innerText = 'Next move: ' + (state.isXnow ? 'X' : 'O');
        if(!state.border.includes(null))
        {
            state.is_finished = true;
            document.getElementById('next-move').innerText = '';
        }
        if(findWinner(state, state.border))
        { 
            winstr = 'Winner: ' + (!state.isXnow ? 'X' : 'O');
            state.is_finished = true;
        }
        if(state.is_finished)
        {
            document.getElementById('next-move').innerText = winstr;
        }
    }
    if(!state.is_finished && !state.isXnow)
    {
        handleClick(generateMove(state, number), state);
        state.moves++;
    }
}

export default handleClick;