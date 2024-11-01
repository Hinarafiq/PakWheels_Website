import type { NextConfig } from "next";
 
// next.config.js
// module.exports = {
//   images: {
//     domains: ['cache1.pakwheels.com'],
//   },
// };

const nextConfig: NextConfig = {
  /* config options here */
};
// next.config.js
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cache1.pakwheels.com',
//         port: '',
//         pathname: '/system/car_generation_pictures/**',
//       },
//     ],
//   },
// };
  
module.exports = {
  images: {
    domains:
    ['cache1.pakwheels.com' ,'cache4.pakwheels.com'],
  },
};

export default nextConfig;
