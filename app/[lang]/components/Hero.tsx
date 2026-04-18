import Link from 'next/link';
import Image from 'next/image';

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

                <Link href="https://github.com/lukasus55" target='_blank'>
                    <button className="group flex items-center text-xl py-2 px-2.5 bg-foreground text-background font-semibold rounded-full transition-all cursor-pointer">
                        <Image src="/github.svg" width={24} height={24} alt={'Github'}/> 
                        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:ml-2">
                            Github
                        </span>
                    </button>
                </Link>

                <Link href="mailto:lukas.kostyk@gmail.com">
                    <button className="group flex items-center text-xl py-2 px-2.5 bg-foreground text-background font-semibold rounded-full transition-all cursor-pointer">
                        <Image src="/mail.svg" width={24} height={24} alt={'Github'}/> 
                        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:ml-2">
                            E-mail
                        </span>
                    </button>
                </Link>

            </div>


            </div>
        </section>
    )
}