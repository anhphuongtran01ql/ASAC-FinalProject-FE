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

const HomePage = () => {
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

      <div className='slider-style'>
        <div className="container-home padding-swiper">
          <div className="remote-title">
            <div>{REMOTESLIDER.title}</div>
            <Button type="primary" >See more</Button>
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

    </div>
  )
}

export default HomePage;
