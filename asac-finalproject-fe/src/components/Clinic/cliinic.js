import '../Doctor/doctor.css';

import React, {useState} from 'react';
import {Avatar, List} from 'antd';
import {Layout} from 'antd';
import {Input} from 'antd';
import {Link} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {fetchClinics} from "../Services/Clinic/clinicService";
import Loading from "../General/Loading";

const {Content} = Layout;
const {Search} = Input;

// const data = [
//     {
//         "name": "Bệnh viện Hữu nghị Việt Đức",
//         "avatar": "https://cdn.bookingcare.vn/fr/w500/2020/06/03/114348-bv-viet-duc.jpg"
//     },
//     {
//         "name": "Bệnh viện Chợ Rẫy",
//         "avatar": "https://cdn.bookingcare.vn/fr/w500/2021/09/14/095119-benh-vien-cho-ray-h1.jpg"
//     },
//     {
//         "name": "Phòng khám Bệnh viện Đại học Y Dược 1",
//         "avatar": "https://cdn.bookingcare.vn/fr/w500/2020/05/29/112414-pk-dhyd1.jpg"
//     },
//     {
//         "name": "Bệnh viện K - Cơ sở Phan Chu Trinh",
//         "avatar": "https://cdn.bookingcare.vn/fr/w500/2020/04/13/114446-anh-bia-bvk.jpg"
//     },
//     {
//         "name": "Bệnh viện Ung bướu Hưng Việt",
//         "avatar": "https://cdn.bookingcare.vn/fr/w500/2020/06/04/095412-bv-hung-viet.jpg"
//     },
//     {
//         "name": "Hệ thống Y tế Thu Cúc TCI",
//         "avatar": "https://cdn.bookingcare.vn/fr/w500/2020/06/04/093035-benh-vien-thu-cuc-1.jpg"
//     },
//     {
//         "name": "Phòng khám Đa khoa Saigon Healthcare",
//         "avatar": "https://cdn.bookingcare.vn/fr/w500/2022/05/12/101727-anh-sg-toan-dien-ben-ngoai.jpg"
//     },
//     {
//         "name": "Bệnh viện Nam học và Hiếm muộn Hà Nội ",
//         "avatar": "https://cdn.bookingcare.vn/fr/w500/2021/04/29/145224-bn-nam-hoc-va-hiem-muon-hn.jpg"
//     },
//     {
//         "name": "Bệnh viện Đa khoa Hồng Phát",
//         "avatar": "https://cdn.bookingcare.vn/fr/w500/2019/09/04/172230benh-vien-hong-phat.jpg"
//     },
//     {
//         "name": "Bệnh viện Đa khoa An Việt",
//         "avatar": "https://cdn.bookingcare.vn/fr/w500/2020/06/04/090854-bv-an-viet1.jpg"
//     }
// ];

const Clinic = () => {
    const [name, setName] = useState('')
    const {
        data: clinics,
        error,
        isError,
        isLoading,
        isFetching,
        refetch
    } = useQuery({queryKey: ['clinics', name], queryFn: () => fetchClinics(name)})
    const onSearch = (value) => {
        setName(value)
        refetch()
    }
    return (
        <div className="container">
            <div className="title-result">Results</div>
            <Search
                placeholder="Search hospitals, clinics"
                allowClear
                onSearch={onSearch}
                className="search"
                style={{}}
            />

            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    height: '100%'
                }}
            >
                <div className="title-result">
                    Outstanding Hospitals and Clinics
                </div>
                {isLoading || isFetching ?
                    <Loading/>
                    :
                    <List
                        itemLayout="horizontal"
                        dataSource={clinics}
                        renderItem={(item) => (
                            <List.Item className='doctor-list'>
                                <List.Item.Meta
                                    avatar={<img style={{height: '80px'}} src={item.image} alt='123'/>}
                                    title={<Link to={`/doctor/${item.id}`}>{item.name}</Link>}
                                    // description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                }
            </Content>
        </div>
    );
}
export default Clinic;
