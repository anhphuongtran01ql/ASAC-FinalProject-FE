import axios from "axios";


const fetchClinics = async (name) => {
    let url = 'http://localhost:3000/clinics';
    if (name !== ''){
        url +=`?name=${name}`;
    }
    const {data} = await axios.get(url)
    return data
}

export {fetchClinics}
