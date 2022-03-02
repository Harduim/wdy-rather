import { loadingBarReducer } from 'react-redux-loading-bar'
import { combineReducers } from 'redux'

import authedUser from './authedUser'
import pools from './pools'
import users from './users'

export default combineReducers({
  loadingBar: loadingBarReducer,
  pools,
  users,
  authedUser
})
