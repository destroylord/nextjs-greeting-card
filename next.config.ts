import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    env: {
        NEXT_PUBLIC_BASE_URL: process.env.BASE_URL || "http://localhost:3000", // Gunakan localhost saat development
    },
    async headers() {
        return [
            {
                source: "/otw.mp4",
                headers: [
                    {
                        key: "Content-Type",
                        value: "video/mp4",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
