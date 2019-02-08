import { ADD_MODULE, GET_PROJECT, PROJECT_LOADING } from '../actions/types';

const initialState = {
	title: null,
	modules: null,
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case PROJECT_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_PROJECT:
			return {
				...state,
				loading: true
			};
		case ADD_MODULE:
			return {
				...state,
				profile: action.payload,
				loading: false
			};

		default:
			return state;
	}
}
