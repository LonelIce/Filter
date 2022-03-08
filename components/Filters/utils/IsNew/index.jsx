import React from 'react';
import { useDispatch } from 'react-redux';
import Checkbox from '../Checkbox';
import { changeCheckedIsNewAction } from '../../../../store/filerReducer';

function IsNew({ data }) {
  const dispatch = useDispatch();

  const changeIsNew = () => {
    dispatch(changeCheckedIsNewAction());
  };

  return (
    <Checkbox
      title={data.title}
      value={undefined}
      id={data.slug}
      checked={data.checked}
      onChange={changeIsNew}
    />
  );
}

export default IsNew;
