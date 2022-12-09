import React from 'react';
import {ABOUT_US} from "./Content/content";

const ChatbotActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleUpdate = (message) =>{
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
    const handleHello = () => {
        const message = createChatBotMessage('hello aaaa', {
            payload: { age: 18, name: 'Christina' },
        });
        handleUpdate(message)
    }

    const handleAboutUs = () => {
        const message = createChatBotMessage(
            ABOUT_US,
            {
                widget: "aboutUs",
            }
        );
        handleUpdate(message);
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleAboutUs,
                        handleHello
                    },
                });
            })}
        </div>
    );
};

export default ChatbotActionProvider;