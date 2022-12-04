import axios from "axios";


const fetchSpecializations = async (name = '') => {
    let url = 'http://localhost:3000/specializations';
    if (name !== '') {
        url += `?name=${name}`;
    }
    const {data} = await axios.get(url)
    return data
}

const fetchSpecializationsByClinic = async (id, name = '') => {
    let url = `http://localhost:3000/clinics/${id}/specializations`;
    if (name !== '') {
        url += `?name=${name}`;
    }
    const {data} = await axios.get(url)
    return data
}

const fetchDoctorsBySpecialization = async (id) => {
    if(id){
        const {data} = await axios.get(`http://localhost:3000/doctors/specializations/${id}`)
        return data
    }
    else {
        return []
    }
}

const fetchDoctorsByClinic = async (id,specializationId,name) => {
    if(specializationId){
        let url = `http://localhost:3000/clinics/${id}/specializations/${specializationId}`;
        if (name !== '') {
            url += `?name=${name}`;
        }

        const {data} = await axios.get(url)
        return data
    }
    else {
        return []
    }
}

export {fetchSpecializations, fetchDoctorsBySpecialization, fetchDoctorsByClinic, fetchSpecializationsByClinic}
