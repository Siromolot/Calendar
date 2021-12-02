import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_FAILED,
    URL, getCookie
} from "../constants";


export const loginAction = (data) => async (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST
    });

    try {
        const user = {
            login: data.login.trim().toLowerCase(),
            password: data.password.trim(),
        }

        const response = await axios.post(`${URL}auth`, user);
        
        document.cookie = `department=${response.data.department}`;
        document.cookie = `token=${response.data.token}`;
  
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });
        
    } catch (e) {
        dispatch({
            type: LOGIN_FAILED,
            payload: e.response
        });
    }
};

export const logoutAction = () => async (dispatch) => {

    const token = getCookie("token");

    document.cookie = `SA=; max-age=0`;
    document.cookie = `role=; max-age=0`;
    document.cookie = `token=; max-age=0`;
    document.cookie = `access=; max-age=0`;

    dispatch({
        type: LOGOUT_REQUEST
    });

    const config = {
        headers: {
            Authorization: "Bearer" + " " + token
        }
    };

    try {
        console.log('config: ', config);
        await axios.get(`${URL}logout`, config);
    } catch (e) {
        dispatch({
            type: LOGOUT_FAILED,
        });
    }
};



