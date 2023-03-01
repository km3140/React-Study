import { useState } from 'react';
import './App.css';

function App() {
  let counter = 0;
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
