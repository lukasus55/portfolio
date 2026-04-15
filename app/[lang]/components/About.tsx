type Dictionary = typeof import('../../../dictionaries/en.json');

export default function About({ dict } : { dict: Dictionary }) {
    return (
        <div className='flex w-full justify-center z-10 mt-216 pt-24' id='about'>
            <div className="rounded-3xl shadow-xl w-1/2 text-justify">
                <h3 className='text-2xl opacity-80'> {dict.about.title} </h3>
                <p className='opacity-60'> {dict.about.content} </p>
            </div>
        </div>
    )
}