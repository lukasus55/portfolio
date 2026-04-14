"use client";

import { useState } from "react";
import PitStopMenu from "./PitStopMenu";

type Dictionary = typeof import('../../../dictionaries/en.json');

export default function HeaderSection({ dict } : { dict: Dictionary }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex inset-0 ">
            <button
                onClick={() => setIsMenuOpen(true)}
                className="absolute top-8 right-8 text-xl px-4 py-2 mt-2 mr-2 bg-accent hover:scale-110 text-slate-900 font-semibold rounded-full transition-transform"
            >
                PIT STOP
            </button>

            <PitStopMenu 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)}
                dict={dict}
            />
        </div>
    );
}