import {Layout} from "antd";
import {Outlet} from "react-router-dom";
import ChatbotComponent from "../../chatbot/ChatbotComponent";

const ClientLayout = () => {
    return (
        <>
            <ChatbotComponent/>
            <Outlet/>
        </>
    )
}
export default ClientLayout;