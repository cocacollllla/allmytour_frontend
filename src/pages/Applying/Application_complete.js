import React from 'react';
import '../../styles/styles.scss';

const Application_complete = () => {
  return (
    <div className="applying_success_wrap">
      <div className="applying_sucess_category">
        <header className="complete_header">
          메이커스 지원이 완료 되었습니다.
        </header>
        <div className="subtitle">
          영업일 기준 7일 이내에 지원서 검토 후<br /> 입력하신 이메일을 통해
          메이커스 계약서가 전달될 예정입니다.
        </div>
        <main className="status_des_wrap">
          <div className="status_des">
            심사 진행 상태의 경우 MY PAGE에서 확인이 가능하며 <br />
            심사상태에 대한 표기는 다음과 같습니다.
          </div>
          <div className="progress_status">
            <div className="progress_icon">심사 진행중</div>
            <div className="progress_des">
              현재 지원서를 열람하여 심사가 진행중이며, 질문 항목에 대한 질문이
              있을 수 있으니, <br />
              등록하신 메일을 꼭 확인해주세요.
            </div>
          </div>

          <div className="modify_request">
            <div className="modify_request_icon">수정요청</div>
            <div className="modify_des">
              지원서 심사 중 검증이 필요하거나 수정이 필요한 부분이 있어 수정
              요청을 드린 상태입니다.
            </div>
          </div>

          <div className="complete_wrap">
            <div className="complete_icon">인증완료</div>
            <div className="complete_des">
              심사가 완료되어 메이커로 인증된 상태입니다. <br />
              메일을 통해 보내드린 계약서를 통해 계약을 진행해주세요.
            </div>
          </div>
        </main>
        <button className="button1">메이커스 심사 상태 확인하기</button>
      </div>
    </div>
  );
};

export default Application_complete;
