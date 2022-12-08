import Global from "../../../global";
import { authHeader } from "../../../Helper/authHeader";
import axios from "axios";

const login = async (data) => {
    const response = await axios.post(`${Global.BASE_API_PATH}/auth/login`, data);
    return response;
};

const getUserInfo = async (token) => {
    const {data} = await axios.get(`${Global.BASE_API_PATH}/info`,authHeader())
    return data
}

export {login, getUserInfo}