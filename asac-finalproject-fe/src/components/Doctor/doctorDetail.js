import './doctor.css';

import React from 'react';
import {Route, useParams} from 'react-router-dom';
import {Breadcrumb, Button, Dropdown, Menu, Space, Avatar, Divider} from 'antd';
import {ScheduleOutlined, DownOutlined, HomeOutlined} from '@ant-design/icons';
import {doctor, scheduleInfo, time} from "../DATA/doctor/doctorData";

import GetDates from "../Utils/Utils";

const DoctorDetail = () => {
    const nextSevenDays = GetDates(new Date(), 7);

    const handleItemOnclick = (e) => {
        console.log('key', e.key)
    }
    const menu = (
        <Menu
            onClick={handleItemOnclick}
            items={
                nextSevenDays.map((item, index) => {
                    return {
                        key: item.key,
                        label: (
                            item.value
                        )
                    }
                })
            }
        />
    );

    const {id} = useParams();

    const onScheduleClick = (e) => {
        e.preventDefault()
    }

    const scheduleClick = () => {
    }

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
                    <Dropdown overlay={menu}>
                        <a onClick={onScheduleClick}>
                            <Space>
                                Schedule
                                <DownOutlined/>
                            </Space>
                        </a>
                    </Dropdown>
                </div>

                <div className="bold">
                    <ScheduleOutlined/> <span>Schedule</span>
                </div>
                <div className="schedule-order">
                    <div>
                        <div className="choose-time">
                            {time.map((item, index) =>
                                <Button key={index} onClick={scheduleClick}>{item.content}</Button>
                            )}
                        </div>
                        <div>Choose and book a schedule (booking fee 0đ)</div>
                    </div>
                    <Divider className="vertical-divider" type="vertical"/>
                    <div>
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
