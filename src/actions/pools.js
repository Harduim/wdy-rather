import { _saveQuestion, _saveQuestionAnswer } from '../_DATA'
export const ANSWER_POOL = 'ANSWER_POOL'
export const ADD_POOL = 'ADD_POOL'

export function handleAddPool (optionOneText, optionTwoText, author) {
  const question = { optionOneText, optionTwoText, author }
  return (dispatch) => {
    _saveQuestion(question).then(q => dispatch(addPool(q)))
  }
}

function addPool (pool) {
  return {
    type: ADD_POOL,
    pool
  }
}

export function handleAnswerPool (poolId, option, userId) {
  const answer = { authedUser: userId, qid: poolId, answer: option }
  return (dispatch) => {
    _saveQuestionAnswer(answer).then(() => dispatch(answerPool(poolId, option, userId)))
  }
}

function answerPool (poolId, option, userId) {
  _saveQuestionAnswer({ authedUser: userId, qid: poolId, answer: option })
  return {
    type: ANSWER_POOL,
    poolId,
    option,
    userId
  }
}
