"use client";

import { useState, useEffect } from "react";

export type MediaMode = "desktop" | "tablet" | "mobile";

export default function useMediaMode(): MediaMode {
    const [mode, setMode] = useState<MediaMode>("desktop");

    useEffect(() => {
        const calculateMode = (): MediaMode => {
            const width = window.innerWidth;
            if (width >= 1024) return "desktop";
            if (width >= 640) return "tablet";
            return "mobile";
        };

        setMode(calculateMode());

        const handleResize = () => {
            // React automatically blocks the re-render if calculateMode() returns the exact same string as the current state!
            setMode(calculateMode());
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return mode;
}