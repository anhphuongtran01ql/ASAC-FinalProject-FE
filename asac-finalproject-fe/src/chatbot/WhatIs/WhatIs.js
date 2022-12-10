import React from "react";
import "./WhatIs.css";
const WhatIs = (props) => {
    return (
        <div>
            {props.title}
            <ul className="link-list">
                <li className="link-list-item">
                    <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-us"
                    >
                        {props.text}
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default WhatIs;