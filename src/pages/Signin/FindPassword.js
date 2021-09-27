import React, { useState } from 'react';
import SignTitle from '../../component/SignTitle';
import ResultText from '../../component/ResultText';
import Check from '../../assets/check.svg';
import Error from '../../assets/error.svg';
import Instance from '../../axios';
import '../../styles/styles.scss';

export const FindPassword = () => {
  const [sendEmail, setSendEmail] = useState('');
  const [checkBtn, setCheckBtn] = useState('');

  const handleChangeEmail = e => {
    setSendEmail(e.target.value);
  };

  const handleClickSendEmail = e => {
    e.preventDefault();

    Instance.post(`/users/reset`, {
      email: sendEmail,
    }).then(response => {
      if (response.data.MESSAGE === 'EMAIL_SENDED') {
        setCheckBtn('success');
      } else if (response.data.MESSAGE === 'EMAIL_DOSENT_EXIST') {
        setCheckBtn('email_dosent_exist');
      }
    });
  };

  const emailResult = () => {
    if (checkBtn === 'email_dosent_exist') {
      return (
        <ResultText
          check={Error}
          thing="error"
          text="가입된 이메일이 아닙니다."
        />
      );
    } else if (checkBtn === 'success') {
      return (
        <ResultText
          check={Check}
          thing="check"
          text="이메일이 발송되었습니다."
        />
      );
    } else {
      return null;
    }
  };

  const reg_email =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  const isValidEmail = reg_email.test(sendEmail);

  const check_success = checkBtn === 'success';

  return (
    <div className="wrap">
      <SignTitle title="비밀번호 찾기" />
      <div className="signin_info_wrap">
        <div className="input_wrap">
          <p className="big_title">
            비밀번호 재설정을 위해 <br />
            이메일 인증을 진행합니다.
          </p>
          <div className="input_title">아이디(이메일)</div>
          <div className="input_btn_box">
            <input
              type="text"
              name="email"
              placeholder="아이디(이메일)"
              onChange={handleChangeEmail}
            />
            <button
              className={`button3 writing_btn ${
                check_success ? 'success_btn' : ''
              }`}
              onClick={handleClickSendEmail}
              disabled={isValidEmail ? '' : 'disabled'}
            >
              인증하기
            </button>
          </div>
          {emailResult()}
          <ul className="find_pw_caption">
            <li>입력한 이메일 주소로 인증번호가 발송됩니다.</li>
            <li>인증번호가 오지 않는다면 스팸 차단 여부를 확인해주세요.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FindPassword;
