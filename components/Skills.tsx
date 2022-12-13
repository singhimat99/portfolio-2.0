import React, { useState, MouseEvent } from "react";

type Props = {};

// create table
//select a cell
// allow only one selection
// deselect cell
// be able to select 2 cells and fill in all cells in between
// be able to check

export default function Skills({}: Props) {
    const [selected, setSelected] = useState({
        number: 0,
        index: {},
    });
    // const randomLetters = generateRandomLetters(144);
    const [table, setTable] = useState<number[][]>(() => {
        return new Array(5).fill(0).map((row) => new Array(5).fill(0));
    });
    console.log("table", table);

    function handleClick(e: MouseEvent<HTMLDivElement>, i: number, j: number) {
        let isSelected: boolean = false;
        if (table[i][j] === 1) isSelected = true;

        updateTable(i, j, isSelected);
        // setTable((prev) => {
        //     const arr: number[][] = prev;
        //     arr[8][6] = 1;
        //     console.log("works");
        //     return arr;
        // });
    }

    function updateTable(row: number, col: number, isSelected: boolean) {
        if (isSelected) {
            setTable((prev) => {
                const arr = [...prev];
                arr[row][col] = 0;
                return arr;
            });
            return;
        }
        setTable((prev) => {
            const arr = [...prev];
            arr[row][col] = 1;
            return arr;
        });
    }
    return (
        <div className="relative flex flex-col justify-center items-center h-full">
            <h2 className="section-title">Skills</h2>
            <div>
                <div>
                    {table.map((row: Array<number>, i: number) => {
                        return (
                            <div className="flex" key={i}>
                                {row.map((cellValue: number, j: number) => {
                                    return (
                                        <div
                                            key={j}
                                            className="w-[40px] h-[40px] cursor-pointer border border-green-400 text-center table-cell align-middle"
                                            onClick={(e) =>
                                                handleClick(e, i, j)
                                            }
                                            style={{
                                                backgroundColor:
                                                    cellValue === 1
                                                        ? "red"
                                                        : "transparent",
                                            }}
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
