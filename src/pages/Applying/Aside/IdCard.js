import React, { useState, useRef, useEffect } from 'react';
import '../../../styles/page/_IdCard.scss';
import Camera from '../../../assets/camera.svg';
import Dot from '../../../assets/dot.svg';
import Trash from '../../../assets/trash.svg';
import File from '../../../assets/file.svg';
import axios from 'axios';

export default function IdCard({ test, idFile, setIdFile }) {
  const buttonRef = useRef(null);
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [imgBase64, setImgBase64] = useState(''); // 파일 base64

  var bodyFormData = new FormData();
  bodyFormData.append('id_image', idFile);

  const fileChangedHandler = e => {
    const img = e.target.files[0];
    const formData = new FormData();

    //파일이 있는경우만 파일에 0번을 불러올 수 있게 설정
    if (e.target.files[0] !== undefined) {
      setFileName(e.target.files[0].name);
      setFileSize(e.target.files[0].size);
    }

    formData.append('img', img);
    // for (const keyValue of formData) console.log(keyValue);

    let reader = new FileReader();
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setIdFile(e.target.files[0]); // 파일 상태 업데이트
    }

    e.preventDefault();
  };

  // 이미지가 100kb를 초과할 시,  alert창을 보여주고 이미지 업로드를 null 처리
  useEffect(() => {
    if (fileSize > 100000) {
      setFileName(null);
      alert('100KB 이하 파일만 첨부 가능합니다.');
    }
  }, [fileSize]);

  const units = ['bytes', 'KB'];
  function niceBytes(x) {
    let l = 0,
      n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
      n = n / 1024;
    }
    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
  }

  return (
    <form method="post" enctype="multipart/form-data">
      <div className="idcard_image_wrap">
        <div className="idcard_category">
          <div className="idcard_title">신분증</div>
          <div className="idcard_desc">
            메이커 본인 확인을 위해 대표 구성원 1인의 신분증 사본을 등록해주세요
          </div>
        </div>
        <div className="uploading_id_category">
          <div className="preview_id_image">
            {fileName == null ? (
              test.id_image == null ? (
                <img
                  className="camera_square_image"
                  src={Camera}
                  alt="pdf파일은 미리보기를 지원하지 않습니다."
                  heigth="44"
                  width="44"
                />
              ) : (
                <img
                  className="selected_profile_preview"
                  src={`http://49.50.174.75:8000${test.id_image}`}
                  heigth="165.2"
                  width="157.3"
                />
              )
            ) : (
              <img
                className="id_preview"
                src={imgBase64}
                alt="camera"
                heigth="165.2"
                width="157.3"
              />
            )}
          </div>
          <div className="uploading_id_image">
            <input
              ref={buttonRef}
              style={{ display: 'none' }}
              className="id_image_input"
              type="file"
              accept="image/jpg, image/jpeg, image/png, .pdf"
              onChange={fileChangedHandler}
            />
            {fileName == null ? (
              test.id_image == null ? (
                <button
                  type="button"
                  className="button3"
                  onClick={() => {
                    buttonRef.current.click();
                  }}
                >
                  이미지파일 업로드
                </button>
              ) : (
                <>
                  <button
                    id="attatched_img_info_wrap"
                    className="button1"
                    type="button"
                    onClick={() => {
                      buttonRef.current.click();
                    }}
                  >
                    <div className="attached_img_info">
                      <div className="btn_left">
                        <img className="maker_img" src={File} alt="file" />
                        <div className="img_name">
                          수정을 원하시면 클릭해주세요
                        </div>
                      </div>
                      <div className="btn_right">
                        <img
                          className="trash_img"
                          src={Trash}
                          alt="trash"
                          onClick={() => {
                            setIdFile.name(null);
                          }}
                        />
                      </div>
                    </div>
                  </button>
                </>
              )
            ) : (
              <>
                <div
                  onClick={() => {
                    buttonRef.current.click();
                  }}
                >
                  <button
                    id="attatched_id_info_wrap"
                    className="button1"
                    type="button"
                  >
                    <div className="attached_id_info">
                      <div className="btn_left_info">
                        <img className="file_image" src={File} alt="file" />
                        <div className="file_name">{fileName}</div>
                      </div>
                      <div className="btn_right_info">
                        <div className="file_size">{niceBytes(fileSize)}</div>
                        <img
                          className="trash_emoticon"
                          src={Trash}
                          alt="trash"
                          onClick={() => {
                            return setFileName(null);
                          }}
                        />
                      </div>
                    </div>
                  </button>
                </div>
              </>
            )}
            <div className="id_des_1">
              <img
                className="dot_image"
                src={Dot}
                alt="dots"
                height="24"
                width="24"
              />
              JPG, JPEG, PNG, PDF/100KB 이하 파일 1개만 업로드 가능합니다.
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
