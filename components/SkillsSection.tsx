import React from "react";
import WordSearch from "./WordSearch";
import { Skills } from "../typings";

type Props = {
    skills: Skills[] | undefined;
};

export default function SkillsSection({ skills }: Props) {
    const skillset = ["html", "css", "javascript"];
    return (
        <div className="relative flex flex-col justify-center items-center h-full">
            <h2 className="section-title">Skills</h2>
            <WordSearch skills={skills} />
        </div>
    );
}
