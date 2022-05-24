import { useSelector, RootStateOrAny} from "react-redux";

const Loign = () => useSelector((state: RootStateOrAny) => state.AuthReducer.login);

const Register = () => useSelector((state: RootStateOrAny) => state.AuthReducer.register);

const ForgotPassword = () => useSelector((state: RootStateOrAny) => state.AuthReducer.forgot);

const ChangePassword = () => useSelector((state: RootStateOrAny) => state.AuthReducer.change);

const Messages = () => useSelector((state: RootStateOrAny) => state.AuthReducer.message);

const DataManyUser = () => useSelector((state: RootStateOrAny) => state.AuthReducer.dataManyUser)

export default {
  Loign, Register, ForgotPassword, ChangePassword,
  Messages, DataManyUser
}
