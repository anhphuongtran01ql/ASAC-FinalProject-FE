import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
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
import ListOfPatients from "../components/Supporter/listPatients";
import { PatientInfo } from "../components/Supporter/detail";
import ListOfPatientsSuccess from "../components/Doctor/appointment";
import { PrivateRoute } from "./privateRoute";

function RouteComponent() {
  return (
    <>
      <Outlet/>
    </>
  );
}
export default RouteComponent;
