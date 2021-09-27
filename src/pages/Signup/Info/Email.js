import React from 'react';
import ResultText from '../../../component/ResultText';

export const Email = ({
  handleInput,
  checkEmail,
  handleClickEemailCheck,
  isValidEmail,
  check,
  error,
}) => {
  const isEmailSuccess = checkEmail === 'success';
  const isEmailError = checkEmail === 'error';

  const emailUse = () => {
    if (isEmailSuccess) {
      return <ResultText check={check} text="사용가능한 아이디입니다" />;
    } else if (isEmailError) {
      return (
        <ResultText
          check={error}
          thing="error"
          text="이미 가입되어있는 이메일 입니다"
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="input_wrap">
      <div className="input_title">아이디(이메일)</div>
      <p className="caption">
        비밀번호 분실시, 사용될 이메일입니다. <br />
        실제 사용가능한 이메일로 설정해주세요
      </p>
      <div className="input_btn_box">
        <input
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요"
          onChange={handleInput}
          autoComplete="off"
          disabled={isEmailSuccess ? 'disabled' : ''}
          required
        />
        <button
          type="button"
          onClick={handleClickEemailCheck}
          className={`button3 writing_btn ${
            isEmailSuccess ? 'success_btn' : ''
          }`}
          disabled={isValidEmail ? '' : 'disabled'}
        >
          중복확인
        </button>
      </div>
      {emailUse()}
    </div>
  );
};

export default Email;
