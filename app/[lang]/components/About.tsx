type Dictionary = typeof import('../../../dictionaries/en.json');

export default function About({ dict } : { dict: Dictionary }) {
    return (
        <div className='flex w-full justify-center z-10 absolute top-760 pt-24 max-lg:top-960' id='about'>
            <div className="rounded-3xl shadow-xl w-1/2 text-justify">
                <h2 className='text-5xl font-bold'> {dict.about.title} </h2>
                <p className='opacity-60'> {dict.about.content} </p>
            </div>
        </div>
    )
}