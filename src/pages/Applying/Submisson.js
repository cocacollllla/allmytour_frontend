import React, { useState, useEffect } from 'react';
import '../../styles/styles.scss';
import ArrowBack from '../../assets/arrow_back.svg';
import Question from '../../assets/question.svg';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { API } from '../../config';
import { useParams } from 'react-router-dom';

const Submission = () => {
  const [userName, setUserName] = useState('');
  const [test, setTest] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API.APPLYING}/${id}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => {
        setTest(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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

  return (
    <>
      {test !== null &&
        test.map((test, idx) => {
          return (
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
                    <div className="applying_makers">지원서 보기</div>
                  </div>
                  <div className="applying_button_category">
                    <label for="임시저장">
                      <input
                        type="submit"
                        id="auto_save_btn"
                        className="button1"
                        value="임시저장"
                        disabled
                      />
                    </label>
                    <label for="지원서 제출">
                      <input
                        type="submit"
                        id="hand_in_btn"
                        className="button2"
                        value="지원서 제출"
                        disabled
                      />
                    </label>
                  </div>
                </div>
              </div>
              <main className="contents" key="index">
                {/* 이름 */}
                <div className="maker_name_wrap">
                  <div className="maker_name">
                    이름<span className="ico">*</span>
                  </div>
                  <input
                    className="maker_name_input"
                    value={userName}
                    disabled
                  />
                </div>
                {/* 닉네임 */}
                <div className="maker_nickname_wrap">
                  <div className="maker_nickname">
                    닉네임<span className="ico">*</span>
                  </div>
                  <input
                    className="maker_nickname_input"
                    //=====================> 여기 닉네임 값 바꾸세요
                    value={test.nickname}
                    disabled
                  />
                </div>
                {/* 프로필 이미지 */}
                <div className="profile_image_wrap">
                  <div className="category_submitted_profile_image">
                    <div className="profile_image">
                      프로필 이미지<span className="ico">*</span>
                    </div>
                  </div>
                  <div className="image_category_wrap">
                    <div className="preview_image">
                      <img
                        className="selected_profile_preview"
                        src={`http://49.50.174.75:8000${test.profile_image}`}
                        heigth="165.2"
                        width="157.3"
                      />
                    </div>
                  </div>
                </div>
                {/* <Profile /> */}
                <div className="maker_profile">
                  <div className="introduction">
                    소개<span className="ico">*</span>
                  </div>
                  <textarea
                    className="submitted_career_textarea"
                    placeholder="2~3문장으로 이력과 간단한 소개를 써주세요."
                    value={test.description}
                    disabled
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
                    </div>
                  </div>
                  <div className="submitted_certificate_icons">
                    {test.licenses.map((el, index) => (
                      <>
                        <div key={index}>
                          <div className="submitted_certificate">
                            {el.license}
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
                <div className="user_sns_wrap">
                  <div className="category_hp_or_sns">
                    <div className="title_sns">
                      홈페이지 또는 SNS<span className="ico">*</span>
                    </div>
                  </div>

                  <div className="sns_inputs">
                    {/* 인스타그햄 주소 input */}
                    <label className="ig_label">
                      <input
                        className="instagram_input"
                        value={'https://www.instagram.com/'}
                        disabled
                      />
                      <input
                        className="submitted_ig_input"
                        defaultValue={test.instagram}
                        disabled
                      />
                    </label>
                    {/* 페이스북 주소 input */}
                    <label className="fb_label">
                      <input
                        className="facebook_input"
                        value={'https://www.facebook.com/'}
                        disabled
                      />
                      <input
                        className="submitted_fb_input"
                        defaultValue={test.facebook}
                        disabled
                      />
                    </label>
                    {/* 유튜브 주소 input */}
                    <label className="yt_label">
                      <input
                        className="youtube_input"
                        value={'https://www.youtube.com/'}
                        disabled
                      />
                      <input
                        className="submitted_yt_input"
                        defaultValue={test.youtube}
                        disabled
                      />
                    </label>
                  </div>
                </div>
                {/* 사용 가능한 언어 */}
                <div className="available_language_wrap">
                  <div className="language_category">
                    <div className="language_title">사용가능한 언어</div>
                    <span className="language_des_1">
                      중복선택가능 <span className="ico">*</span>
                    </span>
                  </div>
                  <div className="chosen_language_wrap">
                    {test.languages.map(el => (
                      <div className="chosen_language">{el.language}</div>
                    ))}
                  </div>
                </div>

                {/* 신분증 */}
                <div className="idcard_image_wrap">
                  <div className="idcard_category">
                    <div className="idcard_title">신분증</div>
                  </div>
                  <div className="uploading_id_category">
                    <div className="preview_id_image">
                      <img
                        className="id_preview"
                        src={`http://49.50.174.75:8000${test.id_image}`}
                        alt="camera"
                        heigth="165.2"
                        width="157.3"
                      />
                    </div>
                  </div>
                </div>
              </main>
            </div>
          );
        })}
    </>
  );
};

export default Submission;
