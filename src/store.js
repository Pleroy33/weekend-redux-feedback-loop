import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger'


const input = (state = [],action) =>{
    if (action.type ==='Set_New_Input'){
        return  [...state, action.payload]
    }
}


const store = createStore(
    combineReducers({
      
        input
    }),
    applyMiddleware(logger),
  );
  
  
  export default store;