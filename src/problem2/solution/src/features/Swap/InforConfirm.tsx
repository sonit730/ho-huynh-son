import React from 'react';
import { useSwapContext } from '../../Context/SwapContext';
import { formattedAmounts } from '../../utils';

interface InforConfirmProps {
}

const InforConfirm: React.FunctionComponent<InforConfirmProps> = () => {
    const { amountBuy, pairPrice } = useSwapContext()


    return <div className='flex flex-col gap-4 px-6'>
        <div className='text-black-100 dark:text-light'>
            Output is estimated. You will receive at least <strong>{formattedAmounts(amountBuy, true)} {pairPrice?.coinQuote}</strong> or the transaction will revert.
        </div>

        <div className='flex flex-col gap-2 text-light border border-light-200 rounded-[20px] p-3'>
            <div className='flex justify-between'>
                <p>Rate</p>
                <p className='text-black-100 dark:text-white font-bold'>1 {`${pairPrice?.coinBase}`} = {pairPrice?.buyPrice} {`${pairPrice?.coinQuote}`}
                </p>
            </div>

            <div className='flex justify-between'>
                <p>Price impact</p>
                <p className='text-black-100 dark:text-white font-bold'>0%</p>
            </div>

            <div className='flex justify-between'>
                <p >Network cost</p>
                <p className='text-black-100 dark:text-white font-bold'>$0.0</p>
            </div>
        </div>
    </div>
};

export default InforConfirm;
