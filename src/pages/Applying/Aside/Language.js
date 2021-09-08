import React from 'react';
import Select, { components } from 'react-select';
import {
  SortableContainer,
  SortableElement,
  sortableHandle,
} from 'react-sortable-hoc';

function arrayMove(array, from, to) {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}

const SortableMultiValue = SortableElement(props => {
  // this prevents the menu from being opened/closed when the user clicks
  // on a value to begin dragging it. ideally, detecting a click (instead of
  // a drag) would still focus the control and toggle the menu, but that
  // requires some magic with refs that are out of scope for this example
  const onMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const innerProps = { ...props.innerProps, onMouseDown };
  return <components.MultiValue {...props} innerProps={innerProps} />;
});

const SortableMultiValueLabel = sortableHandle(props => (
  <components.MultiValueLabel {...props} />
));

const SortableSelect = SortableContainer(Select);

export default function Language() {
  const [selected, setSelected] = React.useState([null]);

  const options = [
    { value: '운전면허증', label: '운전면허증' },
    { value: '한국관광통역안내사', label: '한국관광통역안내사' },
    { value: '사업자 등록증', label: '사업자 등록증' },
    { value: '각종 자격증 등', label: '각종 자격증 등' },
  ];

  const onChange = selectedOptions => setSelected(selectedOptions);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newValue = arrayMove(selected, oldIndex, newIndex);
    setSelected(newValue);
    console.log(
      'Values sorted:',
      newValue.map(i => i.value)
    );
  };
  console.log(selected);
  return (
    <SortableSelect
      useDragHandle
      // react-sortable-hoc props:
      axis="xy"
      onSortEnd={onSortEnd}
      distance={4}
      // small fix for https://github.com/clauderic/react-sortable-hoc/pull/352:
      getHelperDimensions={({ node }) => node.getBoundingClientRect()}
      // react-select props:
      isMulti
      options={options}
      value={selected}
      onChange={onChange}
      components={{
        MultiValue: SortableMultiValue,
        MultiValueLabel: SortableMultiValueLabel,
      }}
      // closeMenuOnSelect={false}
    />
  );
}
