import axios from '../../helpers/axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';

export const login = (user) => {
	console.log(user);
	return async (dispatch) => {
		const res = await axios.post('/admin/signin', {
			...user,
		});
		dispatch({
			type: LOGIN_REQUEST,
			payload: {
				...user,
			},
		});
	};
};

export const signUp = (user) => {
	console.log(user);
	return (dispatch) => {
		dispatch({
			type: SIGN_UP_REQUEST,
			payload: {
				...user,
			},
		});
	};
};
