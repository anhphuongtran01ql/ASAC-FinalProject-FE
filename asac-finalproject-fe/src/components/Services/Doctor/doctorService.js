import axios from "axios";


const fetchDoctors = async (name = '') => {
    let url = 'http://localhost:3000/doctors';
    if (name !== '') {
        url += `?name=${name}`;
    }
    const {data} = await axios.get(url)
    return data
}

const fetchScheduleDoctorBydate = async (id, date) => {
    let url = `http://localhost:3000/schedule-of-doctors-by-date?doctorId=${id}`;
    if (date !== '') {
        url += `&date=${date}`;
    }
    const {data} = await axios.get(url)
    return data
}

const fetchDoctorById = async (id) => {
    const {data} = await axios.get(`http://localhost:3000/doctors/${id}`);
    return data
}


export {fetchDoctors, fetchScheduleDoctorBydate, fetchDoctorById}
