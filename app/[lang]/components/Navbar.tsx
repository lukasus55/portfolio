"use client";

import { useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import RouteTrack from "./RouteTrack";
import RouteStop from "./RouteStop";


type Dictionary = typeof import('../../../dictionaries/en.json');

export default function Navbar({ dict } : { dict : Dictionary }) {

    const STOPS = [
        { id: "home", label: dict.navigation.home },
        { id: "portfolio", label: dict.navigation.portfolio },
        { id: "about", label: dict.navigation.about }
    ];

    const progressWidth = useMotionValue("0%");
    const [activeStop, setActiveStop] = useState(STOPS[0].id);

    const [stopsLayout, setStopsLayout] = useState(
        STOPS.map((stop, i) => ({
            ...stop,
            percent: (i / (STOPS.length - 1)) * 100 
        }))
    );

    useEffect(() => {
        const calculateAndScroll = () => {
            // Calculate physical layout percentages
            const data = STOPS.map(stop => {
                const el = document.getElementById(stop.id);
                return { id: stop.id, top: el ? el.offsetTop : 0 };
            });

            const startY = data[0].top;
            const endY = data[data.length - 1].top;
            const totalScrollDistance = (endY - startY) || 1;

            const mappedLayout = data.map((stop, i) => {
                return {
                    ...STOPS[i],
                    top: stop.top,
                    percent: ((stop.top - startY) / totalScrollDistance) * 100
                };
            });
            setStopsLayout(mappedLayout);

            // Move the UI Dot
            const scrollY = window.scrollY;
            let progress = (scrollY - startY) / totalScrollDistance;
            progress = Math.max(0, Math.min(1, progress)); 
            
            const currentPercent = progress * 100; 
            progressWidth.set(`${currentPercent}%`);

            let currentActive = mappedLayout[0].id;
            
            for (let i = mappedLayout.length - 1; i >= 0; i--) {
                // The '- 2' provides a 2% buffer so the text lights up exactly as the front edge of the bus touches the station dot!
                if (currentPercent >= mappedLayout[i].percent - 2) {
                    currentActive = mappedLayout[i].id;
                    break;
                }
            }
            setActiveStop(currentActive);
        };

        window.addEventListener("scroll", calculateAndScroll);
        window.addEventListener("resize", calculateAndScroll); 
        
        setTimeout(calculateAndScroll, 150);

        return () => {
            window.removeEventListener("scroll", calculateAndScroll);
            window.removeEventListener("resize", calculateAndScroll);
        };
    }, [progressWidth]);

    return (
        <nav className="relative flex flex-col justify-center w-full max-w-4xl mx-auto h-32 font-bold tracking-wider px-8 md:px-12 bg-[#00000022] rounded-3xl z-200">
            <div className="relative w-full flex items-center mt-6">
                
                <RouteTrack progressWidth={progressWidth} />

                <div className="absolute w-full h-full flex items-center z-10">
                    {stopsLayout.map((stop) => (
                        <div
                            key={stop.id}
                            className="absolute -translate-x-1/2" 
                            style={{ left: `${stop.percent}%` }}
                        >
                            <RouteStop
                                id={stop.id}
                                label={stop.label}
                                isActive={activeStop === stop.id}
                                onClick={setActiveStop}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </nav>
    );
}