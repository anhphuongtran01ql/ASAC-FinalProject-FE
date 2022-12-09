import './chatbot.css'
import actionProvider from './Props/ActionProvider';
import MessageParser from './Props/MessageParser';
import config from './Props/Config';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import {FLOATINGBUTTON} from "./floatingButton";
import React, {useState} from "react";

const ChatbotComponent =() =>{
    // const a = new actionProvider();
    const [show, setShow] = useState(false)
    return (
        <div className="chatbot-container">
            <div style={{display:`${show === true ? "block" : "none"}`}}>
                <Chatbot config={config}
                         messageParser={MessageParser}
                         actionProvider={actionProvider}
                          />
            </div>
            <button className="chatbot-button" onClick={() => setShow(!show)}>
                <div dangerouslySetInnerHTML={{__html: FLOATINGBUTTON}}/>
            </button>
        </div>
    )
}
export default ChatbotComponent;