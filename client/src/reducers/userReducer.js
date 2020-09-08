import { FETCH_USER } from '../actions/types';
import { LOGOUT_USER } from '../actions/types';


const initialState = {
  item: {}
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        item: action.payload
      };
    
    case LOGOUT_USER:
      return {
        ...state,
        item: action.payload
      };
    
    default:
      return state;
  }
}
