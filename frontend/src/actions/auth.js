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
            email: data.Login.trim().toLowerCase(),
            password: data.Password.trim(),
        }

        const response = await axios.post(`${URL}auth`, user);

        if (response.data.access) {
            if (response.data.SA) {
                document.cookie = `SA=${response.data.SA}`;
            }
            document.cookie = `role=${response.data.role}`;
            document.cookie = `token=${response.data.token}`;
            document.cookie = `access=${response.data.access}`;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
        } else {
            dispatch({
                type: LOGIN_FAILED,
                payload: response.data
            });
        }
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



