import "./bookApointment.css"

import React, {useState} from 'react';
import {Select, Input} from 'antd';
import {useQuery} from "@tanstack/react-query";
import {
    fetchDoctorsByClinic,
    fetchSpecializationsByClinic
} from "../../Services/Specialization/specializationService";
import Loading from "../../General/Loading";
import ListDoctors from "../../General/ListDoctors";

const {Search} = Input;

const BookAppointment = ({clinicId}) => {
    const [specializationId, setSpecializationId] = useState()
    const [name, setName] = useState('')
    //write get specializationByClinicId
    const {
        data: specializations,
        isLoading: isSpecializationsLoading,
        isFetching: isSpecializationsFetching,
    } = useQuery({queryKey: ['specializations',clinicId], queryFn: () => fetchSpecializationsByClinic(clinicId)})

    const {
        data: doctors,
        isLoading: isDoctorsLoading,
        isFetching: isDoctorsFetching,
        refetch: refetchDoctors
    } = useQuery({
        queryKey: ['doctorsBySpecialization', clinicId, specializationId, name],
        queryFn: () => fetchDoctorsByClinic(clinicId, specializationId, name)
    })

    const handleSelectSpecialization = (value) => {
        setSpecializationId(value)
        refetchDoctors()
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        setName(value)
        refetchDoctors()
    }

    return (
        <div className="book-appointment-container">
            {isSpecializationsLoading || isSpecializationsFetching ? <Loading/> :
                <div className="select-and-search-section">
                    <Select
                        showSearch
                        style={{
                            width: '500px',
                        }}
                        placeholder="Choose Specializations"
                        optionFilterProp="children"
                        onChange={handleSelectSpecialization}
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={specializations.map((item, index) => {
                            return {
                                value: item.id,
                                label: item.name
                            }
                        })}
                    />
                    <Search
                        placeholder="Search doctors"
                        allowClear
                        onSearch={onSearch}
                        className="search"
                        style={{
                            width:"40%"
                        }}
                    />
                </div>
            }

            <div>
                {isDoctorsLoading || isDoctorsFetching ? <Loading/> :
                    <ListDoctors doctors={doctors}/>}
            </div>
        </div>
    )
}
export default BookAppointment
