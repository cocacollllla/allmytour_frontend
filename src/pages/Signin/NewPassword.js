import React, { useState } from 'react';
import axios from 'axios';
import SignTitle from '../../component/SignTitle';
import ResultText from '../../component/ResultText';
import { ReactComponent as Typechange } from '../../assets/password_off.svg';
import Check from '../../assets/check.svg';
import Error from '../../assets/error.svg';
import { API } from '../../config';
import '../../styles/styles.scss';

export const NewPassword = ({ history }) => {
  const [newPassword, setNewPassword] = useState({
    pw: '',
    repw: '',
  });
  const [passwordType, setPasswordType] = useState('password');
  const [rePasswordType, setRePasswordType] = useState('password');

  const handleInputPassword = e => {
    const { value, name } = e.target;
    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };

  const handleClickPwType = name => {
    if (name === 'pw') {
      setPasswordType(passwordType === 'password' ? 'text' : 'password');
    } else {
      setRePasswordType(rePasswordType === 'password' ? 'text' : 'password');
    }
  };

  const passwordUse = () => {
    if (newPassword.pw.length >= 1) {
      if (isValidPw) {
        return <ResultText check={Check} text="사용가능한 비밀번호 입니다" />;
      } else {
        return (
          <ResultText
            check={Error}
            thing="error"
            text="사용 불가능한 비밀번호 입니다"
          />
        );
      }
    } else {
      return null;
    }
  };

  const passwordSame = () => {
    if (newPassword.repw.length >= 1) {
      if (newPassword.pw === newPassword.repw) {
        return <ResultText check={Check} text="비밀번호가 일치합니다" />;
      } else {
        return (
          <ResultText
            check={Error}
            thing="error"
            text="비밀번호가 일치하지 않습니다"
          />
        );
      }
    } else {
      return null;
    }
  };

  const handleClickPassword = e => {
    e.preventDefault();
    axios
      .patch(`${API.FIND_PASSWORD}`, {
        token: localStorage.getItem('token'),
        password: newPassword.pw,
        new_password: newPassword.repw,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.MESSAGE === 'PASSWORD_CHANGED') {
          alert('비밀번호가 변경되었습니다.');
          history.push('/signin');
        } else if (response.data.MESSAGE === 'LINK_EXPIRED') {
          alert(
            '이메일 인증 유효 시간이 만료되었습니다. 가입하신 이메일로 인증을 다시 진행해주세요.'
          );
          history.push('/findpassword');
        }
      })
      .catch(function (error) {
        console.log(error);
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
          <div className="input_title">새로운 비밀번호</div>
          <p className="caption">
            *비밀번호는 6~16자의 대 소문자, 숫자를 사용하세요
          </p>
          <div className="pw">
            <input
              type={passwordType}
              name="pw"
              placeholder="비밀번호를 입력해주세요"
              onChange={handleInputPassword}
              required
            />
            {newPassword.pw.length >= 1 && (
              <Typechange
                className={`type_change ${
                  passwordType === 'text' && 'type_change_on'
                }`}
                onClick={() => handleClickPwType('pw')}
              />
            )}
          </div>
          {passwordUse()}
          <div className="pw">
            <input
              className="repwd"
              type={rePasswordType}
              name="repw"
              placeholder="비밀번호를 한번 더 재입력해주세요"
              onChange={handleInputPassword}
              disabled={isValidPw ? '' : 'disabled'}
              required
            />
            {newPassword.repw.length >= 1 && (
              <Typechange
                className={`type_change ${
                  rePasswordType === 'text' && 'type_change_on'
                }`}
                onClick={() => handleClickPwType('repw')}
              />
            )}
          </div>
          {passwordSame()}
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
