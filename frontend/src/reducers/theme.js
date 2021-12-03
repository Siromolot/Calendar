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
} from "../constants";

const initialState = {
	currentTheme: '',
	allThemes: [],
	isLoading: false,
	errorThemeLoading: '',
}

export default function themeReducer(state = initialState, action) {
	switch (action.type) {
		case GET_DAY_REQUEST:
			return {
				...state,
				currentTheme: '',
				isLoading: true,
				errorThemeLoading: ''
			};
		
		case GET_DAY_SUCCESS:
			return {
				...state,
				currentTheme: action.payload,
				isLoading: false,
				errorThemeLoading: ''
			};
		
		case GET_DAY_FAILED:
			return {
				...state,
				currentTheme: '',
				isLoading: false,
				errorThemeLoading: action.payload
			};
			
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
				allThemes: action.payload,
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
		
		case ADD_THEME_REQUEST:
			return {
				...state,
				isLoading: true,
				errorThemeLoading: ''
			};
		
		case ADD_THEME_SUCCESS:
			return {
				...state,
				allThemes: [...state.allThemes, action.payload],
				isLoading: false,
				errorThemeLoading: ''
			};
		
		case ADD_THEME_FAILED:
			return {
				...state,
				isLoading: false,
				errorThemeLoading: action.payload
			};
		
		case EDIT_THEME_REQUEST:
			return {
				...state,
				isLoading: true,
				errorThemeLoading: ''
			};
		
		case EDIT_THEME_SUCCESS:
			return {
				...state,
				allThemes: state.allThemes.map(item => {
					if (item.id == action.payload.id) {
						item = action.payload
					}
					return item
				}),
				isLoading: false,
				errorThemeLoading: '',
			};
		
		case EDIT_THEME_FAILED:
			return {
				...state,
				isLoading: false,
				errorThemeLoading: action.payload
			};
		
		case DELETE_THEME_REQUEST:
			return {
				...state,
				isLoading: true,
				errorThemeLoading: ''
			};
		
		case DELETE_THEME_SUCCESS:
			return {
				...state,
				allThemes: state.allThemes.filter(item => {
					return item.id !== action.payload
				}),
				isLoading: false,
				errorThemeLoading: ''
			};
		
		case DELETE_THEME_FAILED:
			return {
				...state,
				isLoading: false,
				errorThemeLoading: action.payload
			};
			
		default: return state;
	}
}