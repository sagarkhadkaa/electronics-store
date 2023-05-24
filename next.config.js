/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '"i.dummyjson.com',
        port: '',
        pathname: '/data/products/**',
      },
    ],
  },
};
