import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { PrivateRoute } from "./PrivateRoute";
import { News } from "../components/News/News";
import { SignIn } from "../components/SignIn/SignIn";
import { Home } from "../components/Home/Home"
import {ThemeProvider} from "../components/ThemeProvider/ThemeProvider"
import {
  SIGN_IN,
  NEWS,
  HOME,
} from "../constants/routes";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
    <ThemeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path={HOME} element={ <PrivateRoute><Home /></PrivateRoute>}></Route>
            <Route path={NEWS} element={<PrivateRoute><News /></PrivateRoute>}></Route>
            <Route path={SIGN_IN} element={ <SignIn />}></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};
