import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from '../actions/authedUser'
import { RECEIVE_DATA } from '../actions/shared'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.authedUser
    case SET_AUTHED_USER :
      return action.id
    case REMOVE_AUTHED_USER:
      return null
    default :
      return state
  }
}