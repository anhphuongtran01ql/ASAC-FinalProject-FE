import React from 'react';
import {useParams} from 'react-router-dom';
import {Input, Radio, Layout, InputNumber, Avatar} from 'antd';
import {doctor} from '../DATA/doctor/doctorData';

import {useForm, Controller} from "react-hook-form";
import {
    useQuery,
    useMutation,
} from '@tanstack/react-query';
import {
    UserOutlined,
    CalendarOutlined,
    PhoneOutlined,
    PlusCircleOutlined,
    EnvironmentOutlined, MailOutlined
} from '@ant-design/icons';
import './booking.css';
import {createSchedule} from "../Services/Booking/bookingService";
import {fetchDoctorById} from "../Services/Doctor/doctorService";
import {useQueryParams} from "../Utils/Utils";
import Back from "../General/Back";
import Loading from "../General/Loading";

const {Content} = Layout;

const Booking = () => {
    const {id} = useParams();
    const query = useQueryParams();
    const date = JSON.parse(`${localStorage.getItem(`booking_${id}`)}`);
    const {
        data: doctor,
        isLoading: isDoctorDataLoading,
        isFetching: isDoctorDataFetching,
    } = useQuery({
        queryKey: ['doctor', id],
        queryFn: () => fetchDoctorById(id)
    })
    const {mutate} = useMutation(createSchedule)
    const defaultValue = {
        email: '',
        name: '',
        address: '',
        gender: 0,
        phone: '',
        reason: '',
        year: '',
    }
    const {handleSubmit, control, formState: {errors}} = useForm();
    const priceData = {
        price: '300,000'
    }
    const genderData = [
        {
            value: 0,
            name: "male"
        },
        {
            value: 1,
            name: "female"
        },
    ]
    const onSubmit = data => {
        const additionalData = {
            doctorId: id,
            dateBooking: date.scheduleDate,
            timeBooking: query.get("time")
        }
        mutate({...data, ...additionalData})
    }


    return (
        <>
            <Back title="Booking"/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container-booking-detail white-background">
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            maxHeight: '150px',
                            background:'#eee',
                            width:'100%'
                        }}
                    >
                        {isDoctorDataLoading ?
                            <Loading/>
                            :
                            <div className="doctor-info">
                                <Avatar style={{height:'120px',width:"120px"}}
                                    size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
                                    icon={<img src={doctor.avatar} alt="avatar-doctor"/>}
                                />
                                <div>
                                    <div>
                                        BOOK YOUR SCHEDULE
                                    </div>
                                    <div className="booking-doctor-title">
                                        {doctor.name}
                                    </div>
                                    <div>
                                        {query.get("time")} - {date.scheduleDate}
                                    </div>
                                </div>
                            </div>
                        }
                    </Content>
                    <div className="booking-create-container">
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #f89008',
                                boxShadow: '0 2px 3px 0 rgb(0 0 0 / 15%)',

                            }}
                        >
                            <Radio.Group value={1}>
                                <Radio value={1}>examination price</Radio>
                            </Radio.Group>
                            <div>{priceData.price}</div>
                        </Content>
                        <Controller
                            control={control}
                            name="name"
                            defaultValue={defaultValue.name}
                            render={({field: {onChange, onBlur, value, ref}}) => (
                                <Input className="input-style" onChange={onChange} value={value} placeholder="Name"
                                       prefix={<UserOutlined/>}/>
                            )}
                        />


                        <Controller
                            control={control}
                            name="gender"
                            defaultValue={defaultValue.gender}
                            render={({field: {onChange, onBlur, value, ref}}) => (
                                <Radio.Group onChange={onChange} value={value}>
                                    {genderData.map((item, index) =>
                                        <Radio key={index} value={item.value}>{item.name}</Radio>)
                                    }
                                </Radio.Group>
                            )}
                        />

                        <Controller
                            control={control}
                            name="email"
                            defaultValue={defaultValue.email}
                            render={({field: {onChange, onBlur, value, ref}}) => (
                                <Input className="input-style" onChange={onChange} value={value}
                                       prefix={<MailOutlined/>}
                                       placeholder="Email"
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="phone"
                            defaultValue={defaultValue.phone}
                            render={({field: {onChange, onBlur, value, ref}}) => (
                                <Input className="input-style" onChange={onChange} value={value} placeholder="Phone"
                                       prefix={<PhoneOutlined/>}/>
                            )}
                        />

                        <Controller
                            control={control}
                            name="year"
                            defaultValue={defaultValue.year}
                            render={({field: {onChange, onBlur, value, ref}}) => (
                                <InputNumber className="input-style"
                                             style={{width: '100%'}} value={value}
                                             min={1}
                                             placeholder="Year of Birth"
                                             onChange={onChange} prefix={<CalendarOutlined/>}/>
                            )}
                        />
                        <Controller
                            control={control}
                            name="address"
                            defaultValue={defaultValue.address}
                            render={({field: {onChange, onBlur, value, ref}}) => (
                                <Input className="input-style" onChange={onChange} value={value} placeholder="Address"
                                       prefix={<EnvironmentOutlined/>}/>
                            )}
                        />
                        <Controller
                            control={control}
                            name="description"
                            defaultValue={defaultValue.reason}
                            render={({field: {onChange, onBlur, value, ref}}) => (
                                <Input className="input-style" onChange={onChange} value={value} placeholder="Reason"
                                       prefix={<PlusCircleOutlined/>}/>
                            )}
                        />
                        <Radio.Group value={1}>
                            <Radio value={1}> Pay later at the medical facility</Radio>)
                        </Radio.Group>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                width: '100%',
                                boxShadow: '0 2px 3px 0 rgb(0 0 0 / 15%)',

                            }}
                        >
                            <div className="price-detail">
                                <div>Examination price</div>
                                <div>{priceData.price} VND</div>
                            </div>
                            <div className="price-detail margin-bottom">
                                <div>Booking fee</div>
                                <div>Free</div>
                            </div>
                            <div className="price-detail divider">
                                <div>Total</div>
                                <div style={{color: 'red'}}>{priceData.price} VND</div>
                            </div>
                        </Content>
                        <div style={{color: '#666'}}>Please fill in the information completely to save time for
                            examination
                            procedures
                        </div>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                width: '100%  ',
                                boxShadow: '0 2px 3px 0 rgb(0 0 0 / 15%)',

                            }}
                        >
                                                <div dangerouslySetInnerHTML={{__html: NOTICE}}/>

                        <div >
                        </Content>
                        <Input type="submit" className="button-confirm-booking"  value="Confirm"/>
                        <div>By confirming your booking, you fully agree to our <span style={{color: '#45c3d2'}}>Terms of Service</span>.
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
export default Booking;
