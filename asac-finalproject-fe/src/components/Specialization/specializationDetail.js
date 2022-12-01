import '../Doctor/doctor.css';

import React, {useState} from 'react';
import {List} from 'antd';
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
                        <div className='title-result'>{doctors.name}</div>
                        <ShowMoreText
                            lines={5}
                            more="Show more"
                            less="Show less"
                            className="content-css"
                            anchorClass="show-more-less-clickable"
                            expanded={false}
                            width={280}
                            truncatedEndingComponent={"... "}
                        >
                            <div dangerouslySetInnerHTML={{__html: doctors.description}}/>
                        </ShowMoreText>
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
