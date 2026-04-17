"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import LanguageSwitcherDropdown from "./LanguageSwitcherDropdown";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const currentLang = pathname?.split("/")[1] || "en";
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="absolute top-0 right-0 m-8 z-300 w-30 flex flex-col items-end font-bold bg-foreground text-background shadow-xl justify-center rounded-3xl">

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="font-bold text-background shadow-xl w-full justify-center py-2 rounded-3xl flex items-center gap-2 cursor-pointer bg-foreground opacity-80 hover:opacity-100 hover:bg-[#dadac8] transition-all"
            >
                <Image src="/language.svg" width={16} height={16} alt='Language icon'/> 
                <span>{currentLang === "en" ? 'English' : 'Polski'}</span>
            </button>

            {isOpen && (
                <LanguageSwitcherDropdown 
                    currentLang={currentLang} 
                    closeDropdown={() => setIsOpen(false)} 
                />
            )}



        </div>
    );
}