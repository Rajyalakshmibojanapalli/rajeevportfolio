// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // Unsplash
      "cdn.pexels.com",      // if you use Pexels later
      "replicate.delivery",  // if you use Stable Diffusion from Replicate
    ],
  },
};

module.exports = nextConfig;