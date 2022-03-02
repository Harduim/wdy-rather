import { ANSWER_POOL } from '../actions/pools'
import { RECEIVE_DATA } from '../actions/shared'

export default function users (state = [], action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.users

    case ANSWER_POOL:
      const { poolId, option, userId } = action
      return {
        ...state,
        [userId]: {
          ...state[userId],
          answers: { ...state[userId].answers, [poolId]: option }
        }
      }

    default:
      return state
  }
}
