import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger'

const feeling = (state = {}, action) => {
    if (action.type === 'SET_FEELING') {
        return {...state, feeling : action.payload}
    }
    return state
}

const understanding = (state = {}, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return {...state, understanding : action.payload}
    }
    return state
}

const support = (state = {}, action) => {
    if (action.type === 'SET_SUPPORT') {
        return {...state, support : action.payload}
    }
    return state
}

const comments = (state = {}, action) => {
    if (action.type === 'SET_COMMENTS') {
        return {...state, comments : action.payload}
    }
    return state
}
const store = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(logger),
);


export default store;