import moveDiagonal from './moveDiagonal';
import moveNotDiagonal from './moveNotDiagonal.js';
import randomIntenger from './randomIntenger.js';

function xCenter(state)
{
    if(state.moves === 0)
    { 
        let bot_move;
        let corners = [0, 2, 6, 8];
        bot_move = randomIntenger(0, 3);
        return corners[bot_move];
    }
    if(state.moves === 1)
    {
        state.border[4] = '';
        if(state.border.indexOf('O') + state.border.indexOf('X') !== 8)
        {
            state.border[4] = 'X';
            return moveNotDiagonal(state, 'X');
        }
        else
        {
            state.border[4] = 'X';
            return moveDiagonal(state);
        }
    }
    if(state.moves > 1)
    {
        if(moveNotDiagonal(state, 'O') !== null)
            return moveNotDiagonal(state, 'O')
        if(moveNotDiagonal(state, 'X') !== null)
            return moveNotDiagonal(state, 'X')
        let available_squares = [];
        for(let i = 0; i < state.border.length; i++)
        {
            if(state.border[i] === null || state.border[i] === '') available_squares.push(i);
        }
        return available_squares[randomIntenger(0, available_squares.length - 1)];
    }
}

export default xCenter;