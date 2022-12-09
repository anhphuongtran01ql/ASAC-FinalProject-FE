import {createChatBotMessage} from 'react-chatbot-kit';
import LearningOptions from "../Learning/LearningOption";
import LinkList from "../LinkList/LinkList";
import ActionProvider from "./ActionProvider";
import StepList from "../StepList/StepList";
import WhatIs from "../WhatIs/WhatIs";

const config = {
    botName: "Booking care",
    initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to know about booking care?", {
        widget: "menu"
    })],
    widgets: [
        {
            widgetName: "menu",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Our specializations",
                        url:
                            "http://localhost:3001/specializations",
                        id: 1,
                    },
                    {
                        text: "Our Clinics",
                        url:
                            "http://localhost:3001/clinics",
                        id: 2,
                    },
                    {
                        text: "Our Doctors",
                        url: "http://localhost:3001/doctors",
                        id: 3,
                    },
                ],
            },
        },
        {
            widgetName: "booking",
            widgetFunc: (props) => <StepList {...props} />,
        },
        {
            widgetName: "price-list",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "neurology : 300.000đ",
                        id: 1,
                    },
                    {
                        text: "oncological: 500.000đ",
                        id: 2,
                    },
                    {
                        text: "pediatrics: 500.000đ",
                        id: 3,
                    },
                    {
                        text: "musculoskeletal : 500.000đ",
                        id: 3,
                    },
                ],
            },
        },
        {
            widgetName: "what-is",
            widgetFunc: (props) => <WhatIs {...props} />,
            props: {
                title: "You can see more at",
                url :"http://localhost:3001/aboutUs",
                text:"About Us"
            }
        },
        {
            widgetName: "doctors",
            widgetFunc: (props) => <WhatIs {...props} />,
            props: {
                title: "You can see our doctors at",
                url : "http://localhost:3001/doctors",
                text: "Doctors"
            }
        },
        {
            widgetName: "clinics",
            widgetFunc: (props) => <WhatIs {...props} />,
            props: {
                title: "You can see our clinics at",
                url : "http://localhost:3001/clinics",
                text: "Clinics"
            }
        },
        {
            widgetName: "specializations",
            widgetFunc: (props) => <WhatIs {...props} />,
            props: {
                title: "You can see our specializations at",
                url : "http://localhost:3001/specializations",
                text: "Specializations"
            }
        },
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#45c3d2",
        },
        chatButton: {
            backgroundColor: "#45c3d2",
        },
    },
}

export default config