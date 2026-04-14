export default function Road({ roadPath }: { roadPath: string }) {
    return (
        <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1500 4500" // Change here too to match illustrator canvas
        >
            <path
                d={roadPath}
                stroke="#334155"
                strokeWidth="40"
                fill="none"
            />
        </svg>
    )
}