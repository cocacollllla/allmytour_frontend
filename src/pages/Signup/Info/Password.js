import React from 'react';
import Pw from '../../../component/Pw';

export const Password = ({
  handleInput,
  signupForm,
  isValidPw,
  check,
  error,
}) => {
  return (
    <div className="input_wrap">
      <Pw
        title="비밀번호"
        handleInput={handleInput}
        passwordForm={signupForm}
        isValidPw={isValidPw}
        check={check}
        error={error}
      />
    </div>
  );
};

export default Password;
