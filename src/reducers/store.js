import { createStore, combineReducers } from 'redux';
import todo from './todo';

const rootReducer = combineReducers({
  todo: todo,
})

const store = createStore(rootReducer)

export default store; 
