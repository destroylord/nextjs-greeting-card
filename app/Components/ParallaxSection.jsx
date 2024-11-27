"use client";

import { useEffect, useState } from "react";
import Typed from "typed.js";

export default function ParallaxSection() {
    const [backgroundContent, setBackgroundContent] = useState("image"); // "image" or "video"
    const [showText, setShowText] = useState(true);
    const [transitioning, setTransitioning] = useState(false); // For handling transitions

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            document.documentElement.style.setProperty(
                "--parallax-position",
                `${scrollTop * 0.5}px`
            );
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const typed = new Typed("#typed-text", {
            strings: [
                "Selamat Ulang Tahun 🎉",
                "Semoga Hari Ini Spesial 😊",
                "Nikmati Momen yang Indah ❤️",
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const handleVideoClick = () => {
        setTransitioning(true);
        setTimeout(() => {
            setBackgroundContent("video");
            setShowText(false);
            setTransitioning(false);
        }, 500); // Adjust based on CSS transition duration
    };

    const handleCloseVideo = () => {
        setTransitioning(true);
        setTimeout(() => {
            setBackgroundContent("image");
            setShowText(true);
            setTransitioning(false);
        }, 500); // Adjust based on CSS transition duration
    };

    return (
        <div>
            {/* Parallax Section */}
            <div
                className={`parallax-section d-flex flex-column justify-content-center align-items-center text-white ${
                    transitioning ? "transitioning" : ""
                }`}
                style={{
                    backgroundImage:
                        backgroundContent === "image"
                            ? "url('moment.png')"
                            : "none",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center var(--parallax-position)",
                    backgroundSize: "cover",
                    height: "100vh",
                    overflow: "hidden",
                }}>
                {backgroundContent === "video" && (
                    <div
                        className={`video-container ${
                            transitioning ? "fade-out" : "fade-in"
                        }`}>
                        <video
                            src="testingVideo.mp4"
                            controls
                            autoPlay
                            className="video-element"></video>
                        <button
                            className="btn-close-video"
                            onClick={handleCloseVideo}
                            aria-label="Close Video">
                            ✖
                        </button>
                    </div>
                )}

                {showText && (
                    <h1
                        className={`text-center mb-4 ${
                            transitioning ? "fade-out" : "fade-in"
                        }`}>
                        <span id="typed-text"></span>
                    </h1>
                )}

                {backgroundContent === "image" && (
                    <button
                        className="btn btn-primary mt-4"
                        onClick={handleVideoClick}>
                        Tonton video untuk kamu
                    </button>
                )}
            </div>
        </div>
    );
}
