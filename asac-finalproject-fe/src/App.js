import "./App.css";
import {Route, Navigate, Routes} from "react-router-dom";
// import {Routes} from "react-router";
import {createBrowserHistory} from "history";

import HomePage from "./components/Homepage/homepage";
import AdminLayout from "./components/Layout/AdminLayout";
import Doctor from "./components/Doctor/doctor";
import DoctorDetail from "./components/Doctor/doctorDetail";
import Booking from "./components/Booking/booking";
import Clinic from "./components/Clinic/cliinic";
import Specialization from "./components/Specialization/specialization";
import SpecializationDetail from "./components/Specialization/specializationDetail";
import React, {Fragment} from "react";
import ClinicDetail from "./components/Clinic/clinicDetail";
import Login from "./components/Auth/login";
import {BookingSuccess} from "./components/Booking/bookingSuccess";
import ChatbotComponent from "./chatbot/ChatbotComponent";
import NotFoundPage from "./components/Auth/notFound";
import ListOfDoctors from "./components/Admin/Doctor/listDoctors";
import {PrivateRoute} from "./routes/privateRoute";
import HomepageComponent from "./components/Layout/HomepageComponent";
import {DoctorInfo} from "./components/Admin/Doctor/detail";
import ListOfSpecializations from "./components/Admin/Specialization/listSpecializations";
import {SpecializationInfo} from "./components/Admin/Specialization/detail";
import {CreateSpecializationInfo} from "./components/Admin/Specialization/create";
import {EditSpecializationInfo} from "./components/Admin/Specialization/edit";
import ListOfClinics from "./components/Admin/Clinic/listClinics";
import {ClinicInfo} from "./components/Admin/Clinic/detail";
import {CreateClinicInfo} from "./components/Admin/Clinic/create";
import {EditClinicInfo} from "./components/Admin/Clinic/edit";
import ListOfSchedules from "./components/Admin/Schedule/listSchedules";
import {CreateScheduleInfo} from "./components/Admin/Schedule/create";
import {EditScheduleInfo} from "./components/Admin/Schedule/edit";
import ListOfPatients from "./components/Supporter/listPatients";
import {PatientInfo} from "./components/Supporter/detail";
import ListOfPatientsSuccess from "./components/Doctor/appointment";

function App() {
    const history = createBrowserHistory();
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/specializations" element={<Specialization/>}/>
                <Route path="/specializations/:id" element={<SpecializationDetail/>}/>
                <Route path="/doctors" element={<Doctor/>}/>
                <Route path="/doctors/:id" element={<DoctorDetail/>}/>
                <Route path="/bookings/:id" element={<Booking/>}/>
                <Route path="/clinics" element={<Clinic/>}/>
                <Route path="/clinics/:id" element={<ClinicDetail/>}/>
                <Route path="/specializations" element={<Specialization/>}/>
                <Route path="/specializations/:id" element={<SpecializationDetail/>}/>
                <Route path="/booking/:id" element={<Booking/>}/>
                <Route path="/booking-success/:id" element={<BookingSuccess/>}/>
                <Route path="/login" element={<Login/>}/>
                {/*<Route path="/*" element={<AdminLayout/>}/>*/}

                <Route exact path="/" element={<PrivateRoute/>}>
                    <Route path="/admin" element={<AdminLayout/>}>
                        <Route path="" element={<HomepageComponent />} />
                        <Route path="list-users" element={<ListOfDoctors />} />
                        <Route path="list-doctors/:id" element={<DoctorInfo />} />

                        <Route
                            path="list-specializations"
                            element={<ListOfSpecializations />}
                        />
                        <Route
                            path="list-specializations/:id"
                            element={<SpecializationInfo />}
                        />
                        <Route
                            path="specialization"
                            element={<CreateSpecializationInfo />}
                        />
                        <Route
                            path="specialization/:id"
                            element={<EditSpecializationInfo />}
                        />

                        <Route path="list-clinics" element={<ListOfClinics />} />
                        <Route path="list-clinics/:id" element={<ClinicInfo />} />
                        <Route path="clinic" element={<CreateClinicInfo />} />
                        <Route path="clinic/:id" element={<EditClinicInfo />} />

                        <Route path="list-schedules" element={<ListOfSchedules />} />
                        <Route path="schedule" element={<CreateScheduleInfo />} />
                        <Route path="schedule/:id" element={<EditScheduleInfo />} />
                    </Route>

                    <Route path="/supporter" element={<AdminLayout/>}>
                        <Route path="" element={<HomepageComponent />} />
                        <Route
                            path="list-patients"
                            element={<ListOfPatients />}
                        ></Route>
                        <Route path="list-patients/:id" element={<PatientInfo />}></Route>
                    </Route>

                    <Route path="/doctor" element={<AdminLayout/>}>
                        <Route path="" element={<HomepageComponent />} />
                        <Route
                          path="list-patients"
                          element={<ListOfPatientsSuccess />}
                        ></Route>
                    </Route>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}

export default App;
