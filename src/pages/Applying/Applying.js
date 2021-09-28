import React, { useState, useEffect } from 'react';
import '../../styles/styles.scss';
import ArrowBack from '../../assets/arrow_back.svg';
import Question from '../../assets/question.svg';
import Language from './Aside/Language.js';
import Certificate from './Aside/Certificate';
import IdCard from './Aside/IdCard';
import Profile from './Aside/Profile';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { API } from '../../config';
import Submission_Modal from './Aside/Submission_Modal';
// import Delete_modal from './Aside/Delete_modal';
import { useParams } from 'react-router-dom';

const Applying = () => {
  const [nickValue, setNickValue] = useState('');
  const [profileValue, setProfileValue] = useState('');
  const [igValue, setIgValue] = useState('');
  const [fbValue, setFbValue] = useState('');
  const [ytValue, setYtValue] = useState('');
  const [selected, setSelected] = useState([]);
  const [optionSelected, setOptionSelected] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const [idFile, setIdFile] = useState(null);
  const [userName, setUserName] = useState('');
  const [test, setTest] = useState([]);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState('');

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

  // const { id } = useParams();

  var bodyFormData = new FormData();
  bodyFormData.append('nickname', nickValue);
  bodyFormData.append('description', profileValue);
  bodyFormData.append('license', optionSelected); //자격증
  bodyFormData.append('language', selected); // 언어
  bodyFormData.append('profile_image', imgFile); //프로필
  bodyFormData.append('profile_image', imgFile);
  bodyFormData.append('id_image', idFile); //신분증
  bodyFormData.append('instagram', igValue);
  bodyFormData.append('facebook', fbValue);
  bodyFormData.append('youtube', ytValue);

  //  ===============================>  처음에 유저 토큰 받아오기
  useEffect(() => {
    axios
      .get(`${API.USER_NAME}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => {
        setUserName(res.data.result.name);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //   ===============================> 임시 저장된 정보 보내기
  const history = useHistory();
  const goToMain = () => {
    history.push(`/applying/${id}`);
  };

  const handleValueChange = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API.APPLYING}`,
      data: bodyFormData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(function (response) {
        setId(response.data.maker_id.id);
        console.log(response.data.maker_id.id);
      })
      .catch(function (error) {
        console.log(error);
      });
    goToMain();

    sessionStorage.setItem('nickname', nickValue);
    sessionStorage.setItem('description', profileValue);
    sessionStorage.setItem('profile_image', imgFile);
    sessionStorage.setItem('instagram', igValue);
    sessionStorage.setItem('faecbook', fbValue);
    sessionStorage.setItem('youtube', ytValue);
    sessionStorage.setItem('language', selected);
    sessionStorage.setItem('license', optionSelected);
    sessionStorage.setItem('id_image', idFile);
  };

  // =================================>  메이커스 지원서 제출 버튼
  // const history = useHistory();
  // const goToMain = () => {
  //   history.push('/complete');
  // };

  const HandleSubmitChange = e => {
    e.preventDefault();
    if (
      nickValue.length > 1 &&
      profileValue.length > 1 &&
      (igValue.length > 1 || fbValue.length > 1 || ytValue.length > 1) &&
      selected !== [] &&
      optionSelected !== [] &&
      imgFile !== null
    ) {
      axios({
        method: 'post',
        url: `${API.APPLYING}`,
        data: bodyFormData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: localStorage.getItem('token'),
        },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setModal(true);
      // goToMain();
    } else {
      alert('필수사항을 모두 입력해주세요');
    }
  };

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

              <div className="applying_makers">메이커스 지원하기 </div>
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
              <label for="메이커스 지원서 제출">
                <input
                  type="submit"
                  id="hand_in_btn"
                  className="button2"
                  value="메이커스 지원서 제출"
                  onClick={HandleSubmitChange}
                />
              </label>
            </div>
          </div>
        </div>
        <main className="contents" key="index">
          {/* 메이커 이름 */}
          <div className="maker_name_wrap">
            <div className="maker_name">
              메이커 이름<span className="ico">*</span>
            </div>
            <input
              className="maker_name_input"
              placeholder="메이커 이름을 입력해주세요"
              value={userName}
              disabled
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
          <Profile imgFile={imgFile} setImgFile={setImgFile} test={test} />
          <div className="maker_profile">
            <div className="introduction">
              메이커 소개<span className="ico">*</span>
            </div>
            <textarea
              className={`career_textarea_space
                ${
                  profileValue.length >= 1
                    ? 'career_used_input'
                    : 'career_textarea_space'
                }`}
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
            <Certificate
              optionSelected={optionSelected}
              setOptionSelected={setOptionSelected}
              test={test}
            />
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
          <Language selected={selected} setSelected={setSelected} test={test} />
          {/* 신분증 */}
          <IdCard idFile={idFile} setIdFile={setIdFile} test={test} />
        </main>
        ;
      </div>
      {modal === true ? (
        <Submission_Modal modal={modal} setModal={setModal} />
      ) : null}
    </form>
  );
};

export default Applying;
