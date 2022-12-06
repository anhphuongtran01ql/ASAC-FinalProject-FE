import './doctor.css';

import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Breadcrumb, Button, Avatar, Divider, Select} from 'antd';
import {ScheduleOutlined, HomeOutlined} from '@ant-design/icons';
import {scheduleInfo} from "../DATA/doctor/doctorData";
import {GetDates} from "../Utils/Utils";
import {useQuery} from "@tanstack/react-query";
import {fetchDoctorById, fetchScheduleDoctorBydate} from "../Services/Doctor/doctorService";
import Loading from "../General/Loading";
import Back from "../General/Back";

const DoctorDetail = () => {
    const nextSevenDays = GetDates(new Date(), 7);
    const [scheduleValue, setScheduleValue] = useState(nextSevenDays[0].value);
    const {id} = useParams();
    const {
        data: doctor,
        isLoading:isDoctorDataLoading,
        isFetching: isDoctorDataFetching,
    } = useQuery({
        queryKey: ['doctor', id],
        queryFn: () => fetchDoctorById(id)
    })
    const {
        data: doctorSchedules,
        error,
        isError,
        isLoading,
        isFetching,
        refetch: refetchSchedule
    } = useQuery({
        queryKey: ['doctorSchedules', id, scheduleValue],
        queryFn: () => fetchScheduleDoctorBydate(id, scheduleValue)
    })
    const time = doctorSchedules && doctorSchedules.time !== '' ? JSON.parse(doctorSchedules.time) : []
    const onScheduleClick = (value) => {
        setScheduleValue(value)
        refetchSchedule()
    }
    useEffect(() => {
        return (() => {
            const bookingData = {
                scheduleDate: scheduleValue,
            }
            localStorage.setItem(`booking_${id}`, JSON.stringify(bookingData));
        })
    }, [id, scheduleValue])

    return (
        <>
            <Back title={doctor?.name}/>
            {isDoctorDataFetching || isDoctorDataLoading ?
                <Loading/>
                :
                <div className="container-doctor-detail margin-left">
                    <div style ={{width:'70%',paddingBottom:'60px'}}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">
                                <HomeOutlined/>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="/specializations">
                                <span>Specialist examination</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href={`/specializations/${doctor.specializationId}`}>
                                {doctor.specializationName}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="content-container">
                            <div className="avatar-container">
                                <Avatar
                                    size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
                                    icon={<img src={doctor?.avatar} alt="avatar-doctor"/>}
                                />
                                <div>
                                    <div className="doctor-name">
                                        {doctor?.name}
                                    </div>
                                    <div dangerouslySetInnerHTML={{__html: doctor.generalInfo}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="schedule-container">
                            <Select
                                defaultValue={nextSevenDays[0]}
                                style={{width: '200px'}}
                                onChange={onScheduleClick}
                                options={nextSevenDays}
                            />
                        </div>
                        <div className="bold">
                            <ScheduleOutlined/> <span>Schedule</span>
                        </div>
                        <div className="schedule-order">
                            <div>
                                <div className="choose-time">
                                    {doctorSchedules || time.length > 0
                                        ?
                                        time.map((item, index) =>
                                            <Link key={index} className="link" to={`/booking/${id}?time=${item.time}`}>
                                                    <Button disabled={item.status}>{item.time}</Button>
                                            </Link>
                                        )
                                        : <div>No data</div>
                                    }
                                </div>
                                <div>Choose and book a schedule (booking fee 0đ)</div>
                            </div>
                            <div className="address-style">
                                <div className="address-title">ADDRESS</div>
                                <b>{doctor.clinicName}</b>
                                <div>{doctor.clinicAddress}</div>
                                <div className="address-title">PRICE: <span>{scheduleInfo.price}.</span></div>
                                <div className="address-title">TYPE OF INSURANCE APPLICATION.</div>
                            </div>
                        </div>
                        <Divider/>
                        <div className="more-info">
                            <div dangerouslySetInnerHTML={{__html: doctor.description}}/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default DoctorDetail;
