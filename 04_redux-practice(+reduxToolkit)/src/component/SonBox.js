import React from 'react';
import { useSelector } from 'react-redux';
import GrandsonBox from './GrandSonBox';

const SonBox = () => {
  //                                       👇 combineReducer(or reduxToolkit)사용할 시 reducer의 이름도 체이닝 해줘야함
  const count = useSelector(state => state.reducer.count); // store의 count를 가져옴

  return (
    <div>
      <h2>SonBox : {count}</h2>
      <GrandsonBox />
    </div>
  );
};

export default SonBox;
