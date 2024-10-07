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
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "nzxt.com",
      },
      {
        protocol: "https",
        hostname: "cdna.pcpartpicker.com",
      },
      {
        protocol: "https",
        hostname: "placeholdit.img",
      },
      {
        protocol: "https",
        hostname: "static.pcbuilder.net",
      },
    ],
  },
};

export default nextConfig;
