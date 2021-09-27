import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Instance from '../../axios';
import '../../styles/styles.scss';

export const SignupDone = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    Instance.get(`/users/name`).then(response => {
      setUserName(response.data.result.name);
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
        <Link to="/applying" className="button1 tomakers">
          로컬메이커스 지원하기
        </Link>
      </div>
    </div>
  );
};

export default SignupDone;
