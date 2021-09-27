import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SignTitle from '../../component/SignTitle';
import Pw from '../../component/Pw';
import Check from '../../assets/check.svg';
import Error from '../../assets/error.svg';
import Instance from '../../axios';
import '../../styles/styles.scss';

export const NewPassword = ({ history }) => {
  const [newPassword, setNewPassword] = useState({
    pw: '',
    repw: '',
  });

  const { token } = useParams();

  const handleInput = e => {
    const { value, name } = e.target;
    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };

  const handleClickPassword = e => {
    e.preventDefault();

    Instance.patch(`/users/reset`, {
      token: token,
      password: newPassword.pw,
      new_password: newPassword.repw,
    }).then(response => {
      if (response.data.MESSAGE === 'PASSWORD_CHANGED') {
        alert('비밀번호가 변경되었습니다.');
        history.push('/signin');
      } else if (response.data.MESSAGE === 'LINK_EXPIRED') {
        alert(
          '이메일 인증 유효 시간이 만료되었습니다. 가입하신 이메일로 인증을 다시 진행해주세요.'
        );
        history.push('/findpassword');
      }
    });
  };

  const reg_pw =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const isValidPw = reg_pw.test(newPassword.pw);

  const pwBtn = isValidPw && newPassword.pw === newPassword.repw;

  return (
    <div className="wrap">
      <SignTitle title="비밀번호 찾기" />
      <div className="signin_info_wrap">
        <div className="input_wrap">
          <p className="big_title">
            이메일 인증이 완료되었습니다.
            <br />
            새로운 비밀번호를 입력해 주세요.
          </p>

          <Pw
            title="새로운 비밀번호"
            handleInput={handleInput}
            passwordForm={newPassword}
            isValidPw={isValidPw}
            check={Check}
            error={Error}
          />

          <button
            className="button1 sign_btn password_btn"
            onClick={handleClickPassword}
            disabled={pwBtn ? '' : 'disabled'}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
