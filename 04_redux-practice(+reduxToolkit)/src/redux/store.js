// import { legacy_createStore as createStore } from 'redux';
// import reducer from './reducer/reducer';

// let store = createStore(reducer);

// export default store;

// 👆👆👆 이전 문법 (여기에다가 combineReducer + redux-thunk + applyMiddleware + composeWithDevTools)
// 👇👇👇 현재 문법 (configureStore = createStore + combineReducer + redux-thunk + applyMiddleware + composeWithDevTools)

import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/reducer';

const store = configureStore({
  reducer: {
    reducer, // reducer : reducer
    // 다른 reducer들도 나열할 수 있음! (combineReducer)
  },
});

export default store;
