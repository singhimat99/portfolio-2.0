import React, { useState, MouseEvent, useEffect } from "react";

type Props = {};

const MATRIX_SIZE = 16;

export default function Skills({}: Props) {
    const { matrix, correctIndexes } = useWordSearchMatrix();
    const [isDisabled, setIsDisabled] = useState(false);
    const [clicks, setClicks] = useState(0);
    const [previousCell, setPreviousCell] = useState<number[]>([]);
    const [correctLetters, setCorrectLetters] = useState(() => new Set());
    const [table, setTable] = useState<number[][]>(
        getInitialTable(0, MATRIX_SIZE)
    );

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

        // if not deselcting and enough remaining clic
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

        // setSelectedCells((prev) => {
        //     const mySet = new Set(prev);
        //     mySet.delete(`${row},${col}`);
        //     return mySet;
        // });
        setTable((prev) => {
            const arr = [...prev];
            arr[row][col] = 0;
            return arr;
        });
        setClicks((prev) => (prev -= 1));
    }

    function resetTable() {
        setTable(getInitialTable(0, MATRIX_SIZE));
        setClicks(0);
        setPreviousCell([]);
        // setSlope([]);
        setIsDisabled(false);
    }

    function selectMultipleCells(cells: number[][]) {
        setTable((prev) => {
            const arr = [...prev];
            for (let i = 0; i < cells.length; i++) {
                arr[cells[i][0]][cells[i][1]] = 1;
            }
            return arr;
        });
    }

    function selectCell(row: number, col: number) {
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

    return (
        <div className="relative flex flex-col justify-center items-center h-full">
            <h2 className="section-title">Skills</h2>
            <div className="flex flex-col justify-center items-center gap-4">
                {matrix.length > 1 ? (
                    <div>
                        {table.map((row: Array<number>, i: number) => {
                            return (
                                <div className="flex" key={i}>
                                    {row.map((cellValue: number, j: number) => {
                                        return (
                                            <button
                                                key={j}
                                                className="w-[25px] h-[25px] cursor-pointertext-center table-cell align-middle"
                                                onClick={(e) =>
                                                    handleClick(
                                                        e,
                                                        i,
                                                        j,
                                                        cellValue
                                                    )
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
                                                {/* {`${i}${j}`} */}
                                                {matrix[i][j]}
                                            </button>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
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

function useWordSearchMatrix() {
    const [matrix, setMatrix] = useState<string[][]>([[]]);
    const [correctIndexes, setCorrectIndexes] = useState(() => new Set());

    useEffect(() => {
        const { wordMatrix, occupiedIndexes } = generateWordSearch([
            "html",
            "css",
            "javascript",
            "scss",
            "tailwind",
            "next",
            "react",
            "firebase",
        ]);
        setMatrix(wordMatrix);
        setCorrectIndexes(occupiedIndexes);
    }, []);

    return {
        matrix,
        correctIndexes,
    };
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

function generateWordSearch(words: string[]) {
    words.sort((a, b) => b.length - a.length);
    // const longestWord: number = words[0].length;
    const wordMatrix: string[][] = getInitialTable("_", MATRIX_SIZE);
    const matrixLength: number = wordMatrix.length;
    const occupiedIndexes = new Set();
    const orientations = ["horizontal", "vertical", "diagnolup", "diagnoldown"];

    for (const word of words) {
        const wordLength = word.length;

        let placed: boolean = false;

        do {
            let orientation: string =
                orientations[Math.floor(Math.random() * orientations.length)];
            let run: number = 0;
            let rise: number = 0;
            switch (orientation) {
                case "horizontal":
                    run = 1;
                    rise = 0;
                    break;
                case "vertical":
                    run = 0;
                    rise = 1;
                    break;
                case "diagnolup":
                    run = 1;
                    rise = -1;
                    break;
                case "diagnoldown":
                    run = 1;
                    rise = 1;
                    break;
            }

            let row: number = Math.floor(Math.random() * matrixLength);
            let col: number = Math.floor(Math.random() * matrixLength);

            let endingRow: number = row + wordLength * run;
            let endingCol: number = col + wordLength * rise;

            if (endingRow < 0 || endingRow >= matrixLength) continue;
            if (endingCol < 0 || endingCol >= matrixLength) continue;

            let failed: boolean = false;

            for (let i = 0; i < wordLength; i++) {
                const char: string = word[i];

                const newRow: number = row + i * run;
                const newCol: number = col + i * rise;
                console.log("gets here");

                const charAtNewPosition: string = wordMatrix[newRow][newCol];
                console.log(charAtNewPosition);
                if (charAtNewPosition === "_" || charAtNewPosition === char) {
                    continue;
                } else {
                    failed = true;
                    break;
                }
            }

            if (failed) continue;

            for (let j = 0; j < wordLength; j++) {
                const char: string = word[j];

                const newRow: number = row + j * run;
                const newCol: number = col + j * rise;

                occupiedIndexes.add(`${newRow},${newCol}`);
                wordMatrix[newRow][newCol] = char;
            }
            placed = true;
        } while (!placed);
    }

    // for (let i = 0; i < wordMatrix.length; i++) {
    //     for (let j = 0; j < wordMatrix.length; j++) {
    //         //  if current cell has a letter just continue
    //         if (wordMatrix[i][j] !== "_") continue;

    //         //  else set cell value to getRandomLetter();
    //         wordMatrix[i][j] = getRandomLetter();
    //     }
    // }

    return { wordMatrix, occupiedIndexes };
}
