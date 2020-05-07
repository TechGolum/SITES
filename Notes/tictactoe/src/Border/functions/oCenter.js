import randomIntenger from './randomIntenger.js.js';
import moveNotDiagonal from './moveNotDiagonal.js.js';

function oCenter(state)
{
    if(state.moves === 0)
    {
        return 4;
    }
    if(state.moves === 1)
    {
        if(moveNotDiagonal(state, 'X') !== null)
            return moveNotDiagonal(state, 'X')
        let sides = [1, 3, 5, 7];
        if((state.border[0] === 'X' && state.border[8] === 'X')||(state.border[2] === 'X' && state.border[6] === 'X'))
        {
            return sides[randomIntenger(0, 3)];
        }
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

export default oCenter;