import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@dsm/ui"],
  // Linting runs as its own turbo task (`turbo run lint`) so builds stay fast
  // and lint failures are reported once, at the root.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
