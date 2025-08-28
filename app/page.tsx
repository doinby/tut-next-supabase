import { supabase, supabaseAdmin } from './lib/supabase';

export default function Home() {
	const test = async () => {
		const { data, error } = await supabaseAdmin
			.from('test')
			.insert({ name: 'random' });
		if (data) console.log(data);
		if (error) console.log(error);
	};

	test();

	return (
		<main>
			<p>Hello World!</p>
		</main>
	);
}
