import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowDownShort } from "react-icons/bs";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useTheme } from "../pages/_app";
import { PageInfo, Socials } from "../typings";

import BackgroundAnimation from "./BackgroundAnimation";
import { urlFor } from "../sanity";

type Props = {
    socials: Socials[] | undefined;
    pageInfo: PageInfo | undefined;
};

export default function Hero({ socials, pageInfo }: Props) {
    const [text] = useTypewriter({
        words: [
            "Hey, My name is Himat Singh",
            "Problem Solver",
            "ProfessionalGoogler",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    const { isDark } = useTheme();

    return (
        <section
            id="hero"
            className="relative w-full h-screen snap-center overflow-hidden border-b-[1px] border-black/70 dark:border-none"
        >
            {isDark ? <BackgroundAnimation /> : null}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center justify-center mx-auto">
                <Image
                    src={urlFor(pageInfo?.profilePic)?.url()}
                    width={200}
                    height={200}
                    alt="image of Himat Singh"
                    className={`w-36 md:w-48 object-fill rounded-full ${
                        isDark ? "grayscale" : ""
                    }`}
                />
                <h2 className="uppercase text-sm md:text-base text-center font-semibold text-light-secondary dark:text-gray-600 pl-[10px] tracking-[10px] my-4">
                    {pageInfo?.role}
                </h2>
                <h1 className="text-3xl md:text-5xl mb-4 text-center font-bold">
                    <span>{text}</span>
                    <Cursor />
                </h1>
                <div className="flex justify-center md:gap-5 w-[80%] uppercase">
                    <Link href="#about">
                        <button className="hero-button">About</button>
                    </Link>
                    <Link href="#skills">
                        <button className="hero-button">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="hero-button">Projects</button>
                    </Link>
                </div>
            </div>
            <div className="absolute left-[50%] bottom-20 translate-x-[-50%] ">
                <Link href="#contact">
                    <button className="p-2 rounded-full animate-bounce flex justify-center items-center gap-1 border border-black active:bg-gray-500 hover:bg-gray-500 dark:border-white shadow-md shadow-black dark:shadow-white ">
                        <span>
                            <BsArrowDownShort
                                style={{ fontSize: "20px" }}
                                color={`${isDark ? "white" : "black"}`}
                            />
                        </span>
                    </button>
                </Link>
            </div>
        </section>
    );
}
