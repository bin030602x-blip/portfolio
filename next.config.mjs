/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      canvas: { browser: './empty.js' },
    },
  },
};

export default nextConfig;
