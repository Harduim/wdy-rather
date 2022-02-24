import { ADD_POOL, ANSWER_POOL } from '../actions/pools'
import { RECEIVE_DATA } from '../actions/shared'

export default function pools (state = [], action) {
  switch (action.type) {
    case ADD_POOL:
      return state.concat([action.pool])
    case ANSWER_POOL:
      const { poolId, option, userId } = action
      const newState = Object.assign({}, state)
      const newPool = Object.assign({}, state[poolId])
      Object.assign(
        newPool,
        {
          [option]: {
            text: newPool[option].text,
            votes: [...newPool[option].votes, userId]
          }
        }
      )

      Object.assign(newState, { [action.poolId]: newPool })
      return newState
    case RECEIVE_DATA:
      return action.pools
    default:
      return state
  }
}
