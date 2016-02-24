import * as types from './actionTypes';
import { pushState } from 'redux-react-router'
import axios from 'axios';

function setUser(payload){
  return {
    type: types.SET_USER,
    payload
  }
}

function receiveError(){
  return {
    type: types.USER_RECV_ERROR
  }
}

export function requestLogin(user, pass){
  return dispatch => {
    return axios({
      url: 'http://190.43.63.165:3000/api/react/login',
      timeout: 20000,
      method: 'post',
      responseType: 'json',
      data: {
        admin: {
          email: user,
          password: pass
        }
      }
    })
      .then(response => {
        dispatch(setUser(response.data));
        dispatch(pushState(null,'/dashboard'));
      })
      .catch(response => {
        dispatch(receiveError());
        dispatch(pushState(null,'/error'));
      })
  }
}