import {
	GET_DAY_REQUEST,
	GET_DAY_SUCCESS,
	GET_DAY_FAILED,
	GET_ALL_DAYS_REQUEST,
	GET_ALL_DAYS_SUCCESS,
	GET_ALL_DAYS_FAILED,
	URL,
	getCookie
} from '../constants';
import axios from "axios";

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
}
