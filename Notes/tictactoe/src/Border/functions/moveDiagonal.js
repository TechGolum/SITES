import randomIntenger from './randomIntenger.js.js';

function moveDiagonal(state)
{
    const corners = [0, 2, 6, 8];
    let available_corners = [];
    for(let i = 0; i < 4; i++)
    {
        if(state.border[corners[i]] === null) available_corners.push(corners[i]);
    }
    return available_corners[randomIntenger(0, 1)];
}

export default moveDiagonal;