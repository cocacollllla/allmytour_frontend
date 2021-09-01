import React, { useState } from 'react';
import SignupTerms from './SignupTerms';
import SIGNUP_TERMS from './SignupTermsData';
import { ReactComponent as RadioBtn } from '../../../assets/radio_none.svg';
import { ReactComponent as ArrowRight } from '../../../assets/arrow_right.svg';
import '../../../styles/styles.scss';

const CHECKBOX_INFO = [
  {
    id: 1,
    title: '[필수] 올마이스테이 이용약관 동의',
    subTitle: '서비스 이용약관',
    name: 'term',
    required: true,
    content: SIGNUP_TERMS.terms,
  },
  {
    id: 2,
    title: '[필수] 개인정보취급방침 동의',
    subTitle: '개인정보취급방침',
    name: 'privacy',
    required: true,
    content: SIGNUP_TERMS.privacy,
  },
  {
    id: 3,
    title: '[필수] 만 14세 이상입니다.',
    subTitle: '만 14세 이상',
    name: 'age',
    required: true,
    content: SIGNUP_TERMS.age,
  },
  {
    id: 4,
    title: '[선택] 마케팅 동의',
    subTitle: '마케팅 정보 수신',
    name: 'marketing',
    required: false,
    content: SIGNUP_TERMS.marketing,
  },
];

export const SignupTos = ({ handleClickInfoView }) => {
  const [checkItems, setCheckItems] = useState([]);
  const [onModal, setOnModal] = useState(false);
  const [checkId, setCheckId] = useState(1);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems([...checkItems, id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };

  const handleAllCheck = checked => {
    if (checked) {
      const idArray = [];
      CHECKBOX_INFO.forEach(el => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const requiredId = [];
  const result = CHECKBOX_INFO.filter(req => req.required);
  result.forEach(el => requiredId.push(el.id));

  const handleOnModal = id => {
    setOnModal(!onModal);
    setCheckId(id - 1);
  };

  const handleCloseModal = id => {
    setOnModal(false);
    setCheckItems([...checkItems, id + 1]);
  };

  return (
    <div className="tos_contents">
      <div className="tos_checkbox">
        <p>올마이투어 메이커스 서비스약관에 동의해주세요.</p>
        <div className="tos_chx_all">
          <label htmlFor="checkAll">
            <RadioBtn
              className={`${
                checkItems.length === CHECKBOX_INFO.length && 'chx_on'
              }`}
            />
          </label>

          <input
            id="checkAll"
            className="button"
            type="checkbox"
            name="checkAll"
            onChange={e => handleAllCheck(e.target.checked)}
            checked={checkItems.length === CHECKBOX_INFO.length}
          />
          <div className="chx_all_title">모두 동의합니다.</div>
          <p>
            선택 항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
            이용할 수 있습니다
          </p>
        </div>
        {CHECKBOX_INFO.map(chx => (
          <div className="tos_chx" key={chx.id}>
            <label htmlFor={chx.name}>
              <RadioBtn
                className={`${checkItems.includes(chx.id) && 'chx_on'}`}
              />
            </label>
            <input
              id={chx.name}
              type="checkbox"
              onChange={e => handleSingleCheck(e.target.checked, chx.id)}
              checked={checkItems.includes(chx.id)}
            />
            <div
              onClick={chx.id === 3 ? undefined : () => handleOnModal(chx.id)}
              className={`chx_title ${chx.id === 3 ? 'chx_title_age' : ''}`}
            >
              <div>{chx.title}</div>
              {chx.id === 3 ? null : <ArrowRight className="arrow_right" />}
            </div>
          </div>
        ))}
      </div>
      <button
        className="button1"
        type="submit"
        disabled={
          JSON.stringify(
            checkItems.filter(el => requiredId.indexOf(el) >= 0).sort()
          ) === JSON.stringify(requiredId)
            ? ''
            : 'disabled'
        }
        onClick={handleClickInfoView}
      >
        동의합니다
      </button>
      {onModal && (
        <SignupTerms
          closeModal={handleCloseModal}
          checkboxInfo={CHECKBOX_INFO}
          checkId={checkId}
        />
      )}
    </div>
  );
};

export default SignupTos;
