import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux'; //might need to remove
import { routerStateReducer } from 'redux-react-router';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
	isLoading: false,
	data: [],
	error: false
}

function exampleReducer(state = initialState, action = null) {
	switch(action.type) {
		case types.RECV_ERROR:
			return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
		case types.RECV_DATA:
			return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
		case types.REQ_DATA:
			return Object.assign({}, state, {isLoading: true, error: false });
		case REHYDRATE:
      var incoming = action.payload.example

      if (incoming) {
        return Object.assign({}, state, incoming);
      }
      return state
		default:
			return state;
	}
};

function userReducer(state = { error: false, email: '', role: '', token: '' }, action = null) {
	switch(action.type) {
		case types.USER_RECV_ERROR:
			return Object.assign({}, state, {error: true});

		case types.SET_USER:
			return Object.assign({}, state,  { error: false }, action.payload)

		case REHYDRATE:
      var incoming = action.payload.userStore

      if (incoming) {
        return Object.assign({}, state, incoming);
      }
      return state
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	router: routerStateReducer,
	example: exampleReducer,
	userStore: userReducer
});

export default rootReducer;