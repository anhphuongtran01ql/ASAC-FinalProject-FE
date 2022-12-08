import './chatbot.css'
import ChatbotActionProvider from '../Chatbot/chatBotActionProvider';
import MessageParser from '../Chatbot/MessageParser';
import chatbotConfig from '../Chatbot/chatbotConfig';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import {FLOATINGBUTTON} from "./floatingButton";
import React, {useState} from "react";
const ChatbotComponent =() =>{
    const [show, setShow] = useState(false)
    console.log('ChatbotActionProvider',ChatbotActionProvider)
    return (
        <div className="chatbot-container">
            <div style={{display:`${show === true ? "block" : "none"}`}}>
                <Chatbot config={chatbotConfig} messageParser={MessageParser} actionProvider={ChatbotActionProvider} disableScrollToBottom />
            </div>
            <button className="chatbot-button" onClick={() => setShow(!show)}>
                <div dangerouslySetInnerHTML={{__html: FLOATINGBUTTON}}/>
            </button>
        </div>
    )
}
export default ChatbotComponent;