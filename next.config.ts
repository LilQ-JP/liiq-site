import type { NextConfig } from "next";

// 独自ドメイン利用時は "" を設定。未設定または "/liiq-site" なら github.io 用
const envBase = process.env.NEXT_PUBLIC_BASE_PATH;
const isDev = process.env.NODE_ENV === "development";
const basePath = isDev
  ? ""
  : envBase === "" || envBase === "/"
    ? ""
    : (envBase || "/liiq-site");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
