import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ChangePassword from "../pages/SignUp/ChangePassword";
import useAuth from "../hooks/useAuth";
import Maintenance from "../pages/Maintenance/Maintenance";
import HealthInstitution from "../pages/HealthInstitution/HealthInstitution";

const Private = ({ Item }) => {
  const { signed } = useAuth();
  return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route exact path="/specialties" element={<Private Item={Maintenance} />} />
          <Route exact path="/institutions" element={<Private Item={HealthInstitution} />} />
          <Route path="/" element={<Login />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
