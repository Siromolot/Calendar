import {
	GET_DAY_REQUEST,
	GET_DAY_SUCCESS,
	GET_DAY_FAILED,
} from '../constants';

export const getDay = (data) => async (dispatch, getStore) => {
	const store = getStore();
	const sendingData = {
		day: data,
		department: store.department.department
	}
	
	console.log('sendingData: ', sendingData);
}
