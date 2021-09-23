import React, { useState } from 'react';
import axios from 'axios';
import Name from './Name';
import PhoneNumber from './PhoneNumber';
import Email from './Email';
import Password from './Password';
import Check from '../../../assets/check.svg';
import Error from '../../../assets/error.svg';
import '../../../styles/styles.scss';

export const SignupInfo = ({ history }) => {
  const [checkEmail, setCheckEmail] = useState('');
  const [checkPhoneCode, setCheckPhoneCode] = useState('');
  const [phoneCodebox, setPhoneCodeBox] = useState(false);
  const [timer, setTimer] = useState(false);
  // const [passwordType, setPasswordType] = useState({
  //   type: 'password',
  //   which: '',
  // });
  const [passwordType, setPasswordType] = useState('password');
  const [rePasswordType, setRePasswordType] = useState('password');

  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    pw: '',
    repw: '',
    phone_number: 0,
    phone_code: 0,
  });

  const handleClickPwType = name => {
    if (name === 'pw') {
      setPasswordType(passwordType === 'password' ? 'text' : 'password');
    } else {
      setRePasswordType(rePasswordType === 'password' ? 'text' : 'password');
    }
  };

  const handleInput = e => {
    const { value, name } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const reg_email =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  const reg_pw =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const reg_phone =
    /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

  const isValidEmail = reg_email.test(signupForm.email);
  const isValidPw = reg_pw.test(signupForm.pw);
  const isValidPhone = reg_phone.test(signupForm.phone_number);

  let pwdsame;
  if (signupForm.pw.length >= 1) {
    if (signupForm.pw === signupForm.repw) {
      pwdsame = true;
    }
  }
  const signupBtn =
    signupForm.name.length >= 1 &&
    pwdsame &&
    checkEmail === 'success' &&
    checkPhoneCode === 'success';

  const handleClickEemailCheck = () => {
    axios
      .post('http://192.168.11.189:8000/users/email', {
        email: signupForm.email,
      })
      .then(function (response) {
        setCheckEmail('success');
      })
      .catch(function (error) {
        setCheckEmail('error');
      });
  };

  const handleClickSignup = e => {
    e.preventDefault();
    axios
      .post('http://192.168.11.189:8000/users/signup', {
        name: signupForm.name,
        email: signupForm.email,
        password: signupForm.pw,
        phone_number: signupForm.phone_number,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.TOKEN) {
          localStorage.setItem('token', response.data.TOKEN);
          history.push('/signupdone');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClickGetPhoneCode = () => {
    axios
      .post('http://192.168.11.189:8000/users/sms', {
        phone_number: signupForm.phone_number,
      })
      .then(function (response) {
        setPhoneCodeBox(true);
        setTimer(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClickPostPhoneCode = () => {
    axios
      .post('http://192.168.11.189:8000/users/sms-verification', {
        phone_number: signupForm.phone_number,
        auth_number: signupForm.phone_code,
      })
      .then(function (response) {
        if (response.data.MESSAGE === 'SUCCESS') {
          setCheckPhoneCode('success');
        }
      })
      .catch(function (error) {
        if (error.response.data.MESSAGE === 'INVALID_AUTH_NUMBER') {
          setCheckPhoneCode('invalid');
        } else if (error.response.data.MESSAGE === 'EXPIRED_CODE') {
          setCheckPhoneCode('expired');
        }
      });
  };

  return (
    <div className="signup_info_wrap">
      <form onSubmit={handleClickSignup}>
        <Name handleInput={handleInput} />
        <PhoneNumber
          handleInput={handleInput}
          handleClickGetPhoneCode={handleClickGetPhoneCode}
          isValidPhone={isValidPhone}
          phoneCodebox={phoneCodebox}
          setTimer={setTimer}
          timer={timer}
          handleClickPostPhoneCode={handleClickPostPhoneCode}
          checkPhoneCode={checkPhoneCode}
          check={Check}
          error={Error}
        />
        <Email
          handleInput={handleInput}
          checkEmail={checkEmail}
          handleClickEemailCheck={handleClickEemailCheck}
          isValidEmail={isValidEmail}
          check={Check}
          error={Error}
        />
        <Password
          handleInput={handleInput}
          passwordType={passwordType}
          rePasswordType={rePasswordType}
          signupForm={signupForm}
          handleClickPwType={handleClickPwType}
          isValidPw={isValidPw}
          check={Check}
          error={Error}
        />

        <button
          type="submit"
          className="button1 signup_btn"
          // onClick={handleClickSignup}
          disabled={signupBtn ? '' : 'disabled'}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignupInfo;
