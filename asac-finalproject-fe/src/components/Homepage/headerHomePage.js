import {DATA} from "../DATA/home/HomeConstant";
import {Link, useNavigate} from "react-router-dom";
import {QuestionCircleOutlined} from "@ant-design/icons";
import React from "react";

const HeaderHomePage = () => {
    const navigate = useNavigate();
    return (<header className="header-homepage">
        <div className="container-home header">
            <div className="logo">
               <img onClick={() => navigate("/") } src='https://bookingcare.vn/assets/icon/bookingcare-2020.svg' alt="BookingCare/"/>
            </div>

            <div className="menu">
                {DATA.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link to={item.link}>{item.title}</Link>
                            <div className="description-header">{item.description}</div>
                        </div>)
                })}
            </div>

            <div className="support">
                <QuestionCircleOutlined/>
                Support
            </div>
        </div>
    </header>)

}
export default HeaderHomePage;
