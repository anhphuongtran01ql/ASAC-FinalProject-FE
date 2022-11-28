import React, {useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {Button, Input, Radio, Layout, InputNumber} from 'antd';
import {doctor} from '../DATA/doctor/doctorData';
import {
    UserOutlined,
    CalendarOutlined,
    PhoneOutlined,
    PlusCircleOutlined,
    EnvironmentOutlined
} from '@ant-design/icons';
import './booking.css';

const { Content } = Layout;

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Booking = () => {
    const {id} = useParams();
    const query = useQuery();
    console.log('id',id)
    console.log('time',query.get("time"))
    const [gender, setGender] = useState(0);

    const priceData = {
        price: '300 000đ'
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
    const radioOnchange = (e) => {
        console.log('radio checked', e.target.value);
        setGender(e.target.value);
    };
    const handleSubmit = () => {

    }
    const onChange = (value) => {
        console.log('changed', value);
    };
    return (
        <div>
            <div>
                <div>
                    BOOK YOUR SCHEDULE
                </div>
                <div className="booking-doctor-title">
                    {doctor.name}
                </div>
                <div>
                    {query.get("time")} - {}
                </div>
            </div>
            <div className="container-doctor-detail">
                <div className="booking-create-container">
                    <div>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: '10px',
                                borderRadius:'5px',
                                border: '1px solid #f89008',
                                boxShadow:'0 2px 3px 0 rgb(0 0 0 / 15%)'
                                // minHeight: 280,
                                // height:'100%'
                            }}
                        >
                            <Radio value={1}>examination price</Radio>
                            <div>{priceData.price}</div>
                        </Content>

                    </div>
                    <Input placeholder="Name" style={{
                        width:'100%'
                    }} prefix={<UserOutlined/>}/>
                    <Radio.Group onChange={radioOnchange} value={gender}>
                        {genderData.map((item, index) =>
                            <Radio key={index} value={item.value}>{item.name}</Radio>)
                        }
                    </Radio.Group>
                    <Input placeholder="Phone" prefix={<PhoneOutlined/>}/>
                    <InputNumber style={{width:'100%'}} min={1} defaultValue={3} placeholder="Year of Birth" onChange={onChange} prefix={<CalendarOutlined/>} />
                    <Input placeholder="Address" prefix={<EnvironmentOutlined/>}/>
                    <Input placeholder="Reason" prefix={<PlusCircleOutlined/>}/>

                    <Button type="primary" onClick={handleSubmit}>Confirm</Button>
                </div>
            </div>
        </div>
    );
}
export default Booking;
