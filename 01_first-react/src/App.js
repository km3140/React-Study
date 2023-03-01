import { useState } from 'react';
import './App.css';

function App() {
  let counter = 0; // 리렌더링 되면 컴포넌트를 재실행함 (이런 상황에서 useRef 사용하는듯)
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter++;
    setCounter2(counter2 + 1);
    console.log('counter1 : ', counter, 'counter2(state) : ', counter2);
  };

  return (
    <>
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>click me for increase</button>
    </>
  );
}

export default App;
