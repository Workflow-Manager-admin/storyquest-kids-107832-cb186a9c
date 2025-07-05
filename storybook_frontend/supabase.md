# Supabase Integration

This project is configured to use [Supabase](https://supabase.com/) as its backend service for authentication, database, and storage needs.

## Supabase Project Details

- **Supabase URL:** https://krtgthvlsqcyehlczelp.supabase.co
- **Supabase anon/public API Key:** 
  ```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtydGd0aHZscXFjeWVobGN6ZWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MzI1MDUsImV4cCI6MjA2NzMwODUwNX0.mRUUpm7VsJs089dm3jL-fN8_o-cTT5KH2JKsxL1x4r4
  ```
- **Supabase Client File:** `src/supabaseClient.js`

## Usage

Import `supabase` from `src/supabaseClient.js` in your React code:

```js
import { supabase } from './supabaseClient';
```

You can now call Supabase methods for authentication, users, or stories tables.
For example, to fetch stories from a Supabase table in the future:
```js
const { data, error } = await supabase.from("stories").select("*");
```

See [Supabase docs](https://supabase.com/docs/reference/javascript/select) for query syntax.

## Security

The anon key is safe to use in frontend applications but DO NOT use service role keys in the frontend.

## Reference

- [Supabase JS Client Documentation](https://supabase.com/docs/reference/javascript)
- This app is ready for future enhancements like storing/fetching stories, tracking reading progress, or authentication via Supabase.
