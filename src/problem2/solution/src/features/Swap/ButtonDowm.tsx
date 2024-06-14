import React from 'react';
import { ArrowDownIcon } from "@heroicons/react/outline";

interface ButtonDowmProps {
}

const ButtonDowm: React.FunctionComponent<ButtonDowmProps> = () => {
    return <div className=''>
        <div className='text-black-100 bg-gray-400 dark:text-light border-white border-4 dark:border-dark-second rounded-xl w-fit h-fit p-1 dark:bg-dark relative my-[-17px] mx-auto transition duration-500'>
            <ArrowDownIcon className='w-6 h-6 font-bold' />
        </div>

    </div>;
};

export default ButtonDowm;
