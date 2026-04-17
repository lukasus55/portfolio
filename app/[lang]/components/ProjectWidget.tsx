"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ProjectBadge from "./ProjectBadge";
import { ProjectTag } from "./Projects";
import ProjectLink from "./ProjectLink";

interface ProjectWidgetProps {
    isMajor: boolean;
    title: string;
    description: string;
    tags: ProjectTag[];
    websiteLink: string,
    githubLink: string,
    imgSrc: string;
}

export default function ProjectWidget({
    isMajor,
    title,
    description,
    tags,
    websiteLink,
    githubLink,
    imgSrc,
}: ProjectWidgetProps) {

    const widgetDefaultStyle:string = 'rounded-3xl p-4 bg-[#2b2b23] text-foreground shadow-xl'
    const widgetStyle:string = isMajor ? `w-full ${widgetDefaultStyle}` : `w-[calc(50%-0.5rem)] max-lg:w-full ${widgetDefaultStyle}`

    return (
        <div className={widgetStyle}>
            <div className='flex w-full justify-center row-span-8 items-center'> 
                <Image 
                src={imgSrc}
                width={700}
                height={100} 
                alt={title}
                className='rounded-3xl'/> 
            </div>
            <div className='flex w-full text-3xl font-semibold mt-6'>{title}</div>
            <div className='flex w-full opacity-60 mt-2'>{description}</div>
            <div className='flex flex-wrap w-full mt-2 gap-2'>
                {
                    tags.map((tag:ProjectTag) => {
                        return (
                            <ProjectBadge technology={tag} key={`${title} ${tag}`}/>
                        )
                    })
                }
                </div>

            <div className="flex w-full mt-6">
                <ProjectLink websiteLink={websiteLink} githubLink={githubLink}/>
            </div>
        </div>
    );
}

