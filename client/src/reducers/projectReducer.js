import {
	GET_PROJECT,
	UPDATE_SECTION_ONE,
	ALL_MODULES,
	DELETE_PROJECT,
	ADD_MODULE,
	GET_CSS
} from "../actions/types";

const initialState = {
	project: null,
	loading: true,
	CSS: null,
	addedSection: []
};

export default function (state = initialState, action) {
	switch (action.type) {	
		case GET_CSS:
			return {
			...state,
				CSS: action.payload
			};
		case GET_PROJECT:		
			return {
				...state,
				project: action.payload,
				loading: false
			};
		case DELETE_PROJECT:
			console.log("DELETE PROJECT");
			return {
				...state,
				project: action.payload
			};
		case ALL_MODULES:
			console.log("GET ALL MODULES");
			return {
				...state,
				Modules: action.payload
			};
		case UPDATE_SECTION_ONE:
			console.log("GET UPDATE_SECTION_ONE");
			return {
				...state,
				Section1: action.payload
			};
		case ADD_MODULE:
			return {
				...state,
				project: action.payload,
				loading: false,
				preview_enabled: true,
				addedModuleInfo: action.addedModuleInfo,
				addedSection: [...state.addedSection, action.addedSection]
			};

		default:
			return state;
	}
}
