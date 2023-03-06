import React from 'react';
import { useSelector } from 'react-redux';
import GrandsonBox from './GrandSonBox';

const SonBox = () => {
  const count = useSelector(state => state.count);

  return (
    <div>
      <h2>SonBox : {count}</h2>
      <GrandsonBox />
    </div>
  );
};

export default SonBox;
