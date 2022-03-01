import { ADD_POOL, ANSWER_POOL } from '../actions/pools'
import { RECEIVE_DATA } from '../actions/shared'



export default function pools(state = {}, action) {
  const newState = { ...state }
  let newPool
  switch (action.type) {
    case ADD_POOL:
      console.log(action.pool)
      return { ...newState, [action.pool.id]: action.pool }
    case ANSWER_POOL:
      const { poolId, option, userId } = action
      newPool = Object.assign({}, state[poolId])
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
