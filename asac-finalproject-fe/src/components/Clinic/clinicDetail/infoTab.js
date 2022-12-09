import React from "react";

const InfoTab = ({title,content, img = ""}) =>{
    return (
        <div className="more-info">
            <div className="clinic-detail-title">
                {title}
            </div>
            <div dangerouslySetInnerHTML={{__html:content}}/>
            <div style={{textAlign:"center"}}>
                {img !== "" && <img src={img} alt='clinic-img'/>}
            </div>
        </div>
    )
}

export default InfoTab
