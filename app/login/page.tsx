import { login, signup } from './actions';

export default function LoginPage() {
	return (
		<form className='flex flex-col gap-6'>
			<label htmlFor='email' className='input'>
				Email:
				<input id='email' name='email' type='email' required />
			</label>
			<label htmlFor='password' className='input'>
				Password:
				<input id='password' name='password' type='password' required />
			</label>
			<div>
				<button formAction={login} className='btn'>
					Log in
				</button>
				<button formAction={signup} className='btn'>
					Sign up
				</button>
			</div>
		</form>
	);
}
