import {Route, Routes} from "react-router-dom";
import {PrivateRoute} from "../../routes/privateRoute";
import HomepageComponent from "../Layout/HomepageComponent";
import ListOfDoctors from "../Admin/Doctor/listDoctors";
import {DoctorInfo} from "../Admin/Doctor/detail";
import ListOfSpecializations from "../Admin/Specialization/listSpecializations";
import {SpecializationInfo} from "../Admin/Specialization/detail";
import {CreateSpecializationInfo} from "../Admin/Specialization/create";
import {EditSpecializationInfo} from "../Admin/Specialization/edit";
import ListOfClinics from "../Admin/Clinic/listClinics";
import {ClinicInfo} from "../Admin/Clinic/detail";
import {CreateClinicInfo} from "../Admin/Clinic/create";
import {EditClinicInfo} from "../Admin/Clinic/edit";
import ListOfSchedules from "../Admin/Schedule/listSchedules";
import {CreateScheduleInfo} from "../Admin/Schedule/create";
import {EditScheduleInfo} from "../Admin/Schedule/edit";
import ContentComponent from "../Layout/ContentComponent";
import HomePage from "../Homepage/homepage";
import Specialization from "../Specialization/specialization";
import SpecializationDetail from "../Specialization/specializationDetail";
import Doctor from "../Doctor/doctor";
import DoctorDetail from "../Doctor/doctorDetail";
import Booking from "../Booking/booking";
import Clinic from "../Clinic/cliinic";
import ClinicDetail from "../Clinic/clinicDetail";
import {BookingSuccess} from "../Booking/bookingSuccess";

const ClientComponent= () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/specializations" element={<Specialization/>}/>
                <Route path="/specializations/:id" element={<SpecializationDetail/>}/>
                <Route path="/doctors" element={<Doctor />} />
                <Route path="/doctors/:id" element={<DoctorDetail/>}/>
                <Route path="/bookings/:id" element={<Booking/>}/>
                <Route path="/clinics" element={<Clinic/>}/>
                <Route path="/clinics/:id" element={<ClinicDetail/>}/>
                <Route path="/specializations" element={<Specialization/>}/>
                <Route path="/specializations/:id" element={<SpecializationDetail/>}/>
                <Route path="/booking/:id" element={<Booking/>}/>
                <Route path="/booking-success/:id" element={<BookingSuccess/>}/>
            </Routes>
        </>
    );
}

export default ClientComponent;
