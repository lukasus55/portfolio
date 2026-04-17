"use client";

import { useState } from "react";
import PitStopMenu from "./PitStopMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import Navbar from "./Navbar";

type Dictionary = typeof import('../../../dictionaries/en.json');

export default function HeaderSection({ dict } : { dict: Dictionary }) {

    return (
        <div className="flex w-full justify-center text-foreground">

            <Navbar />

            <div className="absolute flex bottom-0 left-0 h-24">
                <LanguageSwitcher/>
            </div>
        </div>
    );
}