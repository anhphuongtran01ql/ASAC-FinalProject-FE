import Global from "../../../global";
import { authHeader } from "../../../Helper/authHeader";
import axios from "axios";

const login = async (data) => {
    const response = await axios.post(`${Global.BASE_API_PATH}/auth/login`, data);
    return response;
};

export {login}