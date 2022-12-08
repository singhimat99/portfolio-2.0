import React from "react";

import Head from "next/head";
import Link from "next/link";

import { SocialIcon } from "react-social-icons";
import { useTheme } from "../pages/_app";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
    let { isDark } = useTheme();
    return (
        <>
            <Head>
                <title>Himat's Blog</title>
            </Head>
            <header className="sticky top-0 p-4 pr-7 flex justify-between items-center mx-auto z-20 ">
                <motion.div
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
                </motion.div>
                <motion.nav
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <ul className="flex flex-row items-center gap-2">
                        <li>
                            <Link href="/">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                    </ul>
                </motion.nav>
            </header>
        </>
    );
}
