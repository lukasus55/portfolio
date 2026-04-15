type Dictionary = typeof import('../../../dictionaries/en.json');

export default function Projects({ dict } : { dict: Dictionary }) {
    return (
        <div className='flex w-full justify-center z-10 mt-216 pt-24' id='projects'>
            <div className="rounded-3xl shadow-xl w-1/2 text-justify">
                <h2 className='text-5xl font-bold'> {dict.projects.title} </h2>
            </div>
        </div>
    )
}