import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  //인증 state 변수가 true가 됐을 때
  //로그인이 로그아웃으로 바뀜
  //인증 state 변수가 true가 됐을 때
  //상세 페이지를 누르면 로그인페이지로 튕김
  const navigate = useNavigate();

  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    if (authenticate === true) {
      navigate('/');
    }
  }, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
