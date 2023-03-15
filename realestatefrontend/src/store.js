import {createStore} from 'redux';

const initialState = {
  user: null,
  token: null,
  cartItems: [],
};

function authReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        userId: action.payload.user._id,
        email : action.payload.user.email
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        userId: null, 
        email : null
      };
      case 'ADD_USER_DETAILS':
      return {
        ...state,
        userDetails: action.payload,
      };
   
    default:
      return state;
  }
}

const store = createStore(authReducer);

export default store;
