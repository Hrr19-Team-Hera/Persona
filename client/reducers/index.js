//========== all the reducers! ==============
import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
const jwtDecode = require('jwt-decode')

function checkTokenExpiry() {
  let jwt = localStorage.getItem('id_token')
  if(jwt) {
    let jwtExp = jwtDecode(jwt).exp;
    let expiryDate = new Date(0);
    expiryDate.setUTCSeconds(jwtExp);

    if(new Date() < expiryDate) {
      return true;
    }
  }
  return false;
}

function getProfile() {
  return JSON.parse(localStorage.getItem('profile'));
}

function auth(state = {
    isAuthenticated: checkTokenExpiry(),
    isLogging: false,
    profile: getProfile(),
    error: ''
  }, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        isLogging: false,
        profile: action.profile,
        error: ''
      })
    case ActionTypes.LOGIN_INPROCESS:
      return Object.assign({}, state, {
        isLogging: true
      })
    case ActionTypes.LOGIN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isLogging: false,
        profile: null,
        error: action.error
      })
    case ActionTypes.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
        profile: null
      })
    default:
      return state
    }
}


function analysis(state = {
  isFetching: false,
  analysisResult: {},
  error: ''
  }, action) {
    switch (action.type) {
      case ActionTypes.ANALYSIS_REQUEST:
        return Object.assign({}, state, {
          isFetching: true
        })
      case ActionTypes.ANALYSIS_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          analysisResult: action.response,
          error: ''
        })
      case ActionTypes.ANALYSIS_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          analysisResult: {},
          error: action.error
        })
      default:
        return state
    }
}

function friends(state = {
  isFetching: false,
  friendsList: [],
  error: ''
  }, action) {
    switch (action.type) {
      case ActionTypes.FRIENDS_REQUEST:
        return Object.assign({}, state, {
          isFetching: true
        })
      case ActionTypes.FRIENDS_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          friendsList: action.response.data,
          error: ''
        })
      case ActionTypes.FRIENDS_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          friendsList: [],
          error: action.error
        })
      default:
        return state
    }
}

const rootReducer = combineReducers({
  routing,
  auth,
  analysis,
  friends
})

export default rootReducer