/*
* loginStatus :
*   - 0 is not log in
*   - 1 is logging in 
*   - 2 is logged
*/

var initUser = {
  loginStatus: 0,
  isLoggingIn: 0,
  username: 'guest',
  sessionid: null,
  email: null,
  error: null
}

const user = (state = initUser, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        loginStatus: 1,
        error: null,
      }
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        loginStatus: 2,
        error: null,
      }
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        loginStatus: action.loginStatus,
        error: action.error
      }
    case 'LOGOUT':
      return {
        ...state,
        loginStatus: 0,
        error: action.error
      }
    case 'RESET_ERROR':
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}

export default user
