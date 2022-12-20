import React from "react";
import WordSearch from "./WordSearch";

type Props = {};

export default function Skills({}: Props) {
    const skillset = ["html", "css", "javascript"];
    return (
        <div className="relative flex flex-col justify-center items-center h-full">
            <h2 className="section-title">Skills</h2>
            <WordSearch skills={skillset} />
        </div>
    );
}
