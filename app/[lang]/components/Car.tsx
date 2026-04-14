import { motion, MotionValue } from "framer-motion";

export default function Car({ roadPath, distance }: { roadPath: string, distance: MotionValue<string> }) {

    return (
        <motion.div
            className="absolute top-0 left-0 w-8 h-16 bg-accent rounded-md shadow-[0_0_15px_rgba(244,63,94,0.5)] z-10"
            style={{
                offsetPath: `path('${roadPath}')`, // Snaps the car to the path
                offsetDistance: distance, // Animates the car along the path based on scroll
                offsetRotate: "auto 90deg", // Automatically rotates the car to face the direction of the curve!
            }}
        >
            <div className="w-full h-4 bg-yellow-500 rounded-t-md" />
        </motion.div>
    )

}