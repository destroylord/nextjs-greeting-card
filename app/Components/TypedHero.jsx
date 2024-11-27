"use client";

import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function TypedHero() {
    const typedElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: [
                "Happy Birthday!",
                "May your dreams come true!",
                "Let’s celebrate!",
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <div className="text-center bg-light py-5">
            <h2 ref={typedElement} className="display-4"></h2>
        </div>
    );
}
