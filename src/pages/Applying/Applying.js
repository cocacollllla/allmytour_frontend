import React, { useEffect, useState } from 'react';
import '../../styles/styles.scss';
import Certificate from './Aside/Certificate.js';
// import Language from './Aside/Language';
import ArrowBack from '../../assets/arrow_back.svg';
import Camera from '../../assets/camera.svg';
import Question from '../../assets/question.svg';
import Dot from '../../assets/dot.svg';
import TourType from './Aside/TourType.js';

const Applying = () => {
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
            <div className="applying_makers">메이커스 지원하기</div>
          </div>
          <div className="applying_button_category">
            <button className="temporary_save">임시저장</button>
            <button className="submission">메이커스 지원서 제출</button>
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
            className="maker_name_input"
            placeholder="메이커 이름을 입력해주세요"
          />
        </div>
        {/* 메이커 닉네임 */}
        <div className="maker_nickname_wrap">
          <div className="maker_nickname">
            메이커 닉네임<span className="ico">*</span>
          </div>
          <input
            className="maker_nickname_input"
            placeholder="메이커 닉네임을 입력해주세요"
          ></input>
        </div>

        {/* 프로필 이미지 */}
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
              <img
                className="camera_image"
                src={Camera}
                alt="camera"
                heigth="44"
                width="44"
              />
            </div>
            <div className="uploading_image">
              <button className="image_uploading_bttn">
                이미지파일 업로드
              </button>
              <div className="image_des_1">
                <img
                  className="dot_image"
                  src={Dot}
                  alt="dots"
                  height="24"
                  width="24"
                />
                240px*240px 이미지를 업로드 해주세요
              </div>
              <div className="image_des_2">
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

        <div className="maker_profile">
          <div className="introduction">
            메이커 소개<span className="ico">*</span>
          </div>
          {/* 해당부분 메이커 닉네임으로 중복되어 있어서 임의로 소개로 넣음. 더블 체크 필요 */}
          <input
            className="career_textarea"
            placeholder="2~3문장으로 메이커님의 이력과 간단한 소개를 써주세요."
          ></input>
          {/* 0/200 부분 넣어야함 */}
        </div>

        <div className="certificate_wrap">
          <div className="attaching_certificate">
            <div className="documents_title">증빙서류</div>
            <span className="certificate_des_1">
              중복선택가능 <span className="ico">*</span>
            </span>
            <img
              className="question_mark"
              src={Question}
              alt="question mark"
              width="24"
              height="24"
            />
            <div className="certificate_des_2">
              영역에 대한 전문성을 입증할 수 있는 서류를 등록해주세요
            </div>
          </div>
          {/* <Language /> */}
          <Certificate />
        </div>

        <div className="user_sns_wrap">
          <div className="category_hp_or_sns">
            <div className="title_sns">
              홈페이지 또는 SNS<span className="ico">*</span>
            </div>
            <div className="sns_desc">
              가이드로서의 활동을 알 수 있는 홈페이지, sns 등 주소가 있다면
              입력해주세요
            </div>
          </div>
          <div className="sns_inputs">
            <label className="ig_label" ig-domain="https://wwww.instagram.com/">
              <input className="instagram_input"></input>
            </label>
            <label className="fb_label" ig-domain="https://wwww.facebook.com/">
              <input className="facebook_input"></input>
            </label>
            <label className="yt_label" ig-domain="https://wwww.youtube.com/">
              <input className="youtube_input"></input>
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
          <Certificate />
        </div>

        {/* 신분증 */}
        <div className="idcard_image_wrap">
          <div className="idcard_category">
            <div className="idcard_title">
              신분증<span className="ico">*</span>
            </div>
            <div className="idcard_desc">
              메이커 본인 확인을 위해 대표 구성원 1인의 신분증 사본을
              등록해주세요
            </div>
          </div>
          <div className="uploading_id_category">
            <div className="preview_id_image">
              <img
                className="camera_square_image"
                src={Camera}
                alt="camera"
                heigth="44"
                width="44"
              />
            </div>
            <div className="uploading_id_image">
              <button className="id_uploading_bttn">이미지파일 업로드</button>
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
      </main>
    </div>
  );
};

export default Applying;
