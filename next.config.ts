import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#000319'
        }
      }
    }
  }
};

export default nextConfig;
