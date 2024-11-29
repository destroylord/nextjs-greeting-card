"use client";
import dynamic from "next/dynamic";
import ParallaxSection from "./Components/ParallaxSection";

const DynamicComponentWithNoSSR = dynamic(
    () => import("../app/Components/GallerySection"),
    {
        ssr: false,
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
