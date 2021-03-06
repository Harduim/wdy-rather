export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

export function setAuthedUser (id) {
  sessionStorage.setItem('uid', id)
  return {
    type: SET_AUTHED_USER,
    id
  }
}

export function unsetAuthedUser () {
  sessionStorage.removeItem('uid')
  return {
    type: REMOVE_AUTHED_USER,
    id: null
  }
}
