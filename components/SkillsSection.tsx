import React from "react";
import WordSearch from "./WordSearch";
import { Skills } from "../typings";

type Props = {
    skills: Skills[] | undefined;
};

export default function SkillsSection({ skills }: Props) {
    return (
        <div className="relative flex flex-col justify-center items-center h-full gap-2">
            <h2 className="section-title mb-4">Skills</h2>
            <WordSearch skills={skills} />
        </div>
    );
}
