import React, { useState, useEffect } from 'react';
import NavLogo from '../assets/logo_gnb.svg';
import axios from 'axios';
import { API } from '../config';

const Nav = () => {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    axios
      .get(`${API.USER_NAME}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => {
        setUserName(res.data.result.name);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="nav_wrap">
      <div className="nav_category">
        <div className="logo_wrap">
          <img className="nav_logo" src={NavLogo} alt="nav logo" />
        </div>
        <div className="user_profile_wrap">
          <span className="user_name">{userName}</span>
        </div>
      </div>
    </div>
  );
};
export default Nav;
