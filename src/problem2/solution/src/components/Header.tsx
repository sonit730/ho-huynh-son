import React from 'react';
import ThemeSwitch from './ThemeSwitch';

interface HeaderProps {
    darkTheme: boolean;
    toggleThemes: () => void;
}

const Header: React.FunctionComponent<HeaderProps> = ({ darkTheme, toggleThemes }) => {
    return <div className='w-full h-20 p-20 text-right'>
        <ThemeSwitch darkTheme={darkTheme} toggleThemes={toggleThemes} />
    </div>;
};

export default Header;
