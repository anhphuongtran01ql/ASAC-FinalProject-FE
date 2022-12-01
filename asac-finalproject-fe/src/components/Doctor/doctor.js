import './doctor.css';

import React, {useState} from 'react';
import { Avatar, List } from 'antd';
import { Layout } from 'antd';
import { Input } from 'antd';
import {Link} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {fetchClinics} from "../Services/Clinic/clinicService";
import {fetchDoctors} from "../Services/Doctor/doctorService";
import Loading from "../General/Loading";

const { Content } = Layout;
const { Search } = Input;

const Doctor = () => {
    const [name,setName] = useState('')
    const {
        data: doctors,
        error,
        isError,
        isLoading,
        isFetching,
        refetch
    } = useQuery({queryKey: ['doctors', name], queryFn:()=> fetchDoctors(name)})
    const onSearch = (value) => {
        setName(value)
        refetch()
    }

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
                {isLoading || isFetching ?
                    <Loading/>
                    :
                    <List
                        itemLayout="horizontal"
                        dataSource={doctors}
                        renderItem={(item) => (
                            <List.Item className='doctor-list'>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar}/>}
                                    title={<Link to={`/doctors/${item.id}`}>{item.name}</Link>}
                                    description={item.specialization}
                                />
                            </List.Item>
                        )}
                    />
                }
            </Content>
        </div>
    );
}
export default Doctor;
