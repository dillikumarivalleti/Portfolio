/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  scrollRestoration: true,
  experimental: {
    scrollRestoration: true,
  },
}

export default nextConfig 