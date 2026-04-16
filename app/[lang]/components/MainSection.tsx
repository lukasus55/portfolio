"use client"

import useMediaQuery from "@/app/utils/useMediaQuery";
import TrackBackground from "./TrackBackground";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import useMediaMode, { MediaMode } from "@/app/utils/useMediaMode";

type Dictionary = typeof import('../../../dictionaries/en.json');

export default function MainSection({ dict } : { dict: Dictionary }) {

    const mediaMode: MediaMode = useMediaMode();

    const commonMainStyle = "flex justify-center relative flex-wrap overflow-hidden";

    const allMainStyles = {
        desktop: `${commonMainStyle} w-[min(1500px,100vw)] h-[4500px]`,
        tablet: `${commonMainStyle} w-[min(800px,100vw)] h-[5000px]`,
        mobile: `${commonMainStyle} w-[min(400px,100vw)] h-[5000px]`,
    };

    const mainStyle = allMainStyles[mediaMode];

    return (
        <main className={mainStyle}>
            <TrackBackground />

            <Hero dict={dict} />

            <Projects dict={dict} />

            <About dict={dict} />
        </main>
    )
}