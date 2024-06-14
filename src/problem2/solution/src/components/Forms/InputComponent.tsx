import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
}

const Input: React.FunctionComponent<InputProps> = ({ value, onChange, pattern, ...rest }) => {
    return <>
        <input
            value={value}
            className="text-black-100 dark:text-white filter-none opacity-100 text-left text-36 font-normal max-h-11 pr-8 outline-none border-none bg-transparent truncate"
            pattern={pattern}
            onChange={onChange}
            {...rest}
        />
    </>;
};

export default Input;
