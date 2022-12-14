import React, { useState, MouseEvent } from "react";

type Props = {};

// create table
//select a cell
// allow only one selection
// deselect cell
// be able to select 2 cells and fill in all cells in between
// be able to check

export default function Skills({}: Props) {
    const [clicks, setClicks] = useState(0);
    const [previousCell, setPreviousCell] = useState<number[] | null>(null);
    const [selectedCells, setSelectedCells] = useState(() => new Set());
    const [slope, setSlope] = useState<number[]>([]);
    // const randomLetters = generateRandomLetters(144);
    const [table, setTable] = useState<number[][]>(() => {
        return new Array(5).fill(0).map((row) => new Array(5).fill(0));
    });
    // console.log("table", table);

    // const mySet = new Set();
    // mySet.add("2,3");
    // mySet.add("3,3");
    // mySet.delete("2,3");
    // const value = mySet.values();
    // console.log(mySet);
    console.log(previousCell);
    console.log(slope);

    function handleClick(e: MouseEvent<HTMLDivElement>, i: number, j: number) {
        if (table[i][j] === 1) {
            deselectCell(i, j);
            setClicks((prev) => (prev -= 1));
            if (clicks === 0) setPreviousCell(null);
            return;
        }

        // if (clicks === 2) {
        //     isValidSlope(previousCell, [i, j]);
        //     selectCellsBetween(previousCell, [i, j]);
        // }
        if (clicks > 1) {
            alert("no more clicks");
            return;
        }
        setClicks((prev) => (prev += 1));

        if (clicks === 0) setPreviousCell([i, j]);

        selectCell(i, j);

        // selectMultipleCells([
        //     [2, 2],
        //     [3, 3],
        //     [4, 4],
        // ]);
    }

    function deselectCell(row: number, col: number) {
        setSelectedCells((prev) => {
            const mySet = new Set(prev);
            mySet.delete(`${row},${col}`);
            return mySet;
        });
        setTable((prev) => {
            const arr = [...prev];
            arr[row][col] = 0;
            return arr;
        });
    }

    function selectMultipleCells(cells: number[][]) {
        // setSelectedCells((prev) => [...prev, ...cells]);
        setSelectedCells((prev) => {
            const mySet = new Set(prev);
            for (let i = 0; i < cells.length; i++) {
                mySet.add(`${cells[i][0]},${cells[i][1]}`);
            }
            return mySet;
        });
        setTable((prev) => {
            const arr = [...prev];
            for (let i = 0; i < cells.length; i++) {
                arr[cells[i][0]][cells[i][1]] = 1;
            }
            return arr;
        });
    }

    function isValidSlope(prev: number[] | null, curr: number[]): boolean {
        if (prev) setSlope([prev[0] - curr[0], prev[1] - curr[1]]);
        return true;
    }
    function selectCell(row: number, col: number) {
        setSelectedCells((prev) => {
            const mySet = new Set(prev);
            mySet.add(`${row},${col}`);
            return mySet;
        });

        setTable((prev) => {
            const arr = [...prev];
            arr[row][col] = 1;
            return arr;
        });
    }

    function selectCellsBetween(prev?: number[] | null, curr?: number[]) {}

    // console.log(selectedCells);
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
