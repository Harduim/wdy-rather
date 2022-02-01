import { ADD_POOL, ANSWER_POOL } from '../actions/pools'
import { RECEIVE_DATA } from '../actions/shared'

export default function pools(state = [], action) {
    switch (action.type) {
        case ADD_POOL:
            return state.concat([action.pool])
        case ANSWER_POOL:
            return state
        case RECEIVE_DATA:
            return action.pools
        default:
            return state
    }
}