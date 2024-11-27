"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GallerySection() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <div className="gallery-section container py-5">
            <h2 className="text-center mb-4">Gallery</h2>
            <div className="superwrap">
                <div className="wrap">
                    {Array.from({ length: 15 }).map((_, index) => (
                        <div
                            key={index}
                            className="col-md-4 mb--"
                            data-aos="fade-out">
                            <div className="child">
                                <img
                                    src={`https://placehold.co/${Math.floor(
                                        Math.random() * 100 + 100
                                    )}x${Math.floor(
                                        Math.random() * 100 + 100
                                    )}?text=Gallery+${index + 1}`}
                                    className=""
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
