import { redirect } from 'next/navigation';

import { createClient } from '../utils/supabase/server';
import { signout } from '../login/actions';

export default async function PrivatePage() {
	const supabase = await createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect('/login');
	}

	return (
		<form>
			<p>Hello {data.user.email}</p>
			<button type='submit' formAction={signout} className='btn'>
				Sign Out
			</button>
		</form>
	);
}
