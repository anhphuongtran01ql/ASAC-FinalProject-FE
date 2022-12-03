import axios from "axios";


const fetchSpecializations = async (name = '') => {
    let url = 'http://localhost:3000/specializations';
    if (name !== '') {
        url += `?name=${name}`;
    }
    const {data} = await axios.get(url)
    return data
}

const fetchDoctorsBySpecialization = async (id) => {
    const {data} = await axios.get(`http://localhost:3000/doctors/specializations/${id}`)
    return data
}

export {fetchSpecializations, fetchDoctorsBySpecialization}
