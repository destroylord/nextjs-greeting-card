"use client";

import { useEffect, useState } from "react";
import Typed from "typed.js";

export default function ParallaxSection() {
    const [backgroundContent, setBackgroundContent] = useState("image"); // "image" or "video"
    const [showText, setShowText] = useState(true);
    const [transitioning, setTransitioning] = useState(false); // For handling transitions

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

    const handleVideoClick = () => {
        setTransitioning(true);
        setTimeout(() => {
            setBackgroundContent("video");
            setShowText(false);
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
                        <video className="video-element" loop autoPlay>
                            <source src="Done-bypass.mp4" type="video/mp4" />
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
