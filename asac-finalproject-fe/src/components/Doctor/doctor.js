import './doctor.css';

import React from 'react';
import { Avatar, List } from 'antd';
import { Layout } from 'antd';
import { Input } from 'antd';
import {Link} from "react-router-dom";

const { Content } = Layout;
const { Search } = Input;

const data = [
    {
        id:1,
        name: 'Phó giáo sư, Tiến Sĩ, Bác sĩ CK II Nguyễn Văn Quýnh',
        avatar:"https://cdn.bookingcare.vn/fr/w200/2022/05/05/104945-nguyen-van-quynh-pgs.jpg",
        description: "Tim mạch"
    },
    {
        id:2,
        name: 'Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thọ Lộ',
        avatar:"https://cdn.bookingcare.vn/fr/w200/2019/12/31/155850-pgs-nguyen-tho-lo.jpg",
        description: "Thần kinh - cột sống - ngoại thần kinh"
    },
    {
        id:3,
        name: 'Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An',
        avatar:"https://cdn.bookingcare.vn/fr/w200/2020/01/03/090559-pgs-nguyen-thi-hoai-an.jpg",
        description: "Tai mũi họng - nhi khoa"

    },
    {
        id:4,
        name: 'Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Minh Quang',
        avatar:"https://cdn.bookingcare.vn/fr/w200/2019/12/31/161245-pgs-vu-thi-thanh-thuy.jpg",
        description: "Đa khoa"
    },
];

const Doctor = () => {
    const onSearch = (value) => console.log(value);

    return (
        <div className="container">
            <div className="title-result">Results</div>

            <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                className="search"
                style={{
                }}
            />

            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    height:'100%'
                }}
            >
            <div className="title-result">Out Standing Doctors</div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<Link to={`/doctor/${item.id}`}>{item.name}</Link>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
            </Content>
        </div>
    );
}
export default Doctor;
