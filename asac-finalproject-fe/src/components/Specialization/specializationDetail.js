import '../Doctor/doctor.css';

import React, {useState} from 'react';
import {Button, List} from 'antd';
import {Layout} from 'antd';
import {Link, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import Loading from "../General/Loading";
import {fetchDoctorsBySpecialization} from "../Services/Specialization/specializationService";
import {Sanitized} from "../Utils/Utils";
import ShowMoreText from "react-show-more-text";

const {Content} = Layout;
const SpecializationDetail = () => {
    const {id} = useParams();
    const {
        data: doctors,
        error,
        isError,
        isLoading,
        isFetching,
    } = useQuery({queryKey: ['doctorsBySpecialization', id], queryFn: () => fetchDoctorsBySpecialization(id)})
    const [onShowMoreClick, setOnshowMoreClick] = useState(false)

    return (
        <>
            {isFetching || isLoading ? <Loading/> :
                <div className="container flex-column">
                    <Content className="site-layout-background background-image-specialization" style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        height: '100%'
                    }}>
                        <div style = {{height:onShowMoreClick ? 'fit-content':'200px',overflow:'hidden'}} dangerouslySetInnerHTML={{__html: doctors.description}}>
                        </div>
                        <Button style={{marginTop:'20px'}} onClick={() => setOnshowMoreClick(!onShowMoreClick)}>{onShowMoreClick ? "Show less": "Show more"}</Button>
                    </Content>

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
                            Outstanding Doctors
                        </div>
                        <List
                            itemLayout="horizontal"
                            dataSource={doctors.data}
                            renderItem={(item) => (
                                <List.Item className='doctor-list'>
                                    <List.Item.Meta
                                        avatar={<img style={{height: '80px'}} src={item.avatar} alt='123'/>}
                                        title={<Link to={`/doctor/${item.id}`}>{item.name}</Link>}
                                        description={<Sanitized html={item.generalInfo}/>}
                                    />
                                </List.Item>
                            )}
                        />
                    </Content>
                </div>
            }
        </>
    );
}
export default SpecializationDetail;
