// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "pixabay.com",
//       },
//       {
//         protocol: "https",
//         hostname: "cdn.pixabay.com",
//       },
//     ],
//   },
// };
// module.exports = {
//   experimental: {
//     runtime: "nodejs",
//   },
// };


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixabay.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
    ],
  },
  experimental: {
    runtime: "nodejs", // Ensures Node.js is used instead of Edge runtime
  },
  output: "standalone", // Helps with Vercel deployments
};

export default nextConfig;


