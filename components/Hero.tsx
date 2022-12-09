import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import portrait from "../public/profile-pic.png";
import { useTheme } from "../pages/_app";

import BackgroundAnimation from "./BackgroundAnimation";

type Props = {};

export default function Hero({}: Props) {
    const [text] = useTypewriter({
        words: [
            "Hey, My name is Himat Singh",
            "Aspiring-Frontend-Developer.tsx",
            "<ProfessionalGoogler />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    const { isDark } = useTheme();
    return (
        <section id="hero" className="relative w-full h-screen snap-center ">
            {isDark ? <BackgroundAnimation /> : null}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center justify-center mx-auto">
                <Image
                    src={portrait}
                    alt="image of Himat Singh"
                    className="w-48 object-fill rounded-full grayscale "
                />
                <h2 className="uppercase text-[1rem] text-center font-semibold text-light-secondary dark:text-gray-600 tracking-[10px] my-4">
                    Self-taught Programmer
                </h2>
                <h1 className="text-4xl md:text-6xl mb-4 text-center font-bold">
                    <span>{text}</span>
                    <Cursor />
                </h1>
                <div className="flex justify-center gap-10 w-[80%] uppercase">
                    <Link href="#about">
                        <button className="hero-button">About</button>
                    </Link>
                    <Link href="#skills">
                        <button className="hero-button">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="hero-button">Projects</button>
                    </Link>
                    <Link href="#contact">
                        <button className="hero-button">Contact</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
