import React, { useState } from 'react';
import ResultText from './ResultText';
import { ReactComponent as Typechange } from '../assets/password_off.svg';

export const Pw = ({
  title,
  handleInput,
  passwordForm,
  isValidPw,
  check,
  error,
}) => {
  const [passwordType, setPasswordType] = useState('password');
  const [rePasswordType, setRePasswordType] = useState('password');

  const handleClickPwType = name => {
    if (name === 'pw') {
      setPasswordType(passwordType === 'password' ? 'text' : 'password');
    } else {
      setRePasswordType(rePasswordType === 'password' ? 'text' : 'password');
    }
  };

  const passwordUse = () => {
    if (passwordForm.pw.length >= 1) {
      if (isValidPw) {
        return <ResultText check={check} text="사용가능한 비밀번호 입니다" />;
      } else {
        return (
          <ResultText
            check={error}
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
    if (passwordForm.repw.length >= 1) {
      if (passwordForm.pw === passwordForm.repw) {
        return <ResultText check={check} text="비밀번호가 일치합니다" />;
      } else {
        return (
          <ResultText
            check={error}
            thing="error"
            text="비밀번호가 일치하지 않습니다"
          />
        );
      }
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="input_title">{title}</div>
      <p className="caption">
        *비밀번호는 6~16자의 대 소문자, 숫자를 사용하세요
      </p>
      <div className="input_box pw">
        <input
          type={passwordType}
          name="pw"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleInput}
          required
        />
        {passwordForm.pw.length >= 1 && (
          <Typechange
            className={`type_change ${
              passwordType === 'text' && 'type_change_on'
            }`}
            onClick={() => handleClickPwType('pw')}
          />
        )}
      </div>
      {passwordUse()}
      <div className="input_box pw">
        <input
          className="repwd"
          type={rePasswordType}
          name="repw"
          placeholder="비밀번호를 한번 더 재입력해주세요"
          onChange={handleInput}
          disabled={isValidPw ? '' : 'disabled'}
          required
        />
        {passwordForm.repw.length >= 1 && (
          <Typechange
            className={`type_change ${
              rePasswordType === 'text' && 'type_change_on'
            }`}
            onClick={() => handleClickPwType('repw')}
          />
        )}
      </div>
      {passwordSame()}
    </>
  );
};

export default Pw;
