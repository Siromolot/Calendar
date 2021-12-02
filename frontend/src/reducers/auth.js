import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_FAILED, CLEAN_LOGIN_ERROR_MES,
} from "../constants";

const initialState = {
    auth: {},
    isLoading: false,
    errorAuth: '',
    errorLogout: '',
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                auth: action.payload,
                isLoading: true,
                errorAuth: '',
                errorLogout: '',
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                auth: action.payload,
                isLoading: false,
                errorAuth: '',
            };

        case LOGIN_FAILED:
            return {
                ...state,
                auth: {},
                isLoading: false,
                errorAuth: action.payload
            };

        case LOGOUT_REQUEST:
            return {
                ...initialState
            };

        case LOGOUT_FAILED:
            return {
                ...initialState,
                errorLogout: 'Ошибка выхода из аккаунта'
            };

        case CLEAN_LOGIN_ERROR_MES:
            return {
                ...state,
                errorAuth: ''
            };



        default: return state;
    }
};

