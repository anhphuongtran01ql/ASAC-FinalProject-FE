import React, {useState} from 'react';
import {Route, useParams} from 'react-router-dom';
import {Button, Input, Radio, Layout} from 'antd';
import {
    UserOutlined,
    CalendarOutlined,
    PhoneOutlined,
    PlusCircleOutlined,
    EnvironmentOutlined
} from '@ant-design/icons';
import './booking.css';

const { Content } = Layout;
const Booking = () => {
    const {id} = useParams();
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
    return (
        <div>
            <div>

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
                    <Input placeholder="default size" prefix={<UserOutlined/>}/>
                    <Radio.Group onChange={radioOnchange} value={gender}>
                        {genderData.map((item, index) =>
                            <Radio key={index} value={item.value}>{item.name}</Radio>)
                        }
                    </Radio.Group>
                    <Input placeholder="default size" prefix={<PhoneOutlined/>}/>
                    <Input placeholder="default size" prefix={<CalendarOutlined/>}/>
                    <Input placeholder="default size" prefix={<EnvironmentOutlined/>}/>
                    <Input placeholder="default size" prefix={<PlusCircleOutlined/>}/>

                    <Button type="primary" onClick={handleSubmit}>Confirm</Button>
                </div>
            </div>
        </div>
    );
}
export default Booking;
