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
    runtime: "nodejs", // ✅ This is correct for forcing Node.js runtime
  },
  output: "standalone", // ✅ Useful for deployments
};

// Fix: Ensure module.exports is used properly for Next.js
export default nextConfig;



