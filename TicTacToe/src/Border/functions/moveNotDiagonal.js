import findWinner from './findWinner.js';

function moveNotDiagonal(state, sign)
{
    const save_border = state.border.slice();
    state.isXnow = sign === 'O' ? true : false;
    for(let i = 0; i < state.border.length; i++)
    {
        if(state.border[i] === null)
        {
            state.border[i] = sign;
        }
        if(findWinner(state))
        {    
            state.border = save_border.slice();
            state.isXnow = false;
            return i;
        }
        state.border = save_border.slice();
    }
    return null;
}

export default moveNotDiagonal;