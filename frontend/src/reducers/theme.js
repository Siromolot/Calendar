import {
	GET_DAY_REQUEST,
	GET_DAY_SUCCESS,
	GET_DAY_FAILED,
	GET_ALL_DAYS_REQUEST,
	GET_ALL_DAYS_SUCCESS,
	GET_ALL_DAYS_FAILED,
} from "../constants";

const initialState = {
	currentTheme: {},
	allThemes: null,
	isLoading: false,
	errorThemeLoading: '',
}

export default function themeReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_DAYS_REQUEST:
			return {
				...state,
				allThemes: state.allThemes,
				isLoading: true,
				errorThemeLoading: ''
			};
		
		case GET_ALL_DAYS_SUCCESS:
			return {
				...state,
				allThemes: action.payload.allThemes,
				isLoading: false,
				errorThemeLoading: ''
			};
		
		case GET_ALL_DAYS_FAILED:
			return {
				...state,
				allThemes: null,
				isLoading: false,
				errorThemeLoading: action.payload.message
			};
			
		default: return state;
	}
}