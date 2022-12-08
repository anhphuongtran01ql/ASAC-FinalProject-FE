import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("about us")) {
            actions.handleAboutUs();
        }
        if (lowerCaseMessage.includes("hello")) {
            actions.handleHello();
        }

    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                });
            })}
        </div>
    );
};

export default MessageParser;