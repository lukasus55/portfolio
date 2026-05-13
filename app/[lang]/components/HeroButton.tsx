import Image from "next/image";
import Link from "next/link";

interface HeroButtonProps {
    linkUrl:string,
    text: string,
    imgUrl:string,
    imgAlt:string,
    imgSize?:number
}

export default function HeroButton({linkUrl, text, imgUrl, imgAlt, imgSize=24} : HeroButtonProps){
    return(
        <Link href={linkUrl} target="_blank">
            <button className="group flex items-center text-xl py-2 px-2.5 bg-foreground text-background font-semibold rounded-full transition-all cursor-pointer">
                <Image src={imgUrl} width={imgSize} height={imgSize} alt={imgAlt}/>
                <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out group-hover:max-w-xs group-hover:ml-2">
                    {text}
                </span>
            </button>
        </Link>
    )
}