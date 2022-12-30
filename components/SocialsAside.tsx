import React from "react";
import { Socials } from "../typings";
import { SocialIcon } from "react-social-icons";

type Props = {
    socials: Socials[] | undefined;
};

export default function SocialsAside({ socials }: Props) {
    return (
        <aside className="absolute w-fit hidden md:flex top-[200px] left-[0] overflow-hidden shadow-2xl shadow-gray-900/80 dark:max-xl:shadow-white/20 p-[2px] z-50">
            <ul className="flex flex-col gap-1">
                {socials?.map((social) => {
                    return (
                        <li
                            key={social._id}
                            className="hover:bg-gray-500/30 active:bg-gray-500/30 rounded-xl"
                        >
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
        </aside>
    );
}
