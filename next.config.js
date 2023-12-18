/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.dribbble.com", "play-lh.googleusercontent.com"],
  },
};

module.exports = nextConfig;
