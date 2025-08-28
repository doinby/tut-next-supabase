## Study Notes

### ANON vs. Service Role

anon key & service role key authenticates via Row Level Security (RLS) rule

![image-20250828124058746](/Users/kcdo/Documents/Github/tut-next-supabase/notes/assets/image-20250828124058746.png)

```javascript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export const supabaseAdmin = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_SERVICE_ROLE_KEY!
);

```

Note: get API keys under Publishable Key, not Legacy API Keys

### Test functions

```javascript
const test = async () => { const { data, error } = 				await supabase.from('test').select();
		if (data) console.log(data);
		if (error) console.log(error);
	};
test();
```

```javascript
// Test admin insert (service_role INSERT policy)
const test = async () => {
		const { data, error } = await supabaseAdmin
			.from('test')
			.insert({ name: 'random' });
		if (data) console.log(data);
		if (error) console.log(error);
	};
test();
```

