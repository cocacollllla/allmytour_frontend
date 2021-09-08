import React, { useState } from 'react';
import Select from 'react-select';
import '../../../styles/page/_Certificate.scss';

const options = [
  { value: '운전면허증', label: '운전면허증' },
  { value: '한국관광통역안내사', label: '한국관광통역안내사' },
  { value: '사업자 등록증', label: '사업자 등록증' },
  { value: '각종 자격증 등', label: '각종 자격증 등' },
];

export default function Certificate() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Select
      placeholder="증빙서류를 선택해주세요"
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  );
}
