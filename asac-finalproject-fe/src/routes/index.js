import React from "react";
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Login from "../components/Auth/login";
import Doctor from "../components/Doctor/doctor";
import DoctorDetail from "../components/Doctor/doctorDetail";
import Booking from "../components/Booking/booking";
import HomePage from "../components/Homepage/homepage";
import Clinic from "../components/Clinic/cliinic";
import Specialization from "../components/Specialization/specialization";
import DoctorsBySpecialization from "../components/Specialization/specializationDetail";
import SpecializationDetail from "../components/Specialization/specializationDetail";
import {createBrowserHistory} from "history";

function RouteComponent() {
  const history = createBrowserHistory();

  return (
    <>
      <Routes history={history}>
        <Route path="/" element={<HomePage />}/>
        <Route path="admin/login" element={<Login/>} />}/>
        </Routes>
    </>
  );
}
export default RouteComponent;
