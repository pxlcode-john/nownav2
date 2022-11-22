/** @type {import('next').NextConfig} */

const withImages = require("next-images")
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "tailwindui.com",
      "d1h5fi2l2kvtwf.cloudfront.net",
      "images.unsplash.com",
    ],
  },
}

module.exports = withImages(nextConfig)
