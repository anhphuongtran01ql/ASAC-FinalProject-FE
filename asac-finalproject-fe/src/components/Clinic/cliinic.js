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
                                    title={<Link to={`/doctors/${item.id}`}>{item.name}</Link>}
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
