"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectLink({websiteLink, githubLink}: {websiteLink: string, githubLink: string}) {

    return (
        <div className="flex gap-2 w-full justify-end">
            <Link href={websiteLink} target="blank">
                <div className="flex items-center gap-1 bg-foreground text-background rounded-3xl px-4 py-1 cursor-pointer hover:scale-110 transition-transform">
                    <Image src={`/website.svg`} width={16} height={16} alt="Website"/>
                    <span>Website</span>
                </div>
            </Link>

            <Link href={githubLink} target="blank">
                <div className="flex items-center gap-1 bg-foreground text-background rounded-3xl px-4 py-1 cursor-pointer hover:scale-110 transition-transform">
                    <Image src={`/github.svg`} width={16} height={16} alt="Github"/>
                    <span>Source</span>
                </div>
            </Link>
        </div>
    );
}

