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

### Middleware

See also: [Setting up Server-Side Auth for Next.js](https://supabase.com/docs/guides/auth/server-side/nextjs)

Middleware to reroute to Login page. `middleware.ts` should be in `./` folder.

- Reroute
- Get session
- Authenticate

![image-20250828142828472](/Users/kcdo/Documents/Github/tut-next-supabase/notes/assets/image-20250828142828472.png)



### React Query

[Supabase is now compatible with Next.js 14](https://supabase.com/blog/supabase-is-now-compatible-with-nextjs-14?utm_source=youtube&utm_medium=social&utm_campaign=react-query&utm_content=z4l_ue0hvmo)

[React Query with Next.js App Router](https://www.youtube.com/watch?v=Z4L_UE0hVmo&t=1362s)

[How to use Supabase with React Query](https://makerkit.dev/blog/saas/supabase-react-query)

Error using QueryClientProvider in `layout.tsx`. Solution: create a `QueryClientProvider` wrapper

![image-20250828145734633](/Users/kcdo/Documents/Github/tut-next-supabase/notes/assets/image-20250828145734633.png)

### Server-side fetching with ReactQuery

Advantage: prefetch, rehydrate

<img src="/Users/kcdo/Documents/Github/tut-next-supabase/notes/assets/image-20250828201113602.png" alt="image-20250828201113602" style="zoom:50%;" />
