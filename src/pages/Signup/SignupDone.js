import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Instance from '../../axios';
import '../../styles/styles.scss';

export const SignupDone = ({ history }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    Instance.get(`/users/name`).then(response => {
      setUserName(response.data.result.name);
    });
  }, []);

  const toApplying = () => {
    history.push('/applying');
    window.location.reload();
  };

  return (
    <div className="wrap">
      <div className="done_wrap">
        <div className="done">
          <div>
            {userName}님, <br />
            반가워요 ^&#41;^
          </div>
          <p>
            지원하고 <br />
            투어를 이끄는 가이드가 되어보세요
          </p>
        </div>
        <button
          to="/applying"
          className="button1 tomakers"
          onClick={toApplying}
        >
          지원하기
        </button>
      </div>
    </div>
  );
};

export default SignupDone;
