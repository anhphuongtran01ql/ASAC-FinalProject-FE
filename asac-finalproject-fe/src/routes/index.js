import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage/homepage";
import { DoctorInfo } from "../components/Admin/Doctor/detail";
import ListOfDoctors from "../components/Admin/Doctor/listDoctors";
import Doctor from "../components/Doctor/doctor";
import DoctorDetail from "../components/Doctor/doctorDetail";
import Booking from "../components/Booking/booking";
import Clinic from "../components/Clinic/cliinic";
import Specialization from "../components/Specialization/specialization";
import Login from "../components/Auth/login"

function RouteComponent() {
  return (
    <>
      <Routes>
        <Route path="/admin/list-doctors" element={<ListOfDoctors />} />
        <Route path="/admin/list-doctors/doctor-info" element={<DoctorInfo />} />
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/doctor" element={<Doctor />}></Route>
        <Route path="/doctor/:id" element={<DoctorDetail />}></Route>
        <Route path="/booking/:id" element={<Booking />}></Route>
        <Route path="/clinics" element={<Clinic />}></Route>
        <Route path="/specializations" element={<Specialization />}></Route>
      </Routes>
    </>
  );
}
export default RouteComponent;
