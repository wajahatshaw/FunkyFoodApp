import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { counterReducer,CounterState } from './counter/counterSlices';


export interface RootState {
  counter: CounterState;
  // ...other slice states...
}

const rootReducer = combineReducers<RootState>({
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
