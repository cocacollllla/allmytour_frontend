import React, { useState, useEffect, useRef } from 'react';
import ResultText from '../../../component/ResultText';
import Timer from './Timer';
import '../../../styles/styles.scss';

export const PhoneCode = ({
  handleInput,
  handleClickPostPhoneCode,
  isValidPhone,
  checkPhoneCode,
  setTimer,
  timer,
  check,
  error,
}) => {
  const [timeEnd, setTimeEnd] = useState('');
  const isPhoneCodeSuccess = checkPhoneCode === 'success';
  const isPhoneCodeInvalid = checkPhoneCode === 'invalid';
  const isPhoneCodeExpired = checkPhoneCode === 'expired';

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const checkPhonecodeText = () => {
    if (isPhoneCodeSuccess) {
      return <ResultText check={check} text="본인인증이 완료되었습니다" />;
    } else if (isPhoneCodeInvalid) {
      return (
        <ResultText
          check={error}
          thing="error"
          text="잘못된 인증코드입니다. 다시 입력해주세요"
        />
      );
    } else if (isPhoneCodeExpired) {
      if (timer) {
        return null;
      }
      return (
        <ResultText
          check={error}
          thing="error"
          text="인증시간이 만료되어 전송된 코드 입니다. 다시 시도해 주세요."
        />
      );
    } else if (
      timeEnd === 'timeEnd' ||
      (timeEnd === 'timeEnd' && isPhoneCodeExpired)
    ) {
      if (timer) {
        return null;
      }
      return (
        <ResultText
          check={error}
          thing="error"
          text="인증시간이 만료되었습니다. 다시 시도해 주세요."
        />
      );
    }
  };

  return (
    <>
      <div className="input_box">
        <div className="input_timer">
          <input
            type="number"
            placeholder="인증코드를 입력해주세요"
            name="phone_code"
            autoComplete="off"
            onChange={handleInput}
            disabled={isPhoneCodeSuccess && 'disabled'}
            required
            ref={inputRef}
          />
          {timer && (
            <Timer
              setTimer={setTimer}
              timeEnd={timeEnd}
              setTimeEnd={setTimeEnd}
              isPhoneCodeSuccess={isPhoneCodeSuccess}
            />
          )}
        </div>
        <button
          type="button"
          className={`button3 writing_btn ${
            isPhoneCodeSuccess && 'success_btn'
          }`}
          onClick={handleClickPostPhoneCode}
          disabled={isValidPhone ? '' : 'disabled'}
        >
          {isPhoneCodeSuccess ? '인증완료' : '인증하기'}
        </button>
      </div>
      {checkPhonecodeText()}
    </>
  );
};

export default PhoneCode;
