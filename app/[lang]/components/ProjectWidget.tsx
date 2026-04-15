"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ProjectBadge from "./ProjectBadge";
import { ProjectTag } from "./Projects";

// We define exactly what information each project card needs
interface ProjectWidgetProps {
    title: string;
    description: string;
    tags: ProjectTag[];
    link: string;
    imgSrc: string;
}

export default function ProjectWidget({
    title,
    description,
    tags,
    link,
    imgSrc,
}: ProjectWidgetProps) {

    return (
        <Link href={link} target="_blank">
            <motion.div
                // The tactile Framer Motion hover effect
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="w-full mt-20 rounded-3xl p-4 bg-foreground text-background"
            >
                
                <div className='flex w-full justify-center row-span-8 items-center'> 
                    <Image 
                    src={imgSrc}
                    width={700}
                    height={100} 
                    alt='Test'
                    className='rounded-3xl'/> 
                </div>
                <div className='flex w-full text-3xl font-semibold mt-6'>{title}</div>
                <div className='flex w-full opacity-60 mt-2'>{description}</div>
                <div className='flex w-full mt-2 gap-2'>
                    {
                        tags.map((tag:ProjectTag) => {
                            return (
                                <ProjectBadge technology={tag}/>
                            )
                        })
                    }
                </div>

            </motion.div>
        </Link>
    );
}

