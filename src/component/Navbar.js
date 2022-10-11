import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];

  const goToLogin = () => {
    navigate('/login');
  };

  const goToLogout = () => {
    setAuthenticate(false);
    navigate('/');
  };

  const loginOut = () => {
    if (authenticate === true) {
      return (
        <div className="login-button" onClick={goToLogout}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그아웃</div>
        </div>
      );
    }
    if (authenticate === false) {
      return (
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      );
    }
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      const query = event.target.value;
      navigate(`?q=${query}`);
    }
  };

  return (
    <div>
      <div className="login-area">{loginOut()}</div>
      <div className="nav-section">
        <img
          className="login-button"
          onClick={() => navigate('/')}
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
        />
      </div>
      <div className="menu-area">
        <div></div>
        <ul className="menu-list">
          {menuList.map((menu) => {
            return <li>{menu}</li>;
          })}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
