import React from 'react';
import SignTitle from '../../../component/SignTitle';
import '../../../styles/styles.scss';

export const SignupTerms = ({ closeModal, checkboxInfo, checkId }) => {
  return (
    <div className="signup_terms">
      <SignTitle title={checkboxInfo[checkId].subTitle} />
      <div className="terms_contents">
        <div>{checkboxInfo[checkId].content}</div>
        <button onClick={() => closeModal(checkId)}>동의합니다</button>
        <div className="gradient_box"></div>
      </div>
    </div>
  );
};

export default SignupTerms;
