"use client";

import { animate } from "framer-motion";

type Dictionary = typeof import('../../../dictionaries/en.json');

export default function YourHeroComponent({ dict } : { dict: Dictionary }) {
    
    const handleSmoothScroll = () => {
        
        const startPosition = window.scrollY;

        const projectsEl = document.querySelector('#projects');
        const targetPosition = projectsEl?.getBoundingClientRect()?.y || 0;

        // Let Framer Motion take full control of the speed
        document.documentElement.classList.remove('scroll-smooth');

        animate(startPosition, targetPosition, {
            duration: 1.5, 
            ease: "easeInOut", 
            onUpdate: (latest) => {
                // Use behavior: "auto" to force the browser to snap to the exact pixel instantly
                window.scrollTo({ top: latest, behavior: "auto" });
            },
            onComplete: () => {
                document.documentElement.classList.add('scroll-smooth');
            }
        });
    };

    return (
        <button 
            onClick={handleSmoothScroll}
            className="text-xl px-4 py-2 mt-20 mr-2 bg-accent hover:scale-110 text-background font-semibold rounded-full transition-transform cursor-pointer"
        >
            {dict.hero.cta_button}
        </button>
    );
}