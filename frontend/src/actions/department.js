import {
	CHOOSE_DEPARTMENT
} from '../constants';

export const setDepartment = (data) => {
	return {
		type: CHOOSE_DEPARTMENT,
		payload: data
	}
}