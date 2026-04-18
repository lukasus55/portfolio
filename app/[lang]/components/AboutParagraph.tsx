type Dictionary = typeof import('../../../dictionaries/en.json');

export default function AboutParagraph({ title, content } : { title: string , content: string }) {
    return (
        <div className="">
            <div className='w-full text-xl'> {title} </div>
            <div className='opacity-60'> {content} </div>
        </div>
    )
}