import React from 'react';
import ResultText from '../../../component/ResultText';
import { ReactComponent as Typechange } from '../../../assets/password_off.svg';

export const Password = ({
  handleInput,
  passwordType,
  rePasswordType,
  signupForm,
  handleClickPwType,
  isValidPw,
  check,
  error,
}) => {
  const passwordUse = () => {
    if (signupForm.pw.length >= 1) {
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
    if (signupForm.repw.length >= 1) {
      if (signupForm.pw === signupForm.repw) {
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
    <div className="input_wrap">
      <div className="input_title">비밀번호</div>
      <p className="caption">
        *비밀번호는 6~16자의 대 소문자, 숫자를 사용하세요
      </p>
      <div className="pw">
        <input
          // type={passwordType.which === 'pw' ? passwordType.type : 'password'}
          type={passwordType}
          name="pw"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleInput}
          required
        />
        {signupForm.pw.length >= 1 && (
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
          // type={passwordType.which === 'repw' ? passwordType.type : 'password'}
          type={rePasswordType}
          name="repw"
          placeholder="비밀번호를 한번 더 재입력해주세요"
          onChange={handleInput}
          disabled={isValidPw ? '' : 'disabled'}
          required
        />
        {signupForm.repw.length >= 1 && (
          <Typechange
            className={`type_change ${
              rePasswordType === 'text' && 'type_change_on'
            }`}
            onClick={() => handleClickPwType('repw')}
          />
        )}
      </div>
      {passwordSame()}
    </div>
  );
};

export default Password;
