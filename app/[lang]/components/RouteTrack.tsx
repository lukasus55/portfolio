"use client";

import { motion, MotionValue } from "framer-motion";

export default function RouteTrack({ progressWidth }: { progressWidth: MotionValue<string> }) {
    return (
        <>
            <div className="absolute w-full h-[2px] bg-[#f1f1d0]/20 rounded-full" />

            <motion.div
                className="absolute left-0 h-[2px] bg-[#f1f1d0] rounded-full origin-left"
                style={{ width: progressWidth }}
            />

            <motion.div
                className="absolute w-4 h-4 bg-[#f1f1d0] rounded-full shadow-[0_0_12px_#f1f1d0] z-20 -translate-x-1/2"
                style={{ left: progressWidth }}
            />
        </>
    );
}