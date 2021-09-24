import React, { useState, useEffect } from 'react';
import '../../styles/styles.scss';
import ArrowBack from '../../assets/arrow_back.svg';
import Question from '../../assets/question.svg';
import Language from './Aside/Language.js';
// import Certificate from './Aside/Certificate';
// import IdCard from './Aside/IdCard';
import Profile from './Aside/Profile';
import axios from 'axios';

const Applying = () => {
  const [nameValue, setNameValue] = useState('');
  const [nickValue, setNickValue] = useState('');
  const [profileValue, setProfileValue] = useState('');
  const [igValue, setIgValue] = useState('');
  const [fbValue, setFbValue] = useState('');
  const [ytValue, setYtValue] = useState('');
  const [selected, setSelected] = useState([]);
  const [optionSelected, setOptionSelected] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const [idFile, setIdFile] = useState(null);

  const handleInputChange = e => {
    setNameValue(e.target.value);
  };
  const handleNickInputChange = e => {
    setNickValue(e.target.value);
  };
  const handleProfileChange = e => {
    setProfileValue(e.target.value);
  };
  const handleIgInputChange = e => {
    setIgValue(e.target.value);
  };
  const handleFbInputChange = e => {
    setFbValue(e.target.value);
  };
  const handleYtInputChange = e => {
    setYtValue(e.target.value);
  };

  var bodyFormData = new FormData();
  bodyFormData.append('name', nameValue);
  bodyFormData.append('nickname', nickValue);
  bodyFormData.append('description', profileValue);
  bodyFormData.append('license', optionSelected);
  bodyFormData.append('language', selected);
  bodyFormData.append('profile_image', imgFile);
  bodyFormData.append('instagram', `https://www.instagram.com/${igValue}`);
  bodyFormData.append('facebook', `https://www.facebook.com/${fbValue}`);
  bodyFormData.append('youtube', `https://www.youtube.com/${ytValue}`);

  useEffect(() => {
    localStorage.setItem(
      'Authorization',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.AAUvuGFBywoCVienbd_V2OHj4ZXWsOQxO9Zoi5JbVhQ'
    );
  }, []);

  const handleValueChange = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://192.168.0.127:8000/makers',
      data: bodyFormData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.AAUvuGFBywoCVienbd_V2OHj4ZXWsOQxO9Zoi5JbVhQ',
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    sessionStorage.setItem('name', nameValue);
    sessionStorage.setItem('nickname', nickValue);
    sessionStorage.setItem('description', profileValue);
    sessionStorage.setItem('instagram', igValue);
    sessionStorage.setItem('faecbook', fbValue);
    sessionStorage.setItem('youtube', ytValue);
    sessionStorage.setItem('language', selected);
    sessionStorage.setItem('license', optionSelected);
  };

  // =================================>  메이커스 지원서 제출 버튼

  const handleSubmitChange = e => {
    e.preventDefault();
    if (
      nameValue.length > 1 &&
      nickValue.length > 1 &&
      profileValue.length > 1 &&
      (igValue.length > 1 || fbValue.length > 1 || ytValue.length > 1) &&
      selected !== [] &&
      optionSelected !== [] &&
      imgFile !== null
    ) {
      axios({
        method: 'post',
        url: 'http://192.168.0.127:8000/makers',
        data: bodyFormData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6M30.AAUvuGFBywoCVienbd_V2OHj4ZXWsOQxO9Zoi5JbVhQ',
        },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert('노노');
    }
  };

  // 임시저장된 데이터 불러오기! 만약 저장된 값이랑 지금값이 다르면 지금 값 저장해주기
  // useEffect(() => {
  //   axios
  //     .get('http://192.168.11.72:8000/makers')
  //     .then(response => bodyFormData(response.data));
  // }, []);

  // 그런데 만약 만약 저장된 값이랑 지금값이 다르면 지금 값 저장해주기! (나는
  //  오브젝트가 아니라  JSON으로 변경해줄 필요 없음!)
  //   componentDidUpdate(prevProps, prevState) {   // 컴포넌트가 업데이트될 때마다 실행되는 API
  //     if (JSON.stringify(prevState.contactData) != JSON.stringify(this.state.contactData)) {  // 이전 값과 지금 값이 다르면
  //         localStorage.contactData = JSON.stringify(this.state.contactData);                  // 지금 값을 입력해 줌
  //     }
  // }

  return (
    <form method="post" enctype="multipart/form-data">
      <div className="applying_page_whole_wrap">
        <div className="application_tabs">
          <div className="taps_wrap">
            <div className="applgying_category">
              <img
                className="arrow_mark"
                src={ArrowBack}
                alt="arrow mark"
                heigth="44"
                width="44"
              />
              <div className="applying_makers">메이커스 지원하기</div>
            </div>
            <div className="applying_button_category">
              <label for="임시저장">
                <input
                  type="submit"
                  id="auto_save_btn"
                  className="button1"
                  value="임시저장"
                  onClick={handleValueChange}
                />
              </label>
              <form
                method="post"
                enctype="multipart/form-data"
                return="submitCheck()"
              >
                <label for="메이커 지원서 제출">
                  <input
                    type="submit"
                    id="hand_in_btn"
                    className="button2"
                    value="메이커 지원서 제출"
                    onClick={handleSubmitChange}
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        <main className="contents">
          {/* 메이커 이름 */}
          <div className="maker_name_wrap">
            <div className="maker_name">
              메이커 이름<span className="ico">*</span>
            </div>
            <input
              className={`maker_name_input
                ${nameValue.length >= 1 ? 'maker_name_input_used' : ''}`}
              placeholder="메이커 이름을 입력해주세요"
              value={nameValue}
              onChange={handleInputChange}
            />
          </div>
          {/* 메이커 닉네임 */}
          <div className="maker_nickname_wrap">
            <div className="maker_nickname">
              메이커 닉네임<span className="ico">*</span>
            </div>
            <input
              className={`maker_nickname_input
                ${nickValue.length >= 1 ? 'maker_nickname_input_used' : ''}`}
              placeholder="메이커 닉네임을 입력해주세요"
              value={nickValue}
              onChange={handleNickInputChange}
            />
          </div>

          {/* 프로필 이미지 */}
          <Profile imgFile={imgFile} setImgFile={setImgFile} />

          <div className="maker_profile">
            <div className="introduction">
              메이커 소개<span className="ico">*</span>
            </div>
            <textarea
              className={`career_textarea
                ${profileValue.length >= 1 ? 'career_used' : ''}`}
              placeholder="2~3문장으로 메이커님의 이력과 간단한 소개를 써주세요."
              value={profileValue}
              onChange={handleProfileChange}
            />
          </div>

          <div className="certificate_wrap">
            <div className="attaching_certificate">
              <div className="documents_title">증빙서류</div>
              <span className="certificate_des_1">
                중복선택가능 <span className="ico">*</span>
              </span>
              <div className="img_wrap">
                <img
                  className="question_mark"
                  src={Question}
                  alt="question mark"
                  width="24"
                  height="24"
                />
                <div>
                  <div className="modal_certificate">
                    <img
                      className="question"
                      src={Question}
                      alt="question mark"
                      width="24"
                      height="24"
                    />
                    증빙 서류에 대한 설명 <br />
                    최신 버전의 자격증 사본을 제출하세요.
                    <br />
                    <br />
                    JPG, JPEG, PNG, PDF
                    <br />
                    100MB 이하 파일 1개만 업로드 가능합니다.
                  </div>
                </div>
              </div>
              <div className="certificate_des_2">
                영역에 대한 전문성을 입증할 수 있는 서류를 등록해주세요.
              </div>
            </div>
            {/* <Certificate
              optionSelected={optionSelected}
              setOptionSelected={setOptionSelected}
            /> */}
          </div>

          <div className="user_sns_wrap">
            <div className="category_hp_or_sns">
              <div className="title_sns">
                홈페이지 또는 SNS<span className="ico">*</span>
              </div>
              <div className="sns_desc">
                가이드로서의 활동을 알 수 있는 홈페이지, sns 등 주소가 있다면
                입력해주세요.
              </div>
            </div>

            <div className="sns_inputs">
              {/* 인스타그햄 주소 input */}
              <label className="ig_label">
                <input
                  className={`instagram_input
                  ${igValue.length >= 1 ? 'instagram_input_used' : ''}`}
                  value={'https://www.instagram.com/'}
                />
                <input
                  className="filled_out_ig_input"
                  defaultValue={igValue}
                  onChange={handleIgInputChange}
                />
              </label>
              {/* 페이스북 주소 input */}
              <label className="fb_label">
                <input
                  className={`facebook_input
                ${fbValue.length >= 1 ? 'facebook_input_used' : ''}`}
                  value={'https://www.facebook.com/'}
                />
                <input
                  className="filled_out_fb_input"
                  defaultValue={fbValue}
                  onChange={handleFbInputChange}
                />
              </label>
              {/* 유튜브 주소 input */}
              <label className="yt_label">
                <input
                  className={`youtube_input
                ${ytValue.length >= 1 ? 'youtube_input_used' : ''}`}
                  value={'https://www.youtube.com/'}
                />
                <input
                  className="filled_out_yt_input"
                  defaultValue={ytValue}
                  onChange={handleYtInputChange}
                />
              </label>
            </div>
          </div>

          {/* 사용 가능한 언어 */}
          <Language selected={selected} setSelected={setSelected} />
          {/* 신분증 */}
          {/* <IdCard idFile={idFile} setIdFile={setIdFile} /> */}
        </main>
      </div>
    </form>
  );
};

export default Applying;
