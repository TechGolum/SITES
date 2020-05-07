var winnumber = 3;

function findWinner(state)
{
    let sign = !state.isXnow ? 'X' : 'O';
    let border = state.border.slice();

    //rows
    for(let i = 0, count = 0; i < border.length; i++)
    {
        if(border[i] === sign)
        { 
            count++;
            if(count === winnumber) return true;
            if(border[i + 1] !== sign) count = 0;
        }
        if((i + 1) % Math.sqrt(border.length) === 0)
        {
            count = 0;
        }
    }

    //columns
    for(let i = 0, j = 0, count = 0; i < border.length; i+=Math.sqrt(border.length))
    {
        if(border[i] === sign)
        { 
            count++;
            if(count === winnumber) return true;
            if(border[i + Math.sqrt(border.length)] !== sign) count = 0;
        }
        if(i > 5)
        {
            i = ++j - Math.sqrt(border.length);
            count = 0;
        }
    }

    //diagonal 1
    for(let i = 0, count = 0; i < border.length; i += (Math.sqrt(border.length) + 1))
    {
        if(border[i] === sign) count++;
        if(count === Math.sqrt(border.length)) return true;
    }

    //diagonal 2
    for(let i = Math.sqrt(border.length) - 1, count = 0; i <= border.length - Math.sqrt(border.length); i += (Math.sqrt(border.length) - 1))
    {
        if(border[i] === sign) count++;
        if(count === Math.sqrt(border.length)) return true;
    }

    return false;
}

export default findWinner;