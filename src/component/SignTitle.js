import React from 'react';
import ArrowBack from '../assets/arrow_back.svg';
import '../styles/styles.scss';

export const SignTitle = ({ title, isView, type }) => {
  return (
    <div className="title_wrap">
      <img alt="뒤로가기" src={ArrowBack} />
      <div className="signup_title">{title}</div>
      {type === 'terms' && (
        <div className={`signup_tab_btns ${isView && 'button_active'}`}>
          <div className={isView ? 'tabOff' : 'tabOn'}>약관동의</div>
          <div className={isView ? 'tabOn' : 'tabOff'}>정보등록</div>
        </div>
      )}
    </div>
  );
};

export default SignTitle;
