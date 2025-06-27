/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors when building
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*", // 匹配本地 /api/xxx
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`, // 代理到目标服务器
      },
    ];
  },
};

export default nextConfig;
