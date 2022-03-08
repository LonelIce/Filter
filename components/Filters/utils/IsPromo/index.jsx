import React from 'react';
import { useDispatch } from 'react-redux';
import Checkbox from '../Checkbox';
import { changeCheckedIsPromoAction } from '../../../../store/filerReducer';

function IsPromo({ data }) {
  const dispatch = useDispatch();

  const changeIsPromo = () => {
    dispatch(changeCheckedIsPromoAction());
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
