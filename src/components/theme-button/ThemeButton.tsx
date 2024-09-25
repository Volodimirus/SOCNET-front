import { Moon, Sun } from "react-flaticons";
import ThemeButtonInterface from "./ThemeButtonInterface";
import "./ThemeButton.scss";

export default function ThemeButton({
    isDark,
    onChange,
    className,
}: ThemeButtonInterface) {
    return (
        <button className={`${className} theme-toggler`} onClick={onChange}>
            {!isDark ? (
                <Moon fontSize={24} />
            ) : (
                <Sun fontSize={24} color="black" />
            )}
        </button>
    );
}
