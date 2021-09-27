import React, { useEffect, useState, useRef } from 'react';
import '../../../styles/page/_Profile.scss';
import Camera from '../../../assets/camera.svg';
import Trash from '../../../assets/trash.svg';
import Dot from '../../../assets/dot.svg';
import File from '../../../assets/file.svg';

export default function Profile({ test, imgFile, setImgFile }) {
  const buttonRef = useRef(null);
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [imgBase64, setImgBase64] = useState('');
  const [fileTest, setFileTest] = useState(null); // 미리보기를 구현하기 위해서 이미지 데이터를 받을 스테이트

  var bodyFormDatas = new FormData();
  bodyFormDatas.append('profile_image', imgFile);

  const imgChangedHandler = e => {
    e.preventDefault();
    const img = e.target.files[0];
    const bodyFormData = new FormData();
    console.log(img);

    if (e.target.files[0] !== undefined) {
      setFileTest(e.target.files[0]);
      setFileName(e.target.files[0].name);
      setFileSize(e.target.files[0].size);
    }
    // bodyFormData.append('profile_image', imgFile);
    // for (const keyValue of formData) console.log(keyValue);

    let reader = new FileReader(); //해당 파일 리더를 통해서 파일 정보읽음
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result; //파일을 비트맵 데이터를 리턴, 해당 데이터를 통해서 파일 미리보기가 가능

      if (base64) {
        setImgBase64(base64.toString()); // 비트맵 데이터를 저장 가능하도록 스트링으로 바꾼다
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 해당 코드로 파일의 정보를 입력
      // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(e.target.files[0]); // 파일 상태 업데이트
    }
  };

  // 이미지가 100kb를 초과할 시,  alert창을 보여주고 이미지 업로드를 null 처리
  useEffect(() => {
    if (fileSize > 100000) {
      setFileName(null);
      alert('100KB 이하 파일만 첨부 가능합니다.');
    }
  }, [fileSize]);

  // 사진 크기
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
      <div className="profile_image_wrap">
        <div className="category_profile_image">
          <div className="profile_image">
            프로필 이미지<span className="ico">*</span>
          </div>
          <div className="image_desc">
            메이커 본인 확인을 위해 창작자 개인이나 팀의 사진을 올려주세요.
            <br />
            추후 상품 업로드 시, 수정가능 합니다.
          </div>
        </div>
        <div className="image_category_wrap">
          <div className="preview_image">
            {fileName == null ? (
              test.profile_image == null ? (
                <img
                  className="camera_image"
                  src={Camera}
                  heigth="44"
                  width="44"
                />
              ) : (
                <img
                  className="selected_profile_preview"
                  src={`http://49.50.174.75:8000${test.profile_image}`}
                  heigth="165.2"
                  width="157.3"
                />
              )
            ) : (
              <img
                className="maker_profile_preview"
                src={imgBase64}
                alt="camera"
                heigth="165.2"
                width="157.3"
              />
            )}
          </div>
          <div className="button_whole_wrap">
            <input
              ref={buttonRef}
              style={{ display: 'none' }}
              className="makers_image_input"
              type="file"
              accept="image/jpg, image/jpeg, image/png, .pdf"
              onChange={imgChangedHandler}
              name="keyword"
              id="keyword"
            />
            {fileName == null ? (
              test.profile_image == null ? (
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
                          수정을 원하시면 클릭해 주세요
                        </div>
                      </div>
                      <div className="btn_right">
                        <img
                          className="trash_img"
                          src={Trash}
                          alt="trash"
                          onClick={() => {
                            buttonRef.current.click();
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
                    id="attatched_img_info_wrap"
                    className="button1"
                    type="button"
                  >
                    <div className="attached_img_info">
                      <div className="btn_left">
                        <img className="maker_img" src={File} alt="file" />
                        <div className="img_name">{fileName}</div>
                      </div>
                      <div className="btn_right">
                        <div className="img_size">{niceBytes(fileSize)}</div>
                      </div>
                    </div>
                  </button>
                  <img
                    className="trash_img"
                    src={Trash}
                    alt="trash"
                    onClick={() => {
                      return setFileName(null);
                    }}
                  />
                </div>
              </>
            )}

            <div className="img_detail_des_1">
              <img
                className="dot_image"
                src={Dot}
                alt="dots"
                height="24"
                width="24"
              />
              240px*240px 이미지를 업로드 해주세요.
            </div>
            <div className="img_detail_des_2">
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
