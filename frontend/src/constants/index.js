export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SET_MODAL_DATA = 'SET_MODAL_DATA';

export const CHOOSE_DEPARTMENT = 'CHOOSE_DEPARTMENT';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const CLEAN_LOGIN_ERROR_MES = 'CLEAN_LOGIN_ERROR_MES';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const GET_DAY_REQUEST = 'GET_DAY_REQUEST';
export const GET_DAY_SUCCESS = 'GET_DAY_SUCCESS';
export const GET_DAY_FAILED = 'GET_DAY_FAILED';

export const GET_ALL_DAYS_REQUEST = 'GET_ALL_DAYS_REQUEST';
export const GET_ALL_DAYS_SUCCESS = 'GET_ALL_DAYS_SUCCESS';
export const GET_ALL_DAYS_FAILED = 'GET_ALL_DAYS_FAILED';

export const ADD_THEME_REQUEST = 'ADD_THEME_REQUEST';
export const ADD_THEME_SUCCESS = 'ADD_THEME_SUCCESS';
export const ADD_THEME_FAILED = 'ADD_THEME_FAILED';

export const EDIT_THEME_REQUEST = 'EDIT_THEME_REQUEST';
export const EDIT_THEME_SUCCESS = 'EDIT_THEME_SUCCESS';
export const EDIT_THEME_FAILED = 'EDIT_THEME_FAILED';

export const URL = process.env.NODE_ENV === "production" ?
    // TODO: указать новый url
    "https://shaurma-nn.ru:49000/" : "http://localhost:49000/";

export const getCookie = (cname) => {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};