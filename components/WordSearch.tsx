import React, { useState, MouseEvent, useEffect } from "react";
import { Skills } from "../typings";
type Props = {
    skills: Skills[] | undefined;
};

const MATRIX_SIZE = 16;

export default function WordSearch({ skills }: Props) {
    if (!skills) return <div>Loading...</div>;
    const {
        matrix,
        skillsSet,
        setResetMatrixCount,
        skillsLength,
        setSkillsLength,
        correctLetters,
        setCorrectLetters,
    } = useWordSearchMatrix(skills);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [canReset, setCanReset] = useState(false);
    const [clicks, setClicks] = useState(0);
    const [isFound, setIsFound] = useState(() => new Set());
    const [previousCell, setPreviousCell] = useState<number[]>([]);
    const [table, setTable] = useState<number[][]>(
        getInitialTable(0, MATRIX_SIZE)
    );

    function handleClick(
        e: MouseEvent<HTMLButtonElement>,
        i: number,
        j: number,
        cellValue: number
    ) {
        cellValue;
        if (table[i][j] === 1) {
            const [x, y] = previousCell;
            if (x === i && y === j) {
                resetTable();
                return;
            }
            setClicks((prev) => (prev -= 1));

            if (clicks === 0) setPreviousCell([]);
            return;
        }

        if (clicks > 1) {
            alert("no more clicks");
            return;
        }

        // if not deselcting and enough remaining clic
        setClicks((prev) => (prev += 1));
        setTable((prev) => {
            const arr = [...prev];
            arr[i][j] = 1;
            return arr;
        });

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

    function resetTable() {
        setTable(getInitialTable(0, MATRIX_SIZE));
        setClicks(0);
        setPreviousCell([]);
        // setSlope([]);
        setIsDisabled(false);
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
        // console.log(totalCells);
        setTable((prev) => {
            const arr = [...prev];
            for (let i = 0; i < totalCells.length; i++) {
                arr[totalCells[i][0]][totalCells[i][1]] = 1;
            }
            return arr;
        });
        checkWord(totalCells);
        setIsDisabled(true);
    }

    function checkWord(cells: number[][]) {
        let failed: boolean = true;
        let word = "";
        for (const cell of cells) {
            word += matrix[cell[0]][cell[1]];
        }
        const reversedWord = word.split("").reverse().join("");
        // console.log(word, reversedWord);

        if (skillsSet.has(word) || skillsSet.has(reversedWord)) failed = false;

        if (failed) return;
        // console.log(skillsLength);
        setSkillsLength((prev) => (prev -= 1));
        setIsCorrect(true);
        setCorrectLetters((prev) => {
            const letters = new Set(prev);
            for (let i = 0; i < cells.length; i++) {
                letters.add(`${cells[i][0]},${cells[i][1]}`);
            }
            return letters;
        });
        setIsFound((prev) => {
            const newSet = new Set(prev);
            newSet.add(word);
            newSet.add(reversedWord);
            return newSet;
        });
        // console.log(skillsLength);
        if (skillsLength < 1) setCanReset(true);
    }

    return (
        <div className="flex flex-col justify-center items-center gap-2 mt-4">
            <div className="flex flex-row gap-2 tracking-wider">
                {skills.map((skill, i) => {
                    return (
                        <div
                            key={i}
                            className="uppercase"
                            style={{
                                textDecorationLine: isFound.has(skill)
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {skill.title}
                        </div>
                    );
                })}
            </div>
            {matrix.length > 1 ? (
                <div>
                    {table.map((row: Array<number>, i: number) => {
                        return (
                            <div className="flex" key={i}>
                                {row.map((cellValue: number, j: number) => {
                                    return (
                                        <button
                                            key={j}
                                            className="w-[25px] h-[25px] uppercase cursor-pointertext-center table-cell align-middle"
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
                                                    ? "1px solid darkgreen"
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
            <div className="flex flex-row justify-center gap-4">
                {canReset ? (
                    <button
                        className="px-4 py-2 uppercase rounded-lg cursor-pointer border-2 border-light-highlight dark:border-dark-highlight disabled:hidden"
                        disabled={!canReset}
                        onClick={() => {
                            resetTable();
                            setIsDisabled(false);
                            setResetMatrixCount((prev) => prev + 1);
                            setCorrectLetters(() => new Set());
                            setCanReset(false);
                            setIsFound(new Set());
                        }}
                    >
                        reset game
                    </button>
                ) : (
                    <button
                        className="px-4 py-2 uppercase rounded-lg cursor-pointer border-2 border-light-highlight dark:border-dark-highlight disabled:invisible disabled:bg-slate-300 disabled:cursor-not-allowed disabled:border-none disabled:text-white"
                        disabled={!isDisabled || canReset}
                        onClick={() => {
                            resetTable();
                            setIsDisabled(false);
                            setIsCorrect(false);
                        }}
                    >
                        {isCorrect ? "Find Next Word!" : "Try again"}
                    </button>
                )}
            </div>
        </div>
    );
}

function useWordSearchMatrix(skills: Skills[]) {
    const [matrix, setMatrix] = useState<string[][]>([[]]);
    const [skillsSet, setSkillsSet] = useState(() => new Set());
    const [resetMatrixCount, setResetMatrixCount] = useState(0);
    const [skillsLength, setSkillsLength] = useState(0);
    const [correctLetters, setCorrectLetters] = useState(() => new Set());

    useEffect(() => {
        const { wordMatrix } = generateWordSearch(skills);

        setMatrix(wordMatrix);
        setSkillsSet((prev) => new Set(skills));
        setSkillsLength(skills.length - 1);
        setCorrectLetters(new Set());
    }, [resetMatrixCount, skills]);

    return {
        matrix,
        skillsSet,
        resetMatrixCount,
        setResetMatrixCount,
        skillsLength,
        setSkillsLength,
        correctLetters,
        setCorrectLetters,
    };
}

function getRandomLetter(): string {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
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

function generateWordSearch(skills: Skills[]) {
    const words = skills.map((skill) => skill.title.toLowerCase());
    words.sort((a, b) => b.length - a.length);
    // const longestWord: number = words[0].length;
    const wordMatrix: string[][] = getInitialTable("_", MATRIX_SIZE);
    const matrixLength: number = wordMatrix.length;
    // const skillsSet = new Set(skills);
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
                // console.log("gets here");

                const charAtNewPosition: string = wordMatrix[newRow][newCol];
                // console.log(charAtNewPosition);
                if (charAtNewPosition === "_" || charAtNewPosition === char) {
                    continue;
                } else {
                    failed = true;
                    break;
                }
            }

            if (failed) continue;

            let skill = word;
            const isReversed = Math.floor(Math.random() * 2);
            if (isReversed) skill = word.split("").reverse().join("");

            for (let j = 0; j < wordLength; j++) {
                const char: string = skill[j];

                const newRow: number = row + j * run;
                const newCol: number = col + j * rise;

                // occupiedIndexes.add(`${newRow},${newCol}`);
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

    return { wordMatrix };
}
