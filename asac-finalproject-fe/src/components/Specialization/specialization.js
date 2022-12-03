import '../Doctor/doctor.css';

import React, {useState} from 'react';
import {Avatar, List} from 'antd';
import {Layout} from 'antd';
import {Input} from 'antd';
import {Link} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {fetchSpecializations} from "../Services/Specialization/specializationService";
import Loading from "../General/Loading";
import Back from "../General/Back";

const {Content} = Layout;
const {Search} = Input;

// const data = [
//     {
//         "name": "Cơ Xương Khớp",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg"
//     },
//     {
//         "name": "Thần kinh",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121042-than-kinh.jpg"
//     },
//     {
//         "name": "Tiêu hoá",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120933-tieu-hoa.jpg"
//     },
//     {
//         "name": "Tim mạch",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/13/120741-tim-mach.jpg"
//     },
//     {
//         "name": "Tai Mũi Họng",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121146-tai-mui-hong.jpg"
//     },
//     {
//         "name": "Cột sống",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121215-cot-song.jpg"
//     },
//     {
//         "name": "Y học Cổ truyền",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121232-y-hoc-co-truyen.jpg"
//     },
//     {
//         "name": "Châm cứu",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/13/121305-cham-cuu.jpg"
//     },
//     {
//         "name": "Sản Phụ khoa",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/181822-san-phu-khoa.jpg"
//     },
//     {
//         "name": "Siêu âm thai",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/181619-sieu-am-thai.jpg"
//     },
//     {
//         "name": "Nhi khoa",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/175620-nhi-khoa.jpg"
//     },
//     {
//         "name": "Da liễu",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/175809-da-lieu.jpg"
//     },
//     {
//         "name": "Bệnh Viêm gan",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/182233-viem-gan.jpg"
//     },
//     {
//         "name": "Sức khỏe tâm thần",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/182940-roi-loan-giac-ngu.jpg"
//     },
//     {
//         "name": "Dị ứng miễn dịch",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/183706-di-ung-mien-dich.jpg"
//     },
//     {
//         "name": "Hô hấp - Phổi",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2020/09/30/141059-ung-thu-phoi.jpg"
//     },
//     {
//         "name": "Ngoại thần kinh",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2022/05/27/172508-145b3e2c46f7bddcf859384a0b3c1435.jpg"
//     },
//     {
//         "name": "Nam học",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/184456-nam-hoc.jpg"
//     },
//     {
//         "name": "Chuyên khoa Mắt",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/190150-chuyen-khoa-mat.jpg"
//     },
//     {
//         "name": "Thận - Tiết niệu",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/190750-than-tiet-nieu.jpg"
//     },
//     {
//         "name": "Nội khoa",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/192154-noi-khoa.jpg"
//     },
//     {
//         "name": "Nha khoa",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/182050-nha-khoa.jpg"
//     },
//     {
//         "name": "Tiểu đường - Nội tiết",
//         "avatar": "https://cdn.bookingcare.vn/fr/w300/2019/12/16/192804-tieu-duong-noi-tiet.jpg"
//     }
// ];

const Specialization = () => {
    const [name, setName] = useState('')
    const {
        data: specializations,
        error,
        isError,
        isLoading,
        isFetching,
        refetch
    } = useQuery({queryKey: ['specializations', name], queryFn: () => fetchSpecializations(name)})

    const onSearch = (value) => {
        setName(value)
        refetch()
    }

    return (
        <>
            <Back/>
            <div className="container margin-top-back-button">
                <div className="title-result">Results</div>
                <Search
                    placeholder="Search specializations"
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
                    <div className="title-result">Specializations</div>
                    {isLoading || isFetching ?
                        <Loading/>
                        :
                        <List
                            itemLayout="horizontal"
                            dataSource={specializations}
                            renderItem={(item) => (
                                <List.Item className='doctor-list'>
                                    <List.Item.Meta
                                        avatar={<img style={{height: '80px', width: '150px'}} src={item.image} alt='123'/>}
                                        title={<Link to={`/specializations/${item.id}`}>{item.name}</Link>}
                                    />
                                </List.Item>
                            )}
                        />
                    }
                </Content>
            </div>
        </>
    );
}
export default Specialization;
