import { _getQuestions, _getUsers } from '../_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'


export const RECEIVE_DATA = 'RECEIVE_DATA'
const AUTHEDUSER = sessionStorage.getItem('uid')

function receiveData(questions, users) {
    return {
        type: RECEIVE_DATA,
        questions: questions,
        users: users,
        authedUser: AUTHEDUSER
    }
}


export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([
            _getQuestions(),
            _getUsers()
        ]).then(([questions, users]) => {
            dispatch(hideLoading())
            dispatch(receiveData(questions, users))
        })
    }
}
