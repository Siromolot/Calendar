export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SET_MODAL_DATA = 'SET_MODAL_DATA';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const CLEAN_LOGIN_ERROR_MES = 'CLEAN_LOGIN_ERROR_MES';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const GET_SALES_REQUEST = 'GET_SALES_REQUEST';
export const GET_SALES_SUCCESS = 'GET_SALES_SUCCESS';
export const GET_SALES_FAILED = 'GET_SALES_FAILED';
export const ADD_SALES_REQUEST = 'ADD_SALES_REQUEST';
export const ADD_SALES_SUCCESS = 'ADD_SALES_SUCCESS';
export const ADD_SALES_FAILED = 'ADD_SALES_FAILED';
export const EDIT_SALES_REQUEST = 'EDIT_SALES_REQUEST';
export const EDIT_SALES_SUCCESS = 'EDIT_SALES_SUCCESS';
export const EDIT_SALES_FAILED = 'EDIT_SALES_FAILED';
export const DELETE_SALES_REQUEST = 'DELETE_SALES_REQUEST';
export const DELETE_SALES_SUCCESS = 'DELETE_SALES_SUCCESS';
export const DELETE_SALES_FAILED = 'DELETE_SALES_FAILED';

export const GET_DISHES_REQUEST = 'GET_DISHES_REQUEST';
export const GET_DISHES_SUCCESS = 'GET_DISHES_SUCCESS';
export const GET_DISHES_FAILED = "GET_DISHES_FAILED";
export const ADD_DISHES_REQUEST = 'ADD_DISHES_REQUEST';
export const ADD_DISHES_SUCCESS = 'ADD_DISHES_SUCCESS';
export const ADD_DISHES_FAILED = 'ADD_DISHES_FAILED';
export const EDIT_DISHES_REQUEST = 'EDIT_DISHES_REQUEST';
export const EDIT_DISHES_SUCCESS = 'EDIT_DISHES_SUCCESS';
export const EDIT_DISHES_FAILED = 'EDIT_DISHES_FAILED';
export const DELETE_DISHES_REQUEST = 'DELETE_DISHES_REQUEST';
export const DELETE_DISHES_SUCCESS = 'DELETE_DISHES_SUCCESS';
export const DELETE_DISHES_FAILED = 'DELETE_DISHES_FAILED';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_ITEM_CART = 'INCREASE_ITEM_CART';
export const DECREASE_ITEM_CART = 'DECREASE_ITEM_CART';
export const ORDER_CART_REQUEST = 'ORDER_CART_REQUEST';
export const ORDER_CART_SUCCESS = 'ORDER_CART_SUCCESS';
export const ORDER_CART_FAILED = 'ORDER_CART_FAILED';

export const URL = process.env.NODE_ENV === "production" ?
    "https://shaurma-nn.ru:47000/" : "http://localhost:47000/";
export const phone = '+79101442222';
export const address = 'г.Нижний Новгород ул.Большая Печёрская д.48А';
export const yandexLink = 'https://eda.yandex.ru/restaurant/mestechko_moej_mechty';
export const deliveryLink = 'https://www.delivery-club.ru/srv/mjestjechko_mojej_mjechty_nizhnij_novgorod';
export const authorLinkToLinked = 'https://www.linkedin.com/in/siromolot/';
export const phoneMask = (data) => {
  return `${data.slice(0,2)} (${data.slice(2,5)}) ${data.slice(5,8)}-${data.slice(8,10)}-${data.slice(10)}`
}
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