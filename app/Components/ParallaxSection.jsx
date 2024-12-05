"use client";

import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";

export default function ParallaxSection() {
    const [backgroundContent, setBackgroundContent] = useState("image");
    const [showText, setShowText] = useState(true);
    const [transitioning, setTransitioning] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const typed = new Typed("#typed-text", {
            strings: [
                "Selamat Ulang Tahun Cantikk🎉",
                "Aku gak cuman bisa kasih ini aja yaaa 😊",
                "Lihat nih aku bikin apa, coba diklik tuh tombol videonya jangan sampe nangis yaaa ❤️❤️❤️❤️",
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    // Tambahkan useEffect untuk menangani video
    useEffect(() => {
        if (backgroundContent === "video" && videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error("Error playing video:", error);
            });
        }
    }, [backgroundContent]);

    const handleVideoClick = () => {
        setTransitioning(true);
        setTimeout(() => {
            setBackgroundContent("video");
            setShowText(false);
            setTransitioning(false);
        }, 500);
    };

    return (
        <div>
            <div
                className={`parallax-section d-flex flex-column justify-content-center align-items-center text-white ${
                    transitioning ? "transitioning" : ""
                }`}
                style={{
                    backgroundImage:
                        backgroundContent === "image"
                            ? "url('/moment.png')" // Tambahkan '/' di depan nama file
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
                            ref={videoRef}
                            className="video-element"
                            loop
                            playsInline
                            onError={(e) => {
                                console.error("Video Error Details:", e);
                                console.log(
                                    "Error Source:",
                                    e.target.currentSrc
                                );
                                console.log(
                                    "Network State:",
                                    e.target.networkState
                                );
                            }} // Tambahkan atribut ini untuk mobile
                        >
                            <source
                                src="/otw.mp4"
                                type="video/mp4"
                                onError={(e) =>
                                    console.error("Source Error", e)
                                }
                            />{" "}
                        </video>
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
