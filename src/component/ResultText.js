import React from 'react';

export const ResultText = ({ check, text, thing }) => {
  return (
    <p className={`check_text ${thing === 'error' && 'check_text_error'}`}>
      <img alt="체크 아이콘" src={check} />
      <span>{text}</span>
    </p>
  );
};

export default ResultText;
