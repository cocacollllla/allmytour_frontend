import '../../../styles/page/_Submission_Modal.scss';
import { useHistory } from 'react-router-dom';
// import { API } from '../../config';

export default function Modal({ modal, setModal }) {
  const history = useHistory();
  const goToMain = () => {
    history.push('/complete');
  };

  const HandleMoveChange = e => {
    goToMain();
  };

  const HandleRemoveChange = e => {
    setModal(false);
  };

  return (
    <div className="confirm_modal_bg">
      <div className="confirm_modal">
        <p>
          신청서를 제출하시겠습니까?
          <br />
          심사진행중에는 수정이 불가능 합니다
        </p>
        <div className="button_box">
          <button onClick={HandleRemoveChange}>취소</button>
          <button onClick={HandleMoveChange}>제출</button>
        </div>
      </div>
    </div>
  );
}
