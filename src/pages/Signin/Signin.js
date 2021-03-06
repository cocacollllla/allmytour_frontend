import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import SignTitle from '../../component/SignTitle';
import { ReactComponent as RadioBtn } from '../../assets/radio_none.svg';
import Instance from '../../axios';
import '../../styles/styles.scss';

export const Signin = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [signinForm, setSigninForm] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleLoginStateCheck = () => {
    setIsCheck(!isCheck);
  };

  const handleInput = e => {
    const { value, name } = e.target;
    setSigninForm({
      ...signinForm,
      [name]: value,
    });
  };

  const handleClickSignin = e => {
    e.preventDefault();

    Instance.post(`/users/signin`, {
      email: signinForm.email,
      password: signinForm.password,
    }).then(response => {
      if (response.data.MESSAGE === 'SUCCESS') {
        alert('로그인 완료');
        window.location.reload();
        history.push('/applying');

        if (isCheck) {
          localStorage.setItem('token', response.data.TOKEN);
        } else {
          sessionStorage.setItem('token', response.data.TOKEN);
        }
      } else if (response.data.MESSAGE === 'INVALID_USER') {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
    });
  };

  const reg_email =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  const isValidEmail = reg_email.test(signinForm.email);

  const signinBtn = isValidEmail && signinForm.password.length >= 1;

  return (
    <div className="wrap">
      <SignTitle title="로그인" />
      <div className="signin_info_wrap">
        <div className="login_logo">올마이투어 로고</div>
        <div className="input_box">
          <input
            type="text"
            name="email"
            onChange={handleInput}
            placeholder="아이디(이메일)"
          />
          <input
            type="password"
            name="password"
            onChange={handleInput}
            placeholder="비밀번호"
          />
        </div>
        <div className="login_state">
          <input
            type="checkbox"
            id="state_check"
            onChange={() => handleLoginStateCheck()}
            checked={isCheck}
          />
          <label htmlFor="state_check">
            <RadioBtn className={`${isCheck && 'chx_on'}`} />
            <span>로그인 상태 유지</span>
          </label>
        </div>
        <button
          className="button1 sign_btn"
          onClick={handleClickSignin}
          disabled={signinBtn ? '' : 'disabled'}
        >
          로그인
        </button>
        <ul className="find_join">
          <Link to="/findpassword" className="findpw">
            비밀번호 찾기
          </Link>
          <Link to="/signup" className="findpw">
            회원가입
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Signin;
