import React from 'react';
import '../../styles/styles.scss';
import './Aside/Certificate.js';
import Certificate from './Aside/Certificate.js';
import ArrowBack from '../../assets/arrow_back.svg';
import Camera from '../../assets/camera.svg';
import Question from '../../assets/question.svg';

const Applying = () => {
  return (
    <div className="applying_page_whole_wrap">
      <div className="application_tabs">
        <img src={ArrowBack} alt="arrow mark" heigth="44" width="44" />
        <div className="applying_makers">메이커스 지원하기</div>
        <button className="temporary_save">임시저장</button>
        <button className="submission">메이커스 지원서 제출</button>
      </div>
      <main className="contents">
        {/* 메이커 이름 */}
        <div className="maker_name_wrap">
          <div className="maker_name">
            메이커 이름<span>*</span>
          </div>
          <input
            className="maker_name_input"
            placeholder="메이커 이름을 입력해주세요"
          ></input>
        </div>
        {/* 메이커 닉네임 */}
        <div className="maker_nickname_wrap">
          <div className="maker_nickname">
            메이커 닉네임<span>*</span>
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
              프로필 이미지<span>*</span>
            </div>
            <span className="image_desc">
              메이커 본인 확인을 위해 창작자 개인이나 팀의 사진을 올려주세요.
              <br />
              추후 상품 업로드 시, 수정가능 합니다.
            </span>
          </div>
          <div className="preview_image">
            <img src={Camera} alt="camera" heigth="44" width="44" />
          </div>
          <div className="uploading_image">
            <button>이미지파일 업로드</button>
            <span>240px*240px 이미지를 업로드 해주세요</span>
            <span>
              JPG, JPEG, PNG, PDF/100KB 이하 파일 1개만 업로드 가능합니다.
            </span>
          </div>
        </div>

        <div className="maker_profile">
          <div>
            메이커 소개<span>*</span>
          </div>
          {/* 해당부분 메이커 닉네임으로 중복되어 있어서 임의로 소개로 넣음. 더블 체크 필요 */}
          <input placeholder="2~3문장으로 메이커님의 이력과 간단한 소개를 써주세요."></input>
          {/* 0/200 부분 넣어야함 */}
        </div>

        <div className="attaching_certificate">
          <div>
            <div>증빙서류</div>
            <span>중복선택가능</span>
            <img src={Question} alt="question mark" width="24" height="24" />
            <div>
              가이드로서의 활동을 알 수 있는 홈페이지, sns등 주소가 있다면
              입력해주세요
            </div>
          </div>
          <Certificate />
        </div>
      </main>
    </div>
  );
};

export default Applying;
