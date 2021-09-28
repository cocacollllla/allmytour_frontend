import React, { useState, useRef, useEffect } from 'react';
import '../../../styles/page/_Certificate.scss';
import Delete from '../../../assets/delete.svg';
import Dot from '../../../assets/dot.svg';
import Plus from '../../../assets/plus.svg';
import { CERTIFICATE_DATA } from './CERTIFICATE_DATA';
import axios from 'axios';

export default function Language({ optionSelected, setOptionSelected }) {
  const buttonRef = useRef(null);
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState(null);

  var bodyFormData = new FormData();
  bodyFormData.append('license_image’', optionSelected);

  const handleOptionSelect = e => {
    setOptionSelected(optionSelected.concat(e.target.value));
    const selectedArr = optionSelected.concat(e.target.value);
    const set = new Set(selectedArr);
    const uniqueArr = [...set];
    setOptionSelected(uniqueArr);
  };

  const handleOptionRemove = options => {
    setOptionSelected(optionSelected.filter(info => info !== options));
  };

  useEffect(() => {
    const certificateList = [...optionSelected];
    const cerFormData = new FormData();
    certificateList.forEach(item => {
      cerFormData.append('certificateList[]', item);
    });
    console.log('lcertificate확인 중', cerFormData);
    // axios.post('주소', lanFormData);
  }, [optionSelected]);

  return (
    <div className="certificate_option_wrap">
      <select
        className="certificate_option_box"
        value={optionSelected}
        onChange={handleOptionSelect}
      >
        <option value="" selected>
          증빙서류를 선택해주세요
        </option>
        {CERTIFICATE_DATA.certificateInfo.map((option, index) => {
          return (
            <>
              <option key={index} value={option.content}>
                {option.content}
              </option>
            </>
          );
        })}
        ;
      </select>

      {optionSelected.length === 0 ? null : (
        <div className="chosen_certificate_icons">
          {optionSelected.map((el, index) => (
            <>
              <div key={index}>
                <div className="chosen_certificate">
                  {el}
                  <div
                    className="remove_cer_option"
                    onClick={() => {
                      handleOptionRemove(el);
                    }}
                  >
                    <img
                      className="cert_delete_mark"
                      src={Delete}
                      alt="delete"
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      )}

      <div className="detail_info_wrap">
        <div className="img_detail_des_1">
          <img
            className="dot_image"
            src={Dot}
            alt="dots"
            height="24"
            width="24"
          />
          최신 버전의 자격증 사본을 제출하세요.
        </div>
        <div className="img_detail_des_2">
          <img
            className="dot_image"
            src={Dot}
            alt="dots"
            height="24"
            width="24"
          />
          JPG, JPEG, PNG, PDF / 10MB 이하 파일 1개만 업로드 가능합니다.
        </div>
      </div>
      {optionSelected.length === 0 ? null : (
        <div className="file_uploading_wrap">
          <input
            type="file"
            multiple="multiple"
            ref={buttonRef}
            style={{ display: 'none' }}
            className="certificate_input"
            type="file"
            accept="image/jpg, image/jpeg, image/png, .pdf"
          />
          <form method="post" enctype="multipart/form-data">
            <button
              type="button"
              className="button4"
              onClick={() => {
                buttonRef.current.click();
              }}
            >
              이미지파일 업로드
            </button>
            <img
              className="plus_emoticon"
              src={Plus}
              alt="plus emoticon"
              heigth="44"
              width="44"
              onClick={() => {
                buttonRef.current.click();
              }}
            />
          </form>
        </div>
      )}
    </div>
  );
}

{
  /* <div className="submitted_certificate_icons">
  {test.licenses.map((el, index) => (
    <>
      <div key={index}>
        <div className="submitted_certificate">{el.license}</div>
      </div>
    </>
  ))}
</div>; */
}
