import React, { useState } from "react";

type Props = {};

export default function Skills({}: Props) {
    const [isSelected, setIsSelected] = useState(false);
    // const randomLetters = generateRandomLetters(144);
    const table = Array(12).fill(Array(12).fill(0));

    return (
        <div className="relative flex flex-col justify-center items-center h-full">
            <h2 className="section-title">Skills</h2>
            <div>
                <div>
                    {table.map((col: Array<number>, i: number) => {
                        return (
                            <div className="flex" key={i}>
                                {col.map((row: number, j: number) => {
                                    return (
                                        <div
                                            key={j}
                                            className="w-[40px] h-[40px] cursor-pointer border border-green-400 text-center table-cell align-middle"
                                            onClick={(e) => {
                                                const bgColor =
                                                    e.currentTarget.style
                                                        .backgroundColor;
                                                if (bgColor === "red") {
                                                    e.currentTarget.style.backgroundColor =
                                                        "transparent";
                                                    setIsSelected(false);
                                                    return;
                                                }
                                                if (isSelected) return;
                                                e.currentTarget.style.backgroundColor =
                                                    "red";
                                                setIsSelected(true);
                                            }}
                                            // style={{
                                            //     backgroundColor: isSelected
                                            //         ? "red"
                                            //         : "transparent",
                                            // }}
                                        >
                                            {`${i}, ${j}`}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function generateRandomLetters(length: number) {
    let letters: string = "";
    for (let i = 0; i < length; i++) {
        const randomAscii = Math.floor(Math.random() * 26) + 65;
        letters += String.fromCharCode(randomAscii);
    }
    return letters;
}

function getRandomLetter(): string {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
