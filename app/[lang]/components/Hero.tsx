import Link from 'next/link';
import Image from 'next/image';
import HeroButton from './HeroButton';

type Dictionary = typeof import('../../../dictionaries/en.json');

export default function Hero({ dict } : { dict: Dictionary }) {
    return (
        <section className='flex w-full justify-center z-10 absolute top-40 pt-24' id='hero'>
            <div className="w-1/2 max-lg: ml-16">

                <div className='grid gap-2 leading-10'>

                    <div className='col-text-5xl font-bold text-5xl'>{dict.hero.name}</div>

                    <div className='flex gap-1.5 text-3xl flex-wrap'>
                        <div className=''>{dict.hero.position.title}</div>
                        <div className='font-bold'>{dict.hero.position.value}</div>
                        <div className=''>{dict.hero.location.title}</div>
                        <div className='font-bold'><span className='inline-block'><Image src={`/poland.svg`} width={24} height={24} alt='Poland' title='Poland'/></span> <span className="inline-block">{dict.hero.location.value}</span></div>
                    </div>

                </div>

            <div className='flex mt-20 gap-2'>

                <HeroButton linkUrl='https://github.com/lukasus55' text='Github' imgUrl='/github.svg' imgAlt='Github icon'/>
                <HeroButton linkUrl='https://www.linkedin.com/in/lkostyk/' text='LinkedIn' imgUrl='/linkedin.svg' imgAlt='LinkedIn icon'/>
                <HeroButton linkUrl='mailto:lukas.kostyk@gmail.com' text='E-mail' imgUrl='/mail.svg' imgAlt='E-Mail icon'/>

            </div>


            </div>
        </section>
    )
}