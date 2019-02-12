import {GET_PROJECT, UPDATE_SECTION_ONE } from '../actions/types';

const initialState = {
	project: null
};

export default function(state = initialState, action) {
	switch (action.type) {

		case GET_PROJECT:
			console.log('GET PROJECT')
			return {
				...state,
				project: action.payload,
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
