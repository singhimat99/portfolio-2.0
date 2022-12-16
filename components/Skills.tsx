import React, { useState, MouseEvent } from "react";

type Props = {};

// create table
//select a cell
// allow only one selection
// deselect cell
// be able to select 2 cells and fill in all cells in between
// be able to check

export default function Skills({}: Props) {
    const [isDisabled, setIsDisabled] = useState(false);
    const [clicks, setClicks] = useState(0);
    const [previousCell, setPreviousCell] = useState<number[]>([]);
    const [selectedCells, setSelectedCells] = useState(() => new Set());
    const [correctLetters, setCorrectLetters] = useState(() => new Set());
    // const [slope, setSlope] = useState<number[]>([]);
    // const randomLetters = generateRandomLetters(144);
    const [table, setTable] = useState<number[][]>(getInitialTable(0, 7));
    // console.log("table", table);

    // const mySet = new Set();
    // mySet.add("2,3");
    // mySet.add("3,3");
    // mySet.delete("2,3");
    // const value = mySet.values();
    // console.log(mySet);
    console.log("prev", previousCell);
    // console.log("slope", slope);
    // console.log("number selected ", number);

    function handleClick(
        e: MouseEvent<HTMLButtonElement>,
        i: number,
        j: number,
        cellValue: number
    ) {
        if (table[i][j] === 1) {
            deselectCell(i, j);

            if (clicks === 0) setPreviousCell([]);
            return;
        }

        if (clicks > 1) {
            alert("no more clicks");
            return;
        }

        // if not deselcting and enough remaining clicks,
        // increment clicks and select the cell
        //
        setClicks((prev) => (prev += 1));
        selectCell(i, j);

        // if the current cell being clicked is the first one set that to prev cell
        if (clicks === 0) setPreviousCell([i, j]);

        // if current cell being clicked is the second on setslope
        // and select the cells between the two cells
        if (clicks === 1) {
            setIsDisabled(true);
            // setSlope([previousCell[0] - i, previousCell[1] - j]);
            selectCellsBetween(previousCell, [i, j]);
        }
    }

    function deselectCell(row: number, col: number) {
        // if the cell to deselect is the same as the first cell selected,
        // reset the entire table
        const [x, y] = previousCell;
        if (x === row && y === col) {
            resetTable();
            return;
        }

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
        setClicks((prev) => (prev -= 1));
    }

    function resetTable() {
        setTable(getInitialTable(0, 7));
        setClicks(0);
        setPreviousCell([]);
        // setSlope([]);
        setIsDisabled(false);
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

    function selectCellsBetween(prev?: number[] | null, curr?: number[]) {
        if (!prev || !curr) return;
        let [prevRise, prevRun] = prev;
        let [currRise, currRun] = curr;
        const slope = [prevRise - currRise, prevRun - currRun];

        if (!isValidSlope(slope)) {
            resetTable();
            return;
        }

        const totalCells: number[][] = [curr];
        const [rise, run] = slope;

        let riseFactor = 0;
        let runFactor = 0;

        if (rise < 0) riseFactor = -1;
        if (rise > 0) riseFactor = 1;

        if (run < 0) runFactor = -1;
        if (run > 0) runFactor = 1;

        while (prevRise !== currRise || prevRun !== currRun) {
            currRise += riseFactor;
            currRun += runFactor;
            totalCells.push([currRise, currRun]);
        }
        console.log(totalCells);
        selectMultipleCells(totalCells);
        checkWord(totalCells);
        setIsDisabled(true);
    }

    function checkWord(cells: number[][]) {
        setCorrectLetters((prev) => {
            const letters = new Set(prev);
            for (let i = 0; i < cells.length; i++) {
                letters.add(`${cells[i][0]},${cells[i][1]}`);
            }
            return letters;
        });
    }
    // console.log(selectedCells);
    console.log(correctLetters);
    return (
        <div className="relative flex flex-col justify-center items-center h-full">
            <h2 className="section-title">Skills</h2>
            <div className="flex flex-col justify-center items-center gap-4">
                <div>
                    {table.map((row: Array<number>, i: number) => {
                        return (
                            <div className="flex" key={i}>
                                {row.map((cellValue: number, j: number) => {
                                    return (
                                        <button
                                            key={j}
                                            className="w-[40px] h-[40px] cursor-pointertext-center table-cell align-middle"
                                            onClick={(e) =>
                                                handleClick(e, i, j, cellValue)
                                            }
                                            style={{
                                                backgroundColor:
                                                    cellValue === 1
                                                        ? "red"
                                                        : "transparent",
                                                border: correctLetters.has(
                                                    `${i},${j}`
                                                )
                                                    ? "1px solid green"
                                                    : "none",
                                            }}
                                            disabled={isDisabled}
                                        >
                                            {`${i}, ${j}`}
                                        </button>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                <button
                    className="px-4 py-2 uppercase rounded-lg cursor-pointer border-2 border-light-highlight dark:border-dark-highlight disabled:invisible disabled:bg-slate-300 disabled:cursor-not-allowed disabled:border-none disabled:text-white"
                    disabled={!isDisabled}
                    onClick={() => {
                        resetTable();
                        setIsDisabled(false);
                    }}
                >
                    Try again
                </button>
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

function getInitialTable(element: number | string, size: number) {
    return new Array(size).fill(0).map((row) => new Array(size).fill(element));
}

function isValidSlope(slope: number[]): boolean {
    const [rise, run] = slope;
    if (rise === 0) return true;
    if (run === 0) return true;
    if (rise + run === 0) return true;
    if (rise === run) return true;
    return false;
}

function initialWordMatrix() {
    const skills = ["html", "css", "javascript", "tailwindcss"];
    skills.sort((a, b) => b.length - a.length);
    const longestWord = skills[0].length;
    const wordMatrix: string[][] = getInitialTable("", longestWord);

    // loop through skills
    //   call getRandomPosition(skill, wordMatrix)
    //   returns indexes and slope
    //   use starting index and slope to add word to matrix
    //   add each index used to add to matrix to set of correctLetters
    //   restart loop with newly edited matrix

    // nested for loop to go through through matrix
    for (let i = 0; i < wordMatrix.length; i++) {
        for (let j = 0; j < wordMatrix.length; j++) {
            //  if current cell has a letter just continue
            if (wordMatrix[i][j] !== "") continue;

            //  else set cell value to getRandomLetter();
            wordMatrix[i][j] = getRandomLetter();
        }
    }

    // console.log(words);
    console.log(wordMatrix);

    // return matrix with wordsearch matrix
}
initialWordMatrix();
function getRandomPosition(skill: string, matrix: string[][]) {
    const slopes = {
        q1: [
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        q2: [
            [0, -1],
            [1, 0],
            [1, -1],
        ],
        q3: [
            [-1, 0],
            [0, 1],
            [-1, 1],
        ],
        q4: [
            [-1, 0],
            [0, -1],
            [-1, -1],
        ],
    };
    const randomIdx = Math.floor(Math.random() * 2);

    // [row and col] of place on matrix
    // slope at which it should iterate
    // returned in an object
}
// initialWordMap();
