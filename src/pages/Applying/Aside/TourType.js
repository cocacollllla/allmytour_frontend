import Question from '../../../assets/question.svg';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import '../../../styles/page/_TourType.scss';

const passenger = [
  { value: '5인', label: '5인' },
  { value: '9인', label: '9인' },
  { value: '12인', label: '12인' },
  { value: '15인', label: '15인' },
  { value: '기타', label: '기타' },
];

const loads = [
  { value: '1개', label: '1개' },
  { value: '2개', label: '2개' },
  { value: '3개', label: '3개' },
];

const TourType = () => {
  const [vehicle, setVehicle] = useState('false');
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="tour_type_wrap">
      <div className="documents_title">진행가능한 투어의 종류</div>
      <div className="test">
        <img
          className="question_mark"
          // onMouseOver={e => {
          //   this.handlerover(e);
          // }}
          src={Question}
          alt="question mark"
          width="24"
          height="24"
          on
        />
        <div className="img_description">
          차량으로 이동하는 투어 진행이 가능하신가요?
          <br />
          <br />
          렌트 및 차량 가이드님과 협업 가능시에도
          <br />
          가능으로 선택해주시면 됩니다
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setVehicle(!vehicle);
          }}
        >
          차량투어
        </button>
        {vehicle === true ? (
          <div className="vehicle_tour_category">
            <div>탑승가능한 최대 인원</div>
            <div className="number_of_pax_wrap">
              <Select
                className="number_of_pax"
                placeholder=""
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={passenger}
              />
            </div>
            <div>적재 가능환 짐의 갯수</div>
            <div className="number_of_loads_wrap">
              <Select
                className="number_of_loads"
                placeholder=""
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={loads}
              />
            </div>
          </div>
        ) : null}

        <button>워킹투어</button>
        <button>엑티비티</button>
      </div>
    </div>
  );
};

export default TourType;
