"use client";

import LanguageSwitcher from "./LanguageSwitcher";
import Navbar from "./Navbar";

type Dictionary = typeof import('../../../dictionaries/en.json');

export default function HeaderSection({ dict } : { dict: Dictionary }) {

    return (
        <div className="flex w-full justify-center text-foreground">

            <header className="flex w-full max-lg:hidden">
                <Navbar dict = {dict}/>
            </header>

        </div>
    );
}