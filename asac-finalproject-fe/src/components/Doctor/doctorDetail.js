import './doctor.css';

import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Breadcrumb, Button, Avatar, Divider, Select} from 'antd';
import {ScheduleOutlined, HomeOutlined} from '@ant-design/icons';
import {doctor, scheduleInfo, time} from "../DATA/doctor/doctorData";

import GetDates from "../Utils/Utils";

const DoctorDetail = () => {
    const nextSevenDays = GetDates(new Date(), 7);
    const [scheduleValue, setScheduleValue] = useState('');

    const {id} = useParams();

    const onScheduleClick = (value) => {
        setScheduleValue(value)
    }

    useEffect(()=>{
        return(()=>{
            const bookingData = {
                scheduleDate: scheduleValue,
            }
            console.log('booking', bookingData)
            localStorage.setItem(`booking_${id}`,JSON.stringify(bookingData));
        })
    },[id,scheduleValue])

    return (
        <div className="container-doctor-detail">
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="/login">
                        <HomeOutlined/>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <span>Specialist examination</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Heart</Breadcrumb.Item>
                </Breadcrumb>

                <div className="content-container">
                    <div className="avatar-container">
                        <div>
                            <Avatar
                                size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
                                icon={<img src={doctor.img} alt="avatar-doctor"/>}
                            />
                        </div>
                        <div>
                            <div className="doctor-name">
                                {doctor.name}
                            </div>
                            <div dangerouslySetInnerHTML={{__html: doctor.description}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="schedule-container">
                    <Select
                      defaultValue={nextSevenDays[0]}
                      style={{ width: '200px' }}
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
                            {time.map((item, index) =>
                                <Link key={index} className="link" to={`/booking/${id}?time=${item.content}`}>
                                    <Button>{item.content}</Button>
                                </Link>
                            )}
                        </div>
                        <div>Choose and book a schedule (booking fee 0đ)</div>
                    </div>
                    <div className="address-style" >
                        <div className="address-title">ADDRESS</div>
                        <div dangerouslySetInnerHTML={{__html: scheduleInfo.address}}/>
                        <div className="address-title">PRICE: <span>{scheduleInfo.price}.</span></div>
                        <div className="address-title">TYPE OF INSURANCE APPLICATION.</div>
                    </div>
                </div>
                <Divider/>
                <div className="more-info">
                    <div className="title-more-info">{doctor.name}</div>
                    <div dangerouslySetInnerHTML={{__html: doctor.moreInformation}}/>
                    <div className="title-more-info">{doctor.examinationAndTreatment}</div>
                    <div dangerouslySetInnerHTML={{__html: doctor.moreInformation}}/>
                </div>
            </div>
        </div>
    );
}
export default DoctorDetail;
