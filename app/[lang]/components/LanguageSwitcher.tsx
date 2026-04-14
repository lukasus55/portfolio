"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const currentLang = pathname?.split("/")[1] || "en";

    const switchLanguage = (newLocale: string) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = newLocale;
        return segments.join("/");
    };

    return (
        <div className="flex bg-slate-900 p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] absolute bottom-8 font-bold">
            <Link
                href={switchLanguage("pl")}
                className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                    currentLang === "pl"
                        ? "bg-accent-strong text-slate-900 shadow-md scale-105"
                        : "text-accent-strong hover:opacity-60"
                }`}
            >
                Polski
            </Link>
            <Link
                href={switchLanguage("en")}
                className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                    currentLang === "en"
                        ? "bg-accent-strong text-slate-900 shadow-md scale-105"
                        : "text-accent-strong hover:opacity-60"
                }`}
            >
                English
            </Link>
        </div>
    );
}