import React from 'react';
import { useDispatch } from 'react-redux';
import Checkbox from '../Checkbox';

function IsPromo({ data }) {
  const dispatch = useDispatch();

  const changeIsPromo = () => {
    dispatch({ type: 'CHANGE_CHECKED_IS_PROMO' });
  };

  return (
    <Checkbox
      title={data.title}
      value={undefined}
      id={data.slug}
      checked={data.checked}
      onChange={changeIsPromo}
    />
  );
}

export default IsPromo;
