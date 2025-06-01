import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Important for static export (no Image Optimization)
  },
  webpack(config) {
    // Add custom rule for importing SVGs as React components
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts|jsx|tsx)$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },
};

  export default nextConfig;
