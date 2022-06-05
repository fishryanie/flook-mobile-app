import { useSelector, RootStateOrAny } from "react-redux";


const onOffDrawer = ()=> useSelector((state: RootStateOrAny ) => state.AppReducer.openDrawer)
const onOffSearch =()=> useSelector((state: RootStateOrAny)=> state.AppReducer.openSearch)

export default {
  onOffDrawer, onOffSearch
}
