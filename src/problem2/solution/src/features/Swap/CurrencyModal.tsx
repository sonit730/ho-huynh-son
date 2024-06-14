import React, { useState } from 'react';
import { tokens } from '../../constants/tokens.ts'
import { Field } from '../../types/index.ts';
import SearchInput from '../../components/Forms/SearchInput.tsx';
interface CurrencyModalProps {
    filed: Field
    handlePairCurrency?: (symbol: string) => void
}

const CurrencyModal: React.FunctionComponent<CurrencyModalProps> = ({ handlePairCurrency }) => {
    const [sortedTokens, setSortedTokens] = useState<Array<string>>(tokens)

    const filterTokens = (symbol: string) => {
        setSortedTokens(tokens.filter(token => token.includes(symbol.toUpperCase())));
    }

    return <div className='flex flex-col'>
        <div className="px-6 pt-2">
            <SearchInput
                type="text"
                placeholder="Search name of token"
                onChange={(event) => {
                    filterTokens(event.target.value)
                }}
            />
        </div>

        <div className='mt-4 flex flex-col'>
            <p className="mb-3 px-6 text-black-100 font-medium dark:text-white">Popular tokens</p>
            <div className='flex flex-col h-[500px] w-full overflow-auto'>
                {handlePairCurrency && sortedTokens.length !== 0 ? sortedTokens.map((token: string) => {
                    return (
                        <div
                            className='flex items-center gap-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-dark px-6 py-3'
                            onClick={() => { handlePairCurrency(token) }}
                        >
                            <img src={`./assets/tokens/${token}.svg`} alt={`${token}`} className='w-9 h-9' />
                            <p className='text-black-100 dark:text-white'>{token}</p>
                        </div>
                    )
                }) : <p className='text-black-100 dark:text-white text-center p-6'>Not found</p>}
            </div>
        </div>
    </div>;
};

export default CurrencyModal;
