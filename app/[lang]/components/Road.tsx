export default function Road({ roadPath, viewBoxXY }: { roadPath: string, viewBoxXY: Array<string> }) {

    if (!viewBoxXY[0] || !viewBoxXY[1]) {
        console.error("Incorrect viewBox")
        return null;
    }
    
    const viewBoxString = `0 0 ${viewBoxXY[0]} ${viewBoxXY[1]}`

    return (
        <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox={viewBoxString}
        >
            {/* THE CURB (Bottom Layer) */}
            <path
                d={roadPath}
                stroke="#878a8a"
                strokeWidth="66" 
                fill="none"
                strokeLinecap="round"  // Rounds off the start and end of the road
                strokeLinejoin="round" // Prevents sharp spikes on tight corners
            />

            {/* THE ASPHALT (Top Layer) */}
            <path
                d={roadPath}
                stroke="#334155"
                strokeWidth="54" // At 54px, it leaves a 6px curb on each side.
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}