"use client";

import { motion, MotionValue } from "framer-motion";

export default function Bus({ 
    roadPath, 
    distance 
}: { 
    roadPath: string; 
    distance: MotionValue<string>; 
}) {
    return (
        <motion.div
            className="absolute top-0 left-0 w-10 h-34 z-10 flex justify-center"
            style={{
                offsetPath: `path('${roadPath}')`,
                offsetDistance: distance,
                offsetRotate: "auto 90deg",
            }}
        >
            {/* =========================================
                THE LIGHT BEAMS (Z-Index 0)
                using custom styles here because Tailwind doesn't 
                natively support offset radial-gradients easily.
            ========================================= */}
            
            {/* LEFT HEADLIGHT BEAM */}
            <div 
                className="absolute z-0 pointer-events-none mix-blend-screen"
                style={{
                    // POSITIONING: Anchors the box relative to the bus
                    top: '-55px',   // How far forward the bounding box sits
                    left: '-4px',  // Centers this beam perfectly over the LEFT bulb
                    
                    // SHAPE: The bounding box for the light
                    width: '30px',   // SPREAD: Make this wider for a wider cone of light
                    height: '75px', // REACH: Make this taller to make the high-beams shoot further
                    
                    // THE MAGIC GRADIENT:
                    // 'ellipse at 50% 85%' puts the origin near the BOTTOM of the box.
                    // This creates the "3/4 circle" effect: it bleeds backward to fill the bottom 15%, 
                    // and stretches forward to fill the top 85%.
                    background: 'radial-gradient(ellipse at 50% 85%, rgba(255, 255, 155, 0.6) 0%, rgba(255, 255, 155, 0.15) 40%, transparent 70%)',
                }}
            />

            {/* RIGHT HEADLIGHT BEAM */}
            <div 
                className="absolute z-0 pointer-events-none mix-blend-screen"
                style={{
                    top: '-55px',
                    right: '-4px',
                    width: '30px',   
                    height: '75px', 
                    background: 'radial-gradient(ellipse at 50% 85%, rgba(255, 255, 155, 0.6) 0%, rgba(255, 255, 155, 0.15) 40%, transparent 70%)',
                }}
            />

            {/* =========================================
                THE BUS BODY (Z-Index 10)
                Sits on top of the beams so the light looks 
                like it's coming from underneath/front.
            ========================================= */}
            <div className="relative z-10 w-full h-full bg-[#ffe600] rounded-lg shadow-lg border-2 border-amber-600/40 overflow-hidden">
                <div className="absolute top-1 left-1 right-1 h-3 bg-slate-800 rounded-sm opacity-90" />
                <div className="absolute top-8 left-2 right-2 h-6 bg-white/40 rounded-sm shadow-sm" />
                <div className="absolute bottom-1 left-1 right-1 h-2 bg-slate-800 rounded-sm opacity-90" />
            </div>

            {/* =========================================
                THE HARDWARE BULBS (Z-Index 20)
                The brightest points, sitting on top of everything.
            ========================================= */}
            <div className="absolute z-20 top-0 left-1 w-2 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]" />
            <div className="absolute z-20 top-0 right-1 w-2 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]" />

            <div className="absolute z-20 bottom-0 left-1 w-1.5 h-1 bg-red-500 rounded-full shadow-[0_0_6px_rgba(239,68,68,0.9)]" />
            <div className="absolute z-20 bottom-0 right-1 w-1.5 h-1 bg-red-500 rounded-full shadow-[0_0_6px_rgba(239,68,68,0.9)]" />
        </motion.div>
    );
}