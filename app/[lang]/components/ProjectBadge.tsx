"use client";

import Image from "next/image";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";

export default function ProjectBadge({technology}: {technology: string}) {


    const technologyName = capitalizeFirstLetter(technology);

    return (
        <div className="flex items-center gap-1 border-2 bg-background text-foreground rounded-3xl px-4 py-1">
            <Image src={`/tool-icons/${technology}.svg`} width={16} height={16} alt={technologyName}/>
            <span>{technologyName}</span>
        </div>
    );
}

