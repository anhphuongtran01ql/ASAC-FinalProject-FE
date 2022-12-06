import "./bookApointment.css"

import React, {useState} from 'react';
import {Select, Input} from 'antd';
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {
    fetchDoctorsByClinic,
    fetchSpecializationsByClinic
} from "../../Services/Specialization/specializationService";
import Loading from "../../General/Loading";
import ListDoctors from "../../General/ListDoctors";

const {Search} = Input;

const BookAppointment = ({clinicId}) => {
    const queryClient = useQueryClient()
    const [specializationId, setSpecializationId] = useState()
    const [name, setName] = useState('')

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

    const handleSelectSpecialization = (value,e) => {
        setSpecializationId(value)
    };

    const onSearch = (value,e) => {
        e.preventDefault()
        setName(value)
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
