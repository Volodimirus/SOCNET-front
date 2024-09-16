import React from "react";

import { Moon, Sun } from "react-flaticons";

import "./ThemeButton.scss";

export default function ThemeButton({
    theme,
    onChange,
    className,
}: {
    theme: string;
    onChange: () => void;
    className?: string;
}) {
    return (
        <button className={`${className} theme-toggler`} onClick={onChange}>
            {theme === "light" ? (
                <Moon fontSize={24} />
            ) : (
                <Sun fontSize={24} color="black" />
            )}
        </button>
    );
}
