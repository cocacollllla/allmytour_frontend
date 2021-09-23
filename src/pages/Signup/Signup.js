import React, { useState } from 'react';
import SignTitle from '../../component/SignTitle';
import SignupTos from './Terms/SigntupTos';
import SignupInfo from './Info/SignupInfo';
import '../../styles/styles.scss';

export const Signup = ({ history }) => {
  const [isView, setIsview] = useState(false);

  const handleClickInfoView = () => {
    setIsview(true);
  };

  return (
    <div className="wrap">
      <SignTitle title="회원가입" type="terms" isView={isView} />
      {isView ? (
        <SignupInfo history={history} />
      ) : (
        <SignupTos handleClickInfoView={handleClickInfoView} />
      )}
    </div>
  );
};

export default Signup;
