export const ANSWER_POOL = 'ANSWER_POOL'
export const ADD_POOL = 'ADD_POOL'


function addPool(pool) {
    return {
        type: ADD_POOL,
        pool,
    }
}

function answerPool(pool) {
    return {
        type: ANSWER_POOL,
        pool,
    }
}
