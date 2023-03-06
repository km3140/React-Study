let initialState = {
  count: 0,
};

//                     👇 state의 초기값 할당, ❓store에 값이 있으면 store에서 받아오는 건가?
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }; // 👈 새로운 주소의 객체를 주어야 store가 값이 바뀐걸 인식한다
    // 👆 reducer의 return으로 업데이트된 state 정보를 store에게 준다
    case 'LOGIN':
      return { ...state, id: action.payload.id, passwd: action.payload.passwd };
    default:
      return { ...state }; // 어쨋든 리턴은 해야함.
  }
}

export default reducer;
