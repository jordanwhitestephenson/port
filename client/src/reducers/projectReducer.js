import {
	GET_PROJECT,
	UPDATE_SECTION_ONE,
	ALL_MODULES,
	DELETE_PROJECT
} from '../actions/types';

const initialState = {
	project: null
};

export default function (state = initialState, action) {
	switch (action.type) {

		case GET_PROJECT:
			console.log('GET PROJECT')
			return {
				...state,
				project: action.payload,
			};
		case DELETE_PROJECT:
			console.log('DELETE PROJECT')
			return {
				...state,
				project: action.payload,
			};
		case ALL_MODULES:
			console.log('GET ALL MODULES')
			return {
				...state,
				Modules: action.payload,
			};
		case UPDATE_SECTION_ONE:
			console.log('GET UPDATE_SECTION_ONE')
			return {
				...state,
				Section1: action.payload,
			};

		default:
			return state;
	}
}
