import {
	GET_DAY_REQUEST,
	GET_DAY_SUCCESS,
	GET_DAY_FAILED,
	GET_ALL_DAYS_REQUEST,
	GET_ALL_DAYS_SUCCESS,
	GET_ALL_DAYS_FAILED,
	ADD_THEME_REQUEST,
	ADD_THEME_SUCCESS,
	ADD_THEME_FAILED,
	EDIT_THEME_REQUEST,
	EDIT_THEME_SUCCESS,
	EDIT_THEME_FAILED,
	DELETE_THEME_REQUEST,
	DELETE_THEME_SUCCESS,
	DELETE_THEME_FAILED,
	URL,
	getCookie
} from '../constants';
import axios from "axios";
import {toggleModal} from "./modal";

export const getDay = (data) => async (dispatch, getStore) => {
	dispatch({
		type: GET_DAY_REQUEST
	});
	
	const store = getStore();
	const day = new Date(data.date).getTime();
	const department = store.department.department
	
	try{
		
		const response = await axios.get(
			`${URL}theme?day=${day}&department=${department}`)
		
		dispatch({
			type: GET_DAY_SUCCESS,
			payload: response.data
		})
	} catch (err) {
		dispatch({
			type: GET_DAY_FAILED
		})
	}
}

export const getAllDays = () => async (dispatch) => {
	dispatch({
		type: GET_ALL_DAYS_REQUEST
	});
	
	const department = getCookie('department');
	const token = getCookie('token');
	const config = {
		headers: {
			Authorization: "Bearer" + " " + token
		}
	};
	
	try{
		
		const response = await axios.get(
			`${URL}themes?department=${department}`, config)
		
		dispatch({
			type: GET_ALL_DAYS_SUCCESS,
			payload: response.data
		})
		
	} catch (err) {
		dispatch({
			type: GET_ALL_DAYS_FAILED,
			payload: err.message
		})
	}
};

export const addTheme = (data) => async (dispatch) => {
	dispatch({
		type: ADD_THEME_REQUEST
	});
	
	const token = getCookie('token');
	const config = {
		headers: {
			Authorization: "Bearer" + " " + token
		}
	};
	
	try{
		
		const response = await axios.post(
			`${URL}themes`, data, config)
		
		dispatch({
			type: ADD_THEME_SUCCESS,
			payload: response.data
		});
		
		dispatch(toggleModal(false));
		
	} catch (err) {
		dispatch({
			type: ADD_THEME_FAILED,
			payload: err.message
		})
	}
};

export const editTheme = (data, id) => async (dispatch) => {
	dispatch({
		type: EDIT_THEME_REQUEST
	});
	
	const token = getCookie('token');
	const config = {
		headers: {
			Authorization: "Bearer" + " " + token
		}
	};
	const sendingData = {
		...data,
		id
	}
	
	try{
		
		const response = await axios.put(
			`${URL}themes`, sendingData, config)
		
		dispatch({
			type: EDIT_THEME_SUCCESS,
			payload: response.data
		});
		
		dispatch(toggleModal(false));
		
	} catch (err) {
		dispatch({
			type: EDIT_THEME_FAILED,
			payload: err.message
		})
	}
};

export const removeTheme = (data) => async (dispatch) => {
	dispatch({
		type: DELETE_THEME_REQUEST
	});
	
	const token = getCookie('token');
	const config = {
		headers: {
			Authorization: "Bearer" + " " + token
		}
	};
	
	try{
		
		const response = await axios.delete(
			`${URL}themes`, {headers: config.headers, data: {id: data.id}});
		
		dispatch({
			type: DELETE_THEME_SUCCESS,
			payload: data.id
		});
		
		dispatch(toggleModal(false));
		
	} catch (err) {
		dispatch({
			type: DELETE_THEME_FAILED,
			payload: err.message
		})
	}
};
