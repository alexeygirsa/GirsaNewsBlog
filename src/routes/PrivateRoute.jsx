import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SIGN_IN } from "../constants/routes";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.main.isAuth);

  if (!isAuth) {
    return <Navigate replace to={SIGN_IN} />;
  }

  return children;
};
