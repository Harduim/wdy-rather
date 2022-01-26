import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import pools from "./pools"
import users from "./users"
import authedUser from "./authedUser"

export default combineReducers({
  loadingBar: loadingBarReducer,
  pools,
  users,
  authedUser
})