import React from "react";
import { Routes, Route } from "react-router-dom";
import { DoctorInfo } from "../components/Admin/Doctor/detail";
import ListOfDoctors from "../components/Admin/Doctor/listDoctors";
import ListOfSpecializations from "../components/Admin/Specialization/listSpecializations";
import { SpecializationInfo } from "../components/Admin/Specialization/detail";
import { EditSpecializationInfo } from "../components/Admin/Specialization/edit";
import { CreateSpecializationInfo } from "../components/Admin/Specialization/create";
import ListOfClinics from "../components/Admin/Clinic/listClinics";
import { ClinicInfo } from "../components/Admin/Clinic/detail";
import { CreateClinicInfo } from "../components/Admin/Clinic/create";
import { EditClinicInfo } from "../components/Admin/Clinic/edit";
import HomepageComponent from "../components/Layout/HomepageComponent";
import ListOfSchedules from "../components/Admin/Schedule/listSchedules";
import { CreateScheduleInfo } from "../components/Admin/Schedule/create";
import { EditScheduleInfo } from "../components/Admin/Schedule/edit";

function RouteComponent() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<HomepageComponent />} />
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

        <Route path="/admin/list-schedules" element={<ListOfSchedules />} />
        <Route path="/admin/schedule" element={<CreateScheduleInfo />} />
        <Route
          path="/admin/schedule/:id"
          element={<EditScheduleInfo />}
        />

      </Routes>
    </>
  );
}
export default RouteComponent;
