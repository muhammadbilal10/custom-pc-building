/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.cyberpowerpc.com",
      },
      {
        protocol: "https",
        hostname: "maingear.com",
      },
      {
        protocol: "https",
        hostname: "demo-kalles-4-1.myshopify.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

export default nextConfig;
