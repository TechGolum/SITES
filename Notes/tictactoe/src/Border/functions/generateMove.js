import oCenter from './oCenter.js.js';
import xCenter from './xCenter.js.js';

function generateMove(state)
{
    if(state.border[4] === 'X') return xCenter(state);
    else return oCenter(state);
}

export default generateMove;