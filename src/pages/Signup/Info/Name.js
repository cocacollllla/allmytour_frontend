import React from 'react';

export const Name = ({ handleInput }) => {
  return (
    <div className="input_wrap">
      <div className="input_title">이름</div>
      <input
        type="text"
        name="name"
        placeholder="이름을 입력해주세요"
        onChange={handleInput}
        autoComplete="off"
        required
      />
    </div>
  );
};

export default Name;
