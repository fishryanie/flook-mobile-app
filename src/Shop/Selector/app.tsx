import { useSelector, RootStateOrAny } from "react-redux";


const onOffDrawerSelector = ()=> useSelector((state: RootStateOrAny ) => state.AppReducer.openDrawer)
const onOffSearchSelector =()=> useSelector((state: RootStateOrAny)=> state.AppReducer.openSearch)

export default {
  onOffDrawerSelector, onOffSearchSelector
}
