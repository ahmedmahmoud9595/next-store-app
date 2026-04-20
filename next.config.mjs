/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  // devIndicators: false,
  images: {
    domains: ["cdn.dummyjson.com"],
  },
};

export default nextConfig;
