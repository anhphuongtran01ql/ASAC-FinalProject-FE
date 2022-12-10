import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("menu") || lowerCaseMessage.includes("about us")) {
            actions.handleMenu();
        }
        if (lowerCaseMessage.includes("hello")) {
            actions.handleHello();
        }

        if (lowerCaseMessage.includes("booking")) {
            actions.handleBooking();
        }

        if (lowerCaseMessage.includes("price")) {
            actions.handlePrice();
        }

        if (lowerCaseMessage.includes("what is")) {
            actions.handleWhatIs();
        }

        if (lowerCaseMessage.includes("doctor")) {
            actions.handleDoctors();
        }

        if (lowerCaseMessage.includes("cancel")) {
            actions.handleCancel();
        }

        if (lowerCaseMessage.includes("reject") || lowerCaseMessage.includes("error")) {
            actions.handleReject();
        }

        if (lowerCaseMessage.includes("specialization")) {
            actions.handleSpecialization();
        }

        if (lowerCaseMessage.includes("clinic")) {
            actions.handleClinics();
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