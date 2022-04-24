import { useSelector } from "react-redux";

export const onOffDrawerSelector = () => {
  return useSelector(state => state?.AppReducer?.openDrawer);
}; 

export const onOffSearchSelector = () => {
  return useSelector(state => state?.AppReducer?.openSearch);
}; 

export const onOffNotifySelector = () => {
  return useSelector(state => state?.AppReducer?.openNotify);
}; 

export const onOffCartSelector = () => {
  return useSelector(state => state?.AppReducer?.openCart);
}; 