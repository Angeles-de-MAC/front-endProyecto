import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const cleanUrl = rawUrl.replace(/\/rest\/v1\/?$/, "");

  return createBrowserClient(
    cleanUrl,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  )
}
