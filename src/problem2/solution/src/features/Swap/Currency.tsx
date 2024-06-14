import React from 'react';
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Field } from '../../types';
import { useSwapContext } from '../../Context/SwapContext';

interface CurrencyProps {
  field: Field
}

const Currency: React.FunctionComponent<CurrencyProps> = ({ field }) => {
  const { pairPrice } = useSwapContext()
  return <div className='flex items-center gap-2 bg-white border dark:bg-dark-second border-gray-100 dark:border-primary rounded-sm p-1 hover:border-light-300 transition duration-500 cursor-pointer'>
    {field === Field.INPUT ? <img src={`/assets/tokens/${pairPrice?.coinBase}.svg`} alt="" className='w-9 h-9' /> : <img src={`/assets/tokens/${pairPrice?.coinQuote}.svg`} alt="" className='w-9 h-9' />}
    {field === Field.INPUT ? <p className='text-black-100 font-bold dark:text-white'>{pairPrice?.coinBase}</p> : <p className='text-black-100 font-bold dark:text-white'>{pairPrice?.coinQuote}</p>}
    {field === Field.INPUT ? <ChevronDownIcon className='w-4 h-4 text-black-100 font-bold dark:text-white' /> : ''}
  </div>;
};

export default Currency;
