import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const dispatch = useDispatch();

	const userSignIn = (e) => {
		e.preventDefault();
		const user = {
			email,
			password,
		};
		//		console.log(user);
		dispatch(login(user));
		// signUp(user)
	};
	return (
		<div className='body-wrapper bg-color--gradient space-pt--70 space-pb--120'>
			{/* auth page header */}
			<div className='auth-page-header space-mb--50'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h3 className='auth-page-header__title'>Welcome Back</h3>
							<p className='auth-page-header__text'>Log in for best shopping</p>
						</div>
					</div>
				</div>
			</div>
			{/* auth page body */}
			<div className='auth-page-body'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							{/* Auth form */}
							<div className='auth-form'>
								<form>
									<div className='auth-form__single-field space-mb--30'>
										<label htmlFor='emailAddress'>Email Address</label>
										<input
											type='text'
											name='emailAddress'
											id='emailAddress'
											placeholder='Enter Email Address'
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div className='auth-form__single-field space-mb--30'>
										<label htmlFor='password'>Password</label>
										<input
											type='password'
											name='password'
											id='password'
											value={password}
											placeholder='Enter Password'
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<div className='auth-form__single-field space-mb--40'>
										<p className='auth-form__info-text'>
											Don't have an account?{' '}
											<Link to={process.env.PUBLIC_URL + '/register'}>
												Sign up Now
											</Link>
										</p>
									</div>
									<button onClick={userSignIn} className='auth-form__button'>
										Login
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* auth page footer */}
			{/* <div className='auth-page-footer'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<span className='auth-page-separator text-center space-mt--20 space-mb--20'>
								- OR -
							</span>
							<div className='auth-page-social-login'>
								<button>
									<ReactSVG
										src={
											process.env.PUBLIC_URL + '/assets/img/icons/facebook.svg'
										}
									/>
									Sign In with Facebook
								</button>
								<button>
									<ReactSVG
										src={
											process.env.PUBLIC_URL + '/assets/img/icons/google.svg'
										}
									/>
									Sign In with Google
								</button>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Login;
