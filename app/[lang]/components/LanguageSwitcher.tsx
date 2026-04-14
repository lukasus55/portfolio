"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
    const pathname = usePathname();

    const switchLanguage = (newLocale: string) => {
        if (!pathname) return "/";

        const segments = pathname.split("/");

        segments[1] = newLocale;

        return segments.join("/");
    };

    return (
        <div className="flex gap-4 justify-center">
            <Link
                href={switchLanguage("pl")}
                className="px-6 py-2 bg-accent hover:scale-110 text-slate-900 font-semibold rounded-full transition-all"
            >
                Polski
            </Link>
            <Link
                href={switchLanguage("en")}
                className="px-6 py-2 bg-accent hover:scale-110 text-slate-900 font-semibold rounded-full transition-all"
            >
                English
            </Link>
        </div>
    );
}
