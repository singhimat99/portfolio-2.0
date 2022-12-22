import React from "react";

import Head from "next/head";
import Link from "next/link";

import DarkMode from "./DarkMode";

type Props = {};

export default function Header({}: Props) {
    return (
        <>
            <Head>
                <title>Himat Singh</title>
            </Head>
            <header className="fixed top-0 p-4 items-center w-full z-20 bg-transparent backdrop-blur border-b-[.25px] border-light-secondary dark:border-dark-secondary">
                <nav className="flex justify-between max-w-6xl mx-auto px-7 ">
                    <div className="flex flex-row items-center gap-4">
                        <Link href="#hero">
                            <h1 className="font-header text-3xl">Singh</h1>
                        </Link>
                    </div>
                    <DarkMode />
                </nav>
            </header>
        </>
    );
}
