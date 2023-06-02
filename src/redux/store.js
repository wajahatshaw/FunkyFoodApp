import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './counter/counterSlices';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
