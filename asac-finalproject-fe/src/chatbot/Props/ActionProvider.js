import React from 'react';
import {ABOUT_US} from "../Content/content";

// class ActionProvider {
//     constructor(createChatBotMessage, setStateFunc) {
//         this.createChatBotMessage = createChatBotMessage;
//         this.setState = setStateFunc;
//     }
//
//     greet = () => {
//         const message = this.createChatBotMessage("Hello friend.");
//         this.addMessageToState(message);
//     };
//
//     handleJavascriptQuiz = () => {
//         const message = this.createChatBotMessage(
//             "Fantastic. Here is your quiz. Good luck!",
//             {
//                 widget: "javascriptQuiz",
//             }
//         );
//
//         this.addMessageToState(message);
//     };
//
//     addMessageToState = (message) => {
//         this.setState((prevState) => ({
//             ...prevState,
//             messages: [...prevState.messages, message],
//         }));
//     };
// }


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleUpdate = (message) =>{
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
    const handleHello = () => {
        const message = createChatBotMessage('hello, how can i help u?');
        handleUpdate(message)
    }

    const handleBooking = () => {
        const message = createChatBotMessage('Thank you, here\'s step to booking your schedule',{
            widget:"booking"
        });
        handleUpdate(message)
    }

    const handlePrice = () => {
        const message = createChatBotMessage('Thank you, here is the price for examination',{
            widget: "price-list"
        });
        handleUpdate(message)
    }
    const handleWhatIs = () => {
        const message = createChatBotMessage('Booking care is a plattform that connect doctor and clinic and help the patient can book schedule flexible help them save their time.',{
            widget: "what-is"
        });
        handleUpdate(message)
    }

    const handleMenu = () => {
        const message = createChatBotMessage(
            ABOUT_US,
            {
                widget: "menu",
            }
        );
        handleUpdate(message);
    };

    const handleDoctors = () => {
        const message = createChatBotMessage(
            "Here's our doctors, please click to see more detail",
            {
                widget: "doctors",
            }
        );
        handleUpdate(message);
    };

    const handleSpecialization = () => {
        const message = createChatBotMessage(
            "Here's our specializations, please click to see more detail",
            {
                widget: "specializations",
            }
        );
        handleUpdate(message);
    };

    const handleClinics = () => {
        const message = createChatBotMessage(
            "Here's our clinics, please click to see more detail",
            {
                widget: "clinics",
            }
        );
        handleUpdate(message);
    };
    const handleCancel = () => {
        const message = createChatBotMessage(
            "If you want to cancel the schedule, you can call us at 0942406133",
        );
        handleUpdate(message);
    };

    const handleReject = () => {
        const message = createChatBotMessage(
            "If your schedule rejected, an email will send to you or we will contact with you to inform about the reason ASAP",
        );
        handleUpdate(message);
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleMenu,
                        handleHello,
                        handleBooking,
                        handlePrice,
                        handleWhatIs,
                        handleDoctors,
                        handleCancel,
                        handleReject,
                        handleClinics,
                        handleSpecialization,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;