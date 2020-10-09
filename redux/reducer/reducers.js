import { combineReducers } from 'redux';
import { ORDERS_LISTING, PENDING_ORDERS , SINGLE_ORDER} from "../action/actions"

let dataState = { orders : []  , porders : [] , order : [] , friend : 5 ,message: ''};
export default function dataReducer(state = dataState, action){
	console.log(action.type); 
    switch (action.type) {
    	  case ORDERS_LISTING:
          return { ...state , orders: action.data };
       	case PENDING_ORDERS:
       	  return { ...state , porders: action.data };
        case SINGLE_ORDER:
          return { ...state , order: action.data };
        default:
           return state;  
    }

}
