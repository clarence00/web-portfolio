/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  reactStrictMode: true,
};

export default nextConfig;
