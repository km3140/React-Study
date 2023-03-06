import React from 'react';
import { useSelector } from 'react-redux'; // 어디서든지 useSelector만 가져다 쓰면 된다

const GrandsonBox = () => {
  //                                       👇 combineReducer(or reduxToolkit)사용할 시 reducer의 이름도 체이닝 해줘야함
  const count = useSelector(state => state.reducer.count); // store의 count를 가져옴

  return (
    <div>
      <h3>GrandsonBox : {count}</h3>
    </div>
  );
};

export default GrandsonBox;
