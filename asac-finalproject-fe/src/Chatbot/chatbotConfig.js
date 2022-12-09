import {createChatBotMessage} from 'react-chatbot-kit';
import LearningOptions from "./LearningOption";
import LinkList from "./LinkList";
import ChatbotActionProvider from "./chatBotActionProvider";

const chatbotConfig = {
    botName: "Booking care",
    initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want about booking care?", {
        widget: "learningOptions"
    })],
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
            props: {
                actionProvider :{ChatbotActionProvider}
            }
        },
        {
            widgetName: "aboutUs",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Introduction to JS",
                        url:
                            "http://localhost:3001/specializations",
                        id: 1,
                    },
                    {
                        text: "Mozilla JS Guide",
                        url:
                            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                        id: 2,
                    },
                    {
                        text: "Frontend Masters",
                        url: "https://frontendmasters.com",
                        id: 3,
                    },
                ],
            },
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

export default chatbotConfig