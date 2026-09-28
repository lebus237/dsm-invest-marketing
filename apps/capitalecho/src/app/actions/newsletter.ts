"use server";

import { createClient } from "@supabase/supabase-js";

import { newsletterSchema } from "@/lib/newsletter-schema";

export async function subscribeNewsletter(input: unknown) {
  const data = newsletterSchema.parse(input);

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Missing Supabase environment variable(s): NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.",
    );
  }

  const client = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await client.from("newsletter_subscriptions").insert(data);
  // Return the same confirmation for existing addresses without exposing membership.
  if (error && error.code !== "23505") return { success: false };
  return { success: true };
}
