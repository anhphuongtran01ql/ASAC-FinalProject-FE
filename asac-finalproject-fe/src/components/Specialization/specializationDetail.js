import '../Doctor/doctor.css';

import React, {useState} from 'react';
import {Button, Divider, List} from 'antd';
import {Layout} from 'antd';
import {Link, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import Loading from "../General/Loading";
import {fetchDoctorsBySpecialization} from "../Services/Specialization/specializationService";
import {Sanitized} from "../Utils/Utils";
import Back from "../General/Back";
import ListDoctors from "../General/ListDoctors";

const {Content} = Layout;
const SpecializationDetail = () => {
    const {id} = useParams();
    const {
        data: doctors,
        isLoading,
        isFetching,
    } = useQuery({queryKey: ['doctorsBySpecialization', id], queryFn: () => fetchDoctorsBySpecialization(id)})
    const [onShowMoreClick, setOnshowMoreClick] = useState(false)

    return (
        <>
            <Back/>
            {isFetching || isLoading ? <Loading/> :
                <div className="container-specialization-detail flex-column">
                    <Content className="site-layout-background background-image-specialization" style={{
                        padding: 24,
                        margin: 0,
                        // minHeight: 280,
                        height: '100%',
                    }}>
                        <div className="flex-column general-info-spe">
                            <div>
                                <div className="title-result margin-bottom">{doctors.specializationName}</div>
                                <div style={{height: onShowMoreClick ? "fit-content" : "100px", overflow: "hidden"}}
                                     dangerouslySetInnerHTML={{__html: doctors.description}}>
                                </div>
                                <Button style={{marginTop: '20px'}}
                                        onClick={() => setOnshowMoreClick(!onShowMoreClick)}>{onShowMoreClick ? "Show less" : "Show more"}</Button>
                            </div>
                        </div>
                    </Content>
                    <div style={{margin:'0 30px'}}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                height: '100%',
                            }}
                        >
                            <div className="title-result">
                                Outstanding Doctors
                            </div>
                            <ListDoctors doctors={doctors}/>
                        </Content>
                    </div>
                </div>
            }
        </>
    );
}
export default SpecializationDetail;
