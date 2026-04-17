import ProjectWidget from './ProjectWidget';

export type ProjectTag = 
    "CSS3" 
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
        <section className='flex w-full justify-center z-10 absolute top-300 pt-24 max-sm:justify-start' id='portfolio'>
            <div className="flex flex-wrap rounded-3xl w-1/2 max-sm:w-7/10 text-justify gap-8 pl-4">
                <h2 className='text-5xl font-bold w-full'> {dict.projects.title} </h2>

                <div className='flex flex-wrap w-3/4 max-lg:w-full gap-4'>
                    <ProjectWidget
                    isMajor = {true}
                    title = {dict.projects.kkol.title}
                    description = {dict.projects.kkol.description}
                    tags = {['HTML', 'CSS3', 'javascript', 'postgresql', 'docker']}
                    websiteLink = 'https://www.kkol.pl'
                    githubLink = 'https://github.com/lukasus55/kkol'
                    imgSrc = '/kkol-mockup.webp'
                    dict={dict}
                    />

                    <div className='flex w-full justify-between flex-wrap'>
                        <ProjectWidget
                        isMajor = {true}
                        title = {dict.projects.dartES.title}
                        description = {dict.projects.dartES.description}
                        tags = {['react', 'tailwind', 'typescript']}
                        websiteLink = 'https://lukasus55.github.io/dartES/'
                        githubLink = 'https://github.com/lukasus55/dartES'
                        imgSrc = '/dartes-mockup.webp'
                        dict={dict}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}