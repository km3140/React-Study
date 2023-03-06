import React from 'react';
import { useSelector } from 'react-redux'; // 어디서든지 useSelector만 가져다 쓰면 된다

const GrandsonBox = () => {
  const count = useSelector(state => state.count);

  return (
    <div>
      <h3>GrandsonBox : {count}</h3>
    </div>
  );
};

export default GrandsonBox;
