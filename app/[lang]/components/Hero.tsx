import Link from 'next/link';
import CallToActionButton from './CallToActionButton';

type Dictionary = typeof import('../../../dictionaries/en.json');

export default function Hero({ dict } : { dict: Dictionary }) {
    return (
        <section className='flex w-full justify-center z-10 absolute top-0 pt-24' id='hero'>
            <div className="rounded-3xl shadow-xl w-1/2 max-lg: ml-16">
                <h1 className="text-9xl font-bold mb-4 max-lg:text-7xl">
                    {dict.hero.name}
                </h1>
                <p className="text-3xl mb-8 opacity-60">
                    {dict.hero.subtitle}
                </p>

                <CallToActionButton dict={dict}/>
            </div>
        </section>
    )
}