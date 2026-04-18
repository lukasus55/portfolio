import AboutParagraph from './AboutParagraph';
import Image from 'next/image';

type Dictionary = typeof import('../../../dictionaries/en.json');

export default function About({ dict } : { dict: Dictionary }) {
    return (
        <section className='flex w-full justify-center z-10 absolute top-760 pt-36 pr-4 max-lg:top-950 max-lg:justify-end max-sm:top-940 max-sm:pr-0' id='about'>
            <div className="flex flex-wrap w-1/2 gap-4 max-lg:w-3/4">
            
                <h2 className='text-5xl font-bold'> {dict.about.title} </h2>

                <div className='grid grid-cols-[auto_1fr] grid-rows-3 mt-4 gap-4 rounded-3xl p-4 bg-[#2b2b23] text-foreground shadow-x max-lg:grid-cols-1 max-lg:grid-rows-1'> 
                    <div className='row-span-3 mas-lg:row-span-1'> 
                        {/* <Image src='/photo.webp' width={120} height={240} alt="Zdjęcie"/>  */}
                        <div className='bg-gray-500 w-[180px] h-[240px]'> </div> {/* TODO: zamienić placeholder na zdjęcie */}
                    </div>

                    {
                        dict.about.paragraphs.map(paragraph => {
                            return (
                                <AboutParagraph title={paragraph.title} content={paragraph.content} key={paragraph.title}/>
                            )
                        })
                    }

                </div>

            </div>
        </section>
    )
}