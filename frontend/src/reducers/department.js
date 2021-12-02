import {
	CHOOSE_DEPARTMENT
} from "../constants";

const initialState = {
	department: '',
}

export default function departmentReducer(state = initialState, action) {
	switch (action.type) {
		case CHOOSE_DEPARTMENT:
			return {
				...state,
				department: action.payload
			};
			
		default: return state;
	}
}