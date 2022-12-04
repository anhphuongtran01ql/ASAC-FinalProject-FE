import React from "react";
import { Routes, Route } from "react-router-dom";
import { DoctorInfo } from "../components/Admin/Doctor/detail";
import ListOfDoctors from "../components/Admin/Doctor/listDoctors";
import Login from "../components/Auth/login";
import ListOfSpecializations from "../components/Admin/Specialization/listSpecializations";
import { SpecializationInfo } from "../components/Admin/Specialization/detail";
import { EditSpecializationInfo } from "../components/Admin/Specialization/edit";
import { CreateSpecializationInfo } from "../components/Admin/Specialization/create";
import ListOfClinics from "../components/Admin/Clinic/listClinics";
import { ClinicInfo } from "../components/Admin/Clinic/detail";
import { CreateClinicInfo } from "../components/Admin/Clinic/create";
import { EditClinicInfo } from "../components/Admin/Clinic/edit";

function RouteComponent() {
  return (
    <>
      <Routes>
        <Route path="/admin/list-doctors" element={<ListOfDoctors />} />
        <Route path="/admin/list-doctors/:id" element={<DoctorInfo />} />
        <Route
          path="/admin/list-specializations"
          element={<ListOfSpecializations />}
        />
        <Route
          path="/admin/list-specializations/:id"
          element={<SpecializationInfo />}
        />
        <Route
          path="/admin/specialization"
          element={<CreateSpecializationInfo />}
        />
        <Route
          path="/admin/specialization/:id"
          element={<EditSpecializationInfo />}
        />

        <Route path="/admin/list-clinics" element={<ListOfClinics />} />
        <Route path="/admin/list-clinics/:id" element={<ClinicInfo />} />
        <Route path="/admin/clinic" element={<CreateClinicInfo />} />
        <Route path="/admin/clinic/:id" element={<EditClinicInfo />} />
        <Route path="admin/login" element={<Login/>} />}/>
      </Routes>
    </>
  );
}
export default RouteComponent;
