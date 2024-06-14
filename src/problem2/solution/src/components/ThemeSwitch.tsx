import React from 'react';
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

interface ThemeSwitchProps {
    darkTheme: boolean;
    toggleThemes: () => void;
}

const ThemeSwitch: React.FunctionComponent<ThemeSwitchProps> = ({ darkTheme, toggleThemes }) => {
    return <>
        <button onClick={toggleThemes}
            className={`h-10 w-10 rounded-lg  px-2 ${darkTheme ? " bg-pink-100 hover:bg-dark text-pink-300 hover:text-white" : "text-pink-300 bg-pink-400"}`}>
            {darkTheme ? <MoonIcon /> : <SunIcon />}
        </button></>;
};

export default ThemeSwitch;
