export const ANSWER_POOL = 'ANSWER_POOL'
export const ADD_POOL = 'ADD_POOL'


export function addPool(pool) {
    return {
        type: ADD_POOL,
        pool,
    }
}

export function answerPool(poolId, option, userId) {
    return {
        type: ANSWER_POOL,
        poolId,
        option,
        userId,
    }
}
