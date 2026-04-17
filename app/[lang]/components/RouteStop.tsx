"use client";

import Link from "next/link";

interface RouteStopProps {
    id: string;
    label: string;
    isActive: boolean;
    onClick: (id: string) => void;
}

export default function RouteStop({ id, label, isActive, onClick }: RouteStopProps) {
    return (
        <div className="relative flex flex-col items-center group">
            <Link 
                href={`#${id}`} 
                onClick={() => onClick(id)}
                className={`absolute bottom-6 whitespace-nowrap text-lg uppercase transition-all duration-300 ${
                    isActive 
                        ? "text-[#f1f1d0] -translate-y-1" 
                        : "text-[#f1f1d0]/40 hover:text-[#f1f1d0]/80"
                }`}
            >
                {label}
            </Link>

            <div className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 bg-slate-900 ${
                isActive 
                    ? "border-[#f1f1d0] shadow-[0_0_8px_rgba(241,241,208,0.5)]" 
                    : "border-[#f1f1d0]/30" 
            }`} />
        </div>
    );
}