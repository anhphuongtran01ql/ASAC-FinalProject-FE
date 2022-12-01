import React, { useState } from "react";

import "./homepage.css";
import {DATA, REMOTESLIDER, SELECTION} from '../DATA/home/HomeConstant'
import {QuestionCircleOutlined} from '@ant-design/icons';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper";
import { Button } from 'antd';

const HomePage = () => {
  return (
    <div>
      <header>
        <div className="container header">
          <div className="logo">
            <img src='https://bookingcare.vn/assets/icon/bookingcare-2020.svg' alt="BookingCare/"/>
          </div>

          <div className="menu">
            {DATA.map((item, index) => {
              return (
                <div key={index}>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                </div>)
            })}
          </div>

          <div className="support">
            <QuestionCircleOutlined/>
            Hỗ trợ
          </div>
        </div>
      </header>

      <div className="banner">
        <div>

        </div>
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

      <div className="container padding-swiper">
        <div className="remote-title">
          <div>{REMOTESLIDER.title}</div>
          <Button type="primary">Primary</Button>
        </div>
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {REMOTESLIDER.data.map((value, index) => (
            <SwiperSlide>
              <img src={value.image} alt={`remote_image_${index}`}/>
              <div>{value.title}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default HomePage;
