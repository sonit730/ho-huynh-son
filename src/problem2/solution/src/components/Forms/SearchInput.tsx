import React, { InputHTMLAttributes } from 'react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FunctionComponent<SearchInputProps> = ({ value, onChange, ...rest }) => {
    return <input
        className="block w-full h-[40px] text-black-100 dark:text-white font-medium outline-none pl-[40px] bg-gray-400 dark:bg-dark border border-light-100 rounded-xl bg-pos-custom bg-no-repeat bg-[url('/assets/icons/search.svg')]"
        onChange={onChange}
        {...rest}
    />;
};

export default SearchInput;
