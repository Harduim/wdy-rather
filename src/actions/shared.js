import { _getQuestions, _getUsers } from '../_DATA'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_DATA = 'RECEIVE_DATA'
const AUTHEDUSER = sessionStorage.getItem('uid')

function receiveData (pools, users) {
  return {
    type: RECEIVE_DATA,
    pools: pools,
    users: users,
    authedUser: AUTHEDUSER
  }
}

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return Promise.all([
      _getQuestions(),
      _getUsers()
    ]).then(([pools, users]) => {
      dispatch(hideLoading())
      dispatch(receiveData(pools, users))
    })
  }
}
