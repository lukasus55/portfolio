type Dictionary = typeof import('../../../dictionaries/en.json');

export default function Hero({ dict } : { dict: Dictionary }) {
    return (
        <div className='flex w-full justify-center z-10 mt-30 pt-24' id='hero'>
            <div className="rounded-3xl shadow-xl w-1/2">
                <h1 className="text-9xl font-bold mb-4">
                    {dict.hero.name}
                </h1>
                <p className="text-3xl mb-8 opacity-60">
                    {dict.hero.subtitle}
                </p>
            </div>
        </div>
    )
}