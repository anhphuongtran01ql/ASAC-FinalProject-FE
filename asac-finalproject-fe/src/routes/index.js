import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage/homepage";
import { DoctorInfo } from "../components/User/Doctor/detail";
import ListOfDoctors from "../components/User/Doctor/listDoctors";

function RouteComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/list-doctors" element={<ListOfDoctors />} />
        <Route path="/doctor-info" element={<DoctorInfo />} />
      </Routes>
    </>
  );
}
export default RouteComponent;
