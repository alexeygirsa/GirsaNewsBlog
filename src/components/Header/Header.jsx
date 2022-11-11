import { NavLink } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { ThemeContext } from "../../components/ThemeProvider/ThemeProvider";
import { useContext } from "react";
import { HOME, NEWS , SIGN_IN } from "../../constants/routes";
import { logout } from "../../store/mainStore/mainSlice";

import styles from "./header.css";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const isAuth = useSelector((store) => store.main.isAuth);
  const dispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem("isAuth");
    dispatch(logout());
  };

  return (
    <>
    <div className="header">
      <h1 className="headerLogo">Girsa News Blog</h1>
      <div className="headerRight">
        <NavLink to={HOME} className="headerButton">
          Home{" "}
        </NavLink>
        {isAuth &&  <NavLink to={NEWS} className="headerButton">
          News{" "}
        </NavLink>}
        {!isAuth &&<NavLink to={SIGN_IN} className="headerButton">
          Sign In
        </NavLink>}
        {isAuth &&<button onClick={onLogout} className="headerButton">Logout</button>} 
        
        <label className="switch">
          <input type="checkbox"  onClick={themeToggle}></input>
          <span className="headerButton">Change Theme</span>
        </label>
      
      </div>
      
      </div>
    </>
  );
};
