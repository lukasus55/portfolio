"use client";

import LanguageSwitcher from "./LanguageSwitcher";
import Navbar from "./Navbar";

type Dictionary = typeof import('../../../dictionaries/en.json');

export default function HeaderSection({ dict } : { dict: Dictionary }) {

    return (
        <div className="flex w-full justify-center text-foreground">

            <Navbar dict = {dict}/>

            <div className="absolute flex bottom-0 left-0 h-24">
                <LanguageSwitcher/>
            </div>
        </div>
    );
}