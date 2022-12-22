import React from "react";
import WordSearch from "./WordSearch";
import { Skills } from "../typings";
import Image from "next/image";
import { urlFor } from "../sanity";

type Props = {
    skills: Skills[] | undefined;
};

export default function SkillsSection({ skills }: Props) {
    return (
        <div className="relative flex flex-col justify-center items-center h-full">
            <h2 className="section-title">Skills</h2>
            <WordSearch skills={skills} />
            <ul className="flex gap-4 justify-center items-center">
                {skills?.map((skill) => {
                    return (
                        <li key={skill._id}>
                            <Image
                                src={urlFor(skill.skillImage).url()}
                                width={200}
                                height={200}
                                alt={`image of ${skill.title}`}
                                className="w-16 aspect-auto"
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
