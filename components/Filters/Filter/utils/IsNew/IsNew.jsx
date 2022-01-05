import React from 'react';
import { useDispatch } from 'react-redux';
import Checkbox from '../Checkbox/Checkbox';

function IsNew({ data }) {
  const dispatch = useDispatch();

  const changeIsNew = () => {
    dispatch({ type: 'CHANGE_CHECKED_IS_NEW' });
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
