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

You can now call Supabase methods for authentication, database operations, etc.

## Security

The anon key is safe to use in frontend applications but DO NOT use service role keys in the frontend.

## Reference

- [Supabase JS Client Documentation](https://supabase.com/docs/reference/javascript)
