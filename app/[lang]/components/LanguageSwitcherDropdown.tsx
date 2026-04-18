"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface DropdownProps {
    currentLang: string;
    closeDropdown: () => void;
}

export default function LanguageSwitcherDropdown({ currentLang, closeDropdown }: DropdownProps) {
    const pathname = usePathname();

    // Moved here! It handles the math to swap out the '/en/' or '/pl/' segment
    const switchLanguage = (newLocale: string) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = newLocale;
        return segments.join("/");
    };

    const languages = [
        { code: "en", label: "English" },
        { code: "pl", label: "Polski" }
    ];

    return (
        <div>
            {languages.map((lang) => {
                const isActive = currentLang === lang.code;
                
                return (
                    <div className="flex px-4 py-1 items-center bg-foreground opacity-80 hover:opacity-100 hover:bg-[#dadac8] transition-all" key={lang.code}>
                        <Link
                            href={switchLanguage(lang.code)}
                            onClick={closeDropdown}
                            className={`text-sm font-bold transition-all text-background w-8/10`}
                        >
                            {lang.label}
                        </Link>
                        <div className='w-2/10'> { isActive ? <Image src="/checkmark.svg" width={12} height={12} alt='Language icon'/> : ''}</div>
                    </div>
                );
            })}
        </div>
    );
}