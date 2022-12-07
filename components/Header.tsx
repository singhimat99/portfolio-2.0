import React from "react";
import DarkMode from "./DarkMode";

type Props = {};

export default function Header({}: Props) {
    return (
        <header>
            <h1 className="text-light-primary dark:text-dark-primary bg-light-secondary dark:bg-dark-secondary">
                Header
            </h1>
            <DarkMode></DarkMode>
        </header>
    );
}
