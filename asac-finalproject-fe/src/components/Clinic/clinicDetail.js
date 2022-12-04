import '../Doctor/doctor.css';

import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useQuery} from "@tanstack/react-query";
import Loading from "../General/Loading";
import Back from "../General/Back";
import {Divider, Tabs} from 'antd';
import {fetchClinicById} from "../Services/Clinic/clinicService";
import InfoTab from "./clinicDetail/infoTab";
import {EQUIPMENT, INTRODUCE, INTRODUCEIMG} from "../DATA/clinic/clinicDetail";
import BookAppointment from "./clinicDetail/bookAppointment";

const ClinicDetail = () => {
    const {id} = useParams();
    const {
        data: clinic,
        isLoading: isClinicsDataLoading,
        isFetching: isClinicsDataFetching,
    } = useQuery({
        queryKey: ['clinics', id],
        queryFn: () => fetchClinicById(id)
    })
    // const onChange = (key) => {
    //     console.log(key);
    // };
    return (
        <>
            {isClinicsDataFetching || isClinicsDataLoading ?
                <div>
                    <Back />
                    <Loading/>
                </div>
                    :
                <div>
                    <Back title={clinic.name}/>
                    <div className="white-background">
                        <div className="general-container-style">
                            <div className="card-container">
                                <Tabs
                                    type="card"
                                    items={
                                        [
                                            {
                                                label: "Book an appointment",
                                                key: 1,
                                                children: <BookAppointment clinicId={id}/>
                                            },
                                            {
                                                label: "Introduce",
                                                key: 2,
                                                children: <InfoTab title="Introduce" content={INTRODUCE}/>
                                            },
                                            {
                                                label: "Equipment",
                                                key: 3,
                                                children:<InfoTab
                                                    title="Equipment"
                                                    content={EQUIPMENT}
                                                    img="https://cdn.bookingcare.vn/fr/w800/2020/05/29/105331-ban-do-pkdhyd1.png"/>
                                            },
                                            {
                                                label: "Location",
                                                key: 4,
                                                children:<InfoTab
                                                    title="Location"
                                                    content="The Medical University Hospital 1 clinic is close to 115 People's Hospital."
                                                    img={INTRODUCEIMG}/>
                                            }
                                        ]
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default ClinicDetail;
