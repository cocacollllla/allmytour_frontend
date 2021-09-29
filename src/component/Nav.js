import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const deleteToken = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className="nav_wrap">
      <div className="nav_category">
        <div className="logo_wrap">
          <img className="nav_logo" src={NavLogo} alt="nav logo" />
        </div>
        <div className="user_profile_wrap">
          <span className="user_name">
            {localStorage.getItem('token') ||
            sessionStorage.getItem('token') ? (
              <>
                <Link to="/applying" className="signin_btn applying_btn">
                  메이커스 지원하기
                </Link>
                <div onClick={deleteToken}>{userName}</div>
              </>
            ) : (
              <Link to="/signin" className="signin_btn">
                로그인/회원가입
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Nav;
