import React from "react";
import Link from "next/link";
import { Socials } from "../typings";
import { SocialIcon } from "react-social-icons";

type Props = {
    socials: Socials[] | undefined;
};

export default function Footer({ socials }: Props) {
    return (
        <footer className="relative h-[30vh] flex flex-row justify-center items-center gap-4 snap-end bg-light-primary dark:bg-dark-primary border-t-[1px] border-t-neutral-500">
            <ul className="flex flex-col">
                {socials?.map((social) => {
                    return (
                        <li key={social._id}>
                            <SocialIcon
                                url={social.url}
                                target="_blank"
                                fgColor="#94a1b2"
                                bgColor="transparent"
                            />
                        </li>
                    );
                })}
            </ul>
            <ul className="flex flex-col gap-2">
                <li>
                    <Link href="#hero">Home</Link>
                </li>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#skills">Skills</Link>
                </li>
                <li>
                    <Link href="#projects">Projects</Link>
                </li>
                <li>
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
        </footer>
    );
}
