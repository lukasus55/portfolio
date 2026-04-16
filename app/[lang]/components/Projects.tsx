import ProjectWidget from './ProjectWidget';
import Image from 'next/image';
import Link from 'next/link';

export type ProjectTag = 
    | "CSS3" 
    | "docker" 
    | "HTML" 
    | "javascript" 
    | "nextjs" 
    | "postgresql"
    | "react"
    | "tailwind"
    | "typescript";

type Dictionary = typeof import('../../../dictionaries/en.json');

export default function Projects({ dict } : { dict: Dictionary }) {
    return (
        <div className='flex w-full justify-center z-10 absolute top-300 pt-24' id='projects'>
            <div className="flex flex-wrap rounded-3xl shadow-xl w-1/2 max-lg:w-full max-lg:px-4 text-justify">
                <h2 className='text-5xl font-bold w-full'> {dict.projects.title} </h2>

                <div className='flex flex-wrap w-3/4 max-lg:w-full'>
                    <ProjectWidget
                    isMajor = {true}
                    title = {dict.projects.kkol.title}
                    description = {dict.projects.kkol.description}
                    tags = {['HTML', 'CSS3', 'javascript', 'postgresql', 'docker']}
                    link = 'https://www.kkol.pl'
                    imgSrc = '/kkol-mockup.webp'
                    />

                    <div className='flex w-full justify-between gap-x-4 flex-wrap'>
                        <ProjectWidget
                        isMajor = {false}
                        title = {dict.projects.dartES.title}
                        description = {dict.projects.dartES.description}
                        tags = {['react', 'tailwind', 'typescript']}
                        link = 'https://lukasus55.github.io/dartES/'
                        imgSrc = '/dartes-mockup.webp'
                        />

                        <ProjectWidget
                        isMajor = {false}
                        title = {dict.projects.dartES.title}
                        description = {dict.projects.dartES.description}
                        tags = {['react', 'tailwind', 'typescript']}
                        link = 'https://lukasus55.github.io/dartES/'
                        imgSrc = '/dartes-mockup.webp'
                        />
                    </div>
                </div>


                <div className='flex w-full justify-left'>
                    <Link href="https://github.com/lukasus55" target='_blank'>
                        <button className="flex gap-2 text-xl px-4 py-2 mt-20 mr-2 bg-accent hover:scale-110 text-background font-semibold rounded-full transition-transform cursor-pointer">
                            <Image src="/github.svg" width={18} height={18} alt={'Github'}/> {'Github'}
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}