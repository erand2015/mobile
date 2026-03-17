import type { NextConfig } from "next";



const nextConfig: NextConfig = {

  // reactCompiler po bëhet standard, lëre nëse e ke instaluar

  reactCompiler: true, 



  images: {

    unoptimized: true,

    remotePatterns: [

      {

        protocol: 'https',

        hostname: 'images.pexels.com',

      },

      {

        protocol: 'https',

        hostname: 'images.unsplash.com',

      },

    ],

  },



  experimental: {

    // Në Next.js 16, origjinat e lejuara për veprimet e serverit 

    // dhe zhvillimin vendosen këtu:

    serverActions: {

      allowedOrigins: ["192.168.56.1:3000", "localhost:3000"],

    },

  },

};



export default nextConfig;