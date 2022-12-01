import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/login";
import Doctor from "../components/Doctor/doctor";
import DoctorDetail from "../components/Doctor/doctorDetail";
import Booking from "../components/Booking/booking";
import HomePage from "../components/Homepage/homepage";
import Clinic from "../components/Clinic/cliinic";
import Specialization from "../components/Specialization/specialization";
import DoctorsBySpecialization from "../components/Specialization/specializationDetail";
import SpecializationDetail from "../components/Specialization/specializationDetail";

function RouteComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/doctor" element={<Doctor />}></Route>
        <Route path="/doctor/:id" element={<DoctorDetail />}></Route>
        <Route path="/booking/:id" element={<Booking />}></Route>
        <Route path="/clinics" element={<Clinic />}></Route>
        <Route path="/specializations" element={<Specialization />}></Route>
        <Route path="/specializations/:id" element={<SpecializationDetail />}></Route>
      </Routes>
    </>
  );
}
export default RouteComponent;
