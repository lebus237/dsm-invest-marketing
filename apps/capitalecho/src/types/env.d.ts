// Declaring the keys this app reads lets us use dot access (required for Next.js
// to inline NEXT_PUBLIC_* at build time) while keeping
// `noPropertyAccessFromIndexSignature` enabled.

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NEXT_PUBLIC_SUPABASE_URL?: string;
      readonly NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?: string;
      readonly LOVABLE_DB_MIGRATION_URL?: string;
    }
  }
}

export {};
