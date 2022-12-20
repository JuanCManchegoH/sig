/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'ui-avatars.com'],
  },
}

module.exports = nextConfig
