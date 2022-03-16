export const scoreCounter = () => { 
    return { type: 'SCORE_INCREMENT' }
};

export const scoreReset = () => { 
    return { type: 'SCORE_RESET' }
};


//action must be plain object ---> return { -object- }