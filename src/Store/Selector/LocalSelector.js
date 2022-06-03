import { useSelector } from 'react-redux';

export const getDataLocalSelector = () => {
  return useSelector(state => state?.DataLocalReducer?.authData);
};