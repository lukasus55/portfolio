"use client";

import Link from "next/link";

export default function HeaderSection() {

    return (
        <div className="flex gap-4 justify-center">
            <Link
                href={'#'}
                className="px-6 py-2 bg-accent hover:scale-110 text-slate-900 font-semibold rounded-full transition-all"
            >
                PIT STOP
            </Link>
        </div>
    );
}
