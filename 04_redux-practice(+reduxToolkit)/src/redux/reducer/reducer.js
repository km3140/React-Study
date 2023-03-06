// let initialState = {
//   count: 0,
// };

// //                     👇 state의 초기값 할당, ❓store에 값이 있으면 store에서 받아오는 건가?
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 }; // 👈 새로운 주소의 객체를 주어야 store가 값이 바뀐걸 인식한다
//     // 👆 reducer의 return으로 업데이트된 state 정보를 store에게 준다
//     case 'LOGIN':
//       return { ...state, id: action.payload.id, passwd: action.payload.passwd };
//     default:
//       return { ...state }; // 어쨋든 리턴은 해야함.
//   }
// }

// export default reducer;

// 👆👆👆 이전 문법
// 👇👇👇 redux-toolkit 적용

import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  count: 0,
  id: '',
  passwd: '',
};

//     👇 새로운 객체가 반환됨!
const slice = createSlice({
  name: 'newFunctionOftoolkit',
  initialState,
  reducers: {
    // 분기문 처리 대신 객체 안의 함수로 표현
    increase(state, action) {
      state.count = state.count + 1; // 이전처럼 항상 다른 객체를 반환할 필요가 없다
    },
    login(state, action) {
      state.id = action.payload.id;
      state.passwd = action.payload.passwd;
    },
  },
});

console.log('this is createSlice', slice);

// 👇 dispatch함수 사용할 곳에 인자로 쓸 action 수출
export const actions = slice.actions;

// 👇 store에 reducer 수출
export default slice.reducer;
//                         👆 reducer's' 아님!
