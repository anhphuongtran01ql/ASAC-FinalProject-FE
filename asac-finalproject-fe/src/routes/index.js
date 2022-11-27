import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/login";
import Homepage from "../components/Homepage/homepage";
import Doctor from "../components/Doctor/doctor";
import DoctorDetail from "../components/Doctor/doctorDetail";

function RouteComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/doctor" element={<Doctor />}></Route>
        <Route path="/doctor/:id" element={<DoctorDetail />}></Route>
      </Routes>
    </>
  );
}
export default RouteComponent;
