import React from 'react';
import PhoneCode from './PhoneCode';

export const PhoneNumber = ({
  handleInput,
  handleClickGetPhoneCode,
  isValidPhone,
  phoneCodebox,
  handleClickPostPhoneCode,
  checkPhoneCode,
  setTimer,
  timer,
  check,
  error,
}) => {
  const isPhoneCodeSuccess = checkPhoneCode === 'success';
  return (
    <div className="input_wrap">
      <div className="input_title">휴대폰</div>
      <div className="input_box">
        <input
          type="number"
          placeholder="휴대폰 번호를 입력해주세요"
          name="phone_number"
          autoComplete="off"
          onChange={handleInput}
          disabled={isPhoneCodeSuccess ? 'disabled' : ''}
          required
        />
        <button
          className={`button3 writing_btn ${phoneCodebox ? 'success_btn' : ''}`}
          onClick={handleClickGetPhoneCode}
          disabled={isValidPhone ? '' : 'disabled'}
        >
          번호전송
        </button>
      </div>
      {phoneCodebox && (
        <PhoneCode
          handleInput={handleInput}
          isValidPhone={isValidPhone}
          handleClickPostPhoneCode={handleClickPostPhoneCode}
          checkPhoneCode={checkPhoneCode}
          setTimer={setTimer}
          timer={timer}
          check={check}
          error={error}
        />
      )}
    </div>
  );
};

export default PhoneNumber;
