import "./App.css";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
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
import {PrivateRoute} from "./routes/privateRoute";

function App() {
    const history = createBrowserHistory();
    return (
        <>
            <Routes history={history}>
                <Route path="/" element={<HomePage/>}/>
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route path='/doctors' element={<Doctor/>}/>
                </Route>
                <Route path="/specializations" element={<Specialization/>}/>
                <Route path="/specializations/:id" element={<SpecializationDetail/>}/>
                {/*<Route path="/doctors" element={<Doctor />} />*/}
                <Route path="/doctors/:id" element={<DoctorDetail/>}/>
                <Route path="/bookings/:id" element={<Booking/>}/>
                <Route path="/clinics" element={<Clinic/>}/>
                <Route path="/clinics/:id" element={<ClinicDetail/>}/>
                <Route path="/specializations" element={<Specialization/>}/>
                <Route path="/specializations/:id" element={<SpecializationDetail/>}/>
                <Route path="/booking/:id" element={<Booking/>}/>
                <Route path="/booking-success/:id" element={<BookingSuccess/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/*" element={<AdminLayout/>}/>
            </Routes>
        </>
    );
}

export default App;
