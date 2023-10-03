/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "scontent-lga3-1.cdninstagram.com",
      "scontent-lga3-2.cdninstagram.com",
    ],
  },
};

module.exports = nextConfig;
