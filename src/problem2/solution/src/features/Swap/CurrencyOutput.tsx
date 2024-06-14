import React, { useCallback, useEffect } from 'react';
import Currency from './Currency';
import { Field } from '../../types';
import { useSwapContext } from '../../Context/SwapContext';
import BigNumber from "bignumber.js";
import { formattedAmounts } from '../../utils';
import InputComponent from '../../components/Forms/InputComponent';

interface CurrencyOutputProps {

}


const CurrencyOutput: React.FunctionComponent<CurrencyOutputProps> = () => {
    const { amountBuy, amountSell, pairPrice, setAmountBuy } = useSwapContext()

    const handleAmountBuy = useCallback(() => {
        const amountSellBigInt = new BigNumber(amountSell || '0')
        const buyPriceBigInt = new BigNumber(pairPrice?.buyPrice || '0')
        const res = amountSellBigInt.multipliedBy(buyPriceBigInt).toString()
        setAmountBuy(res)
    }, [amountSell, pairPrice?.coinBase, pairPrice?.buyPrice])

    useEffect(() => {
        handleAmountBuy()
    }, [amountSell, pairPrice?.coinBase, handleAmountBuy])

    return (
        <div className="bg-gray-400 dark:bg-secondary p-16 rounded-sm flex flex-col py-[30px] transition duration-500">
            <div className='text-left text-gray-300 dark:text-light text-sm transition duration-500'>
                Amount to receive
            </div>
            <div className="flex justify-between items-center">
                <InputComponent
                    value={formattedAmounts(amountBuy, true)}
                    onChange={() => { }}
                    placeholder="0"
                    type='text'
                />
                <div>
                    <Currency field={Field.OUTPUT} />
                </div>
            </div>
        </div>
    )
};

export default CurrencyOutput;
