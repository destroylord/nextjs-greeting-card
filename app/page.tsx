"use client";
import dynamic from "next/dynamic";
import ParallaxSection from "./Components/ParallaxSection";

const DynamicComponentWithNoSSR = dynamic(
    () => import("./components/GallerySection"),
    {
        ssr: false, // Disable SSR untuk komponen GallerySection
    }
);

export default function Home() {
    return (
        <div>
            <ParallaxSection />
            <DynamicComponentWithNoSSR />
        </div>
    );
}
