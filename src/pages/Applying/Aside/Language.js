import React, { useState, useEffect } from 'react';
import '../../../styles/page/_Language.scss';
import Delete from '../../../assets/delete.svg';
import { LANGUAGE_DATA } from './LANGUAGE_DATA';
import axios from 'axios';

export default function Language({ selected, setSelected }) {
  const handleSelect = e => {
    const selectedArr = selected.concat(e.target.value);
    const set = new Set(selectedArr);
    const uniqueArr = [...set];
    setSelected(uniqueArr);
  };

  const handleRemove = lan => {
    setSelected(selected.filter(info => info !== lan));
  };

  useEffect(() => {
    const languageList = [...selected];
    const lanFormData = new FormData();
    languageList.forEach(item => {
      lanFormData.append('languageList[]', item);
    });
    console.log('language확인 중', lanFormData);
    // axios.post('주소', lanFormData);
  }, [selected]);

  return (
    <div className="available_language_wrap">
      <div className="language_category">
        <div className="language_title">사용가능한 언어</div>
        <span className="language_des_1">
          중복선택가능 <span className="ico">*</span>
        </span>
      </div>
      <form className="language_option_wrap">
        <select
          className="lagnuage_option_box"
          value={selected}
          onChange={handleSelect}
        >
          <option value="" disabled selected>
            사용가능한 언어를 선택해주세요
          </option>
          {LANGUAGE_DATA.languageInfo.map((option, id) => {
            return (
              <>
                <option key={id} content={option.content}>
                  {option.content}
                </option>
              </>
            );
          })}
          ;
        </select>
        <div className="chosen_language_wrap">
          {selected.map((lan, idx) => (
            <>
              <div
                className={`chosen_language_category ${
                  lan === '기타언어' ? 'active_chosen_language_category' : ''
                }`}
                key={idx}
              >
                <div className="chosen_language">
                  {lan}
                  <div
                    className="remove_lan_option"
                    onClick={() => {
                      handleRemove(lan);
                    }}
                  >
                    <img className="delete_mark" src={Delete} alt="delete" />
                  </div>
                </div>
              </div>
              <div>
                {lan === '기타언어' ? (
                  <input
                    className="others"
                    placeholder="기타언어를 입력해주세요"
                  />
                ) : null}
              </div>
            </>
          ))}
        </div>
      </form>
    </div>
  );
}
