import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    /* config options here */
    env: {
        NEXT_PUBLIC_BASE_URL: process.env.BASE_URL || "http://localhost:3000", // Gunakan localhost saat development
    },
};

export default nextConfig;
