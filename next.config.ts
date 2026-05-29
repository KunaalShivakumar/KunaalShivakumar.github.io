import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig = (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const basePath = isDev ? "" : process.env.NEXT_PUBLIC_BASE_PATH || "";

  return {
    output: isDev ? undefined : "export",
    outputFileTracingRoot: projectRoot,
    reactStrictMode: true,
    trailingSlash: !isDev,
    basePath,
    assetPrefix: basePath || undefined,
    images: {
      unoptimized: true
    }
  };
};

export default nextConfig;
