import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../config';
import '../../styles/styles.scss';

export const SignupDone = () => {
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
    <div className="wrap">
      <div className="done_wrap">
        <div className="done">
          <div>
            {userName}님, <br />
            반가워요 ^&#41;^
          </div>
          <p>
            메이커스에 지원하고 <br />
            투어를 이끄는 가이드가 되어보세요
          </p>
        </div>
        <button className="button1">로컬메이커스 지원하기</button>
      </div>
    </div>
  );
};

export default SignupDone;
