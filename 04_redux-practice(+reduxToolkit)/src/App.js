import './App.css';
// redux를 사용함으로써 컴포넌트에 useState가 대체됨
import { useDispatch, useSelector } from 'react-redux';
import SonBox from './component/SonBox';
import { actions } from './redux/reducer/reducer';

function App() {
  const dispatch = useDispatch(); // reducer에 action을 보내는 함수

  //                                       👇 combineReducer(or reduxToolkit)사용할 시 reducer의 이름도 체이닝 해줘야함
  const count = useSelector(state => state.reducer.count); // store의 count를 가져옴
  const id = useSelector(state => state.reducer.id); // store의 id를 가져옴
  const passwd = useSelector(state => state.reducer.passwd); // store의 passwd를 가져옴

  const increase = () => {
    // dispatch({ type: 'INCREMENT' }); // 인자로 들어간 객체가 reducer의 파라미터인 action으로 들어간다
    dispatch(actions.increase());
    //       👆 간결해진 모습
  };

  const login = () => {
    //                        👇 매개변수처럼 보냄
    // dispatch({ type: 'LOGIN', payload: { id: '회원이름', passwd: '비밀번호' } });
    dispatch(actions.login({ id: '회원이름', passwd: '비밀번호' }));
    //                     👆 payload는 액션의 인자로 넘김!
  };

  return (
    <div>
      <h2>{id}님 환영합니다</h2>
      <br />
      비밀번호 : {passwd}
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>로그인</button>
      <SonBox />
    </div>
  );
}

export default App;
