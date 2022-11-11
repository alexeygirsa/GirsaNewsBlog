import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/mainStore/mainSlice";

import styles from "./signin.css";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isInvalidForm, setIsInvalidForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mockUserName = "alex@girsa.org";
    const mockPassword = "213622";

    if (userName === mockUserName && password === mockPassword) {
      setIsInvalidForm(false);
      dispatch(login());
      localStorage.setItem("isAuth", true);
      navigate("/");
    } else {
      setIsInvalidForm(true);
    }
  };

  return (
    <div className="signInContainer">
      <form className="signInForm" onSubmit={handleSubmit}>
        <label className="signInItem">
          <p className="signInText" >Enter User Email:</p>
          <input className="signInInput" placeholder="Email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="username"
          />
        </label>
        <label className="signInItem">
          <p className="signInText">Enter User Password:</p>
          <input className="signInInput" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            type="password"
          />
          <p><button className="signInButton">Sign in</button></p>
          {isInvalidForm && <p>User data is invalid</p>}
        </label>
        
      </form>
    </div>
  );
};
