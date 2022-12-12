import React from "react";

import Head from "next/head";
import Link from "next/link";

import DarkMode from "./DarkMode";

// import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
    return (
        <>
            <Head>
                <title>Himats Blog</title>
            </Head>
            <header className="fixed top-0 p-4 items-center w-full z-20 bg-transparent backdrop-blur border-b-[.25px] border-light-secondary dark:border-dark-secondary">
                {/* <motion.div
                    initial={{ x: -500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-row items-center"
                >
                    <SocialIcon
                        url="https://github.com/singhimat99"
                        fgColor="#94a1b2"
                        bgColor="transparent"
                    />
                    <SocialIcon
                        url="https://github.com/singhimat99"
                        fgColor="grey"
                        bgColor="transparent"
                    />
                </motion.div> */}
                <nav
                    // initial={{ x: -500, opacity: 0, scale: 0.5 }}
                    // animate={{ x: 0, opacity: 1, scale: 1 }}
                    // transition={{ duration: 1.5 }}
                    className="flex justify-between max-w-6xl mx-auto px-7 "
                >
                    <ul className="flex flex-row items-center gap-4">
                        <li className="text-lg tracking-wider uppercase dark:text-gray-300 ">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-lg tracking-widest uppercase dark:text-gray-300 ">
                            <Link href="/blog">Blog</Link>
                        </li>
                    </ul>
                    <DarkMode />
                </nav>
            </header>
        </>
    );
}
