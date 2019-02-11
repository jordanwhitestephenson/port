import {GET_PROJECT } from '../actions/types';

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


		default:
			return state;
	}
}
