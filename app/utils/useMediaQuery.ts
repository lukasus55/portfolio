"use client";

import { useState, useEffect } from "react";

export default function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        // Set the initial value
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        // Update if the window resizes
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
}