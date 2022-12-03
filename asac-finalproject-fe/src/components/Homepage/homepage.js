import React, { useState } from "react";

import "./home.css";
import { REMOTESLIDER, SELECTION} from '../DATA/home/HomeConstant'
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper";
import { Button } from 'antd';
import HeaderHomePage from "./headerHomePage";
import {useQuery} from "@tanstack/react-query";
import {fetchSpecializations} from "../Services/Specialization/specializationService";
import Loading from "../General/Loading";
import {fetchClinics} from "../Services/Clinic/clinicService";
import {fetchDoctors} from "../Services/Doctor/doctorService";
import {Link, useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const {
        data: specializations,
        isLoading: isSpecializationsLoading,
        isFetching: isSpecializationsFetching,
    } = useQuery({queryKey: ['specializations'], queryFn: () => fetchSpecializations()})

    const {
        data: clinics,
        isLoading: isClinicsLoading,
        isFetching: isClinicsFetching,
    } = useQuery({queryKey: ['clinics'], queryFn: () => fetchClinics()})

    const {
        data: doctors,
        isLoading:isDoctorsLoading,
        isFetching: isDoctorsFetching,

    } = useQuery({queryKey: ['doctors'], queryFn:()=> fetchDoctors()})
  return (
    <div>
      <HeaderHomePage/>
      <div className="banner">
        <div className="selection">
          {SELECTION.map((item, index) =>
            (
              <div className="select-item" key={index}>
                <div className="wrap-image">
                  <img src={item.icon} alt={`img ${index}`}/>
                </div>
                <div>{item.title}</div>
              </div>)
          )}
        </div>
      </div>

      <div className='slider-specialization-style'>
        <div className="container-home padding-swiper">
          <div className="remote-title">
            <div>Popular specializations</div>
              <Link to={'/specializations'}>
                <Button type="primary" >See more</Button>
              </Link>
          </div>
            {isSpecializationsLoading || isSpecializationsFetching ?
                <Loading/>  :
                <Swiper
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    spaceBetween={10}
                    slidesPerView={4}
                >
                {specializations.map((value, index) => (
                    <SwiperSlide key={index} onClick={()=> navigate(`/specializations/${value.id}`)}>
                        <img style={{height:'150px'}} src={value.image} alt={`${value.name} ${index}`}/>
                        <div>{value.name}</div>
                    </SwiperSlide>
                ))}
              </Swiper>}
        </div>
      </div>

      <div className='slider-clinic-style'>
          <div className="container-home padding-swiper">
              <div className="remote-title">
                  <div>Popular Clinics</div>
                  <Link to={'/clinics'}>
                      <Button type="primary" >See more</Button>
                  </Link>
              </div>
              {isClinicsLoading || isClinicsFetching ?
                  <Loading/>  :
                  <Swiper
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                      spaceBetween={10}
                      slidesPerView={4}
                  >
                      {clinics.map((value, index) => (
                          <SwiperSlide key={index}  className="slider-clinic-content-style" onClick={()=> navigate(`/clinics/${value.id}`)}>
                              <img style={{height:'150px'}} src={value.image} alt={`${value.name} ${index}`}/>
                              <div >{value.name}</div>
                          </SwiperSlide>
                      ))}
                  </Swiper>}
          </div>
      </div>

      <div className='slider-specialization-style'>
            <div className="container-home padding-swiper">
                <div className="remote-title">
                    <div>Popular Doctors</div>
                    <Link to={'/doctors'}>
                        <Button type="primary" >See more</Button>
                    </Link>
                </div>
                {isDoctorsLoading || isDoctorsFetching ?
                    <Loading/>  :
                    <Swiper
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        spaceBetween={10}
                        slidesPerView={4}
                    >
                        {doctors.slice(0,5).map((value, index) => (
                            <SwiperSlide key={index} onClick={()=> navigate(`/doctors/${value.id}`)}>
                                <img style={{height:'150px',objectFit:'fill'}} src={value.avatar} alt={`${value.name} ${index}`}/>
                                <div >{value.name}</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>}
            </div>
        </div>

    </div>
  )
}

export default HomePage;
