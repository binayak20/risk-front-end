import { SIGN_UP_REQUEST } from '../actions/authActions';

const initState = { name: 'Binayak' };

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case SIGN_UP_REQUEST:
			state = {
				...state,
				...action.payload,
			};
			break;

		default:
	}
	return state;
};

export default authReducer;
