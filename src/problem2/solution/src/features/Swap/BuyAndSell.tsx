import React from 'react';
import { useSwapContext } from '../../Context/SwapContext';
import { formattedAmounts } from '../../utils';

interface BuyAndSellProps {
}

const BuyAndSell: React.FunctionComponent<BuyAndSellProps> = () => {
    const { amountSell, amountBuy, pairPrice } = useSwapContext()

    return <div className='px-6 py-6 flex flex-col'>
        <p className=''>Amount to send</p>
        <div className='flex items-center justify-between'>
            <input
                value={amountSell}
                readOnly
                type="text"
                className="text-black-100 w-[70%] dark:text-white filter-none opacity-100 text-left text-36 font-normal max-h-11 pr-8 outline-none border-none bg-transparent truncate"
                placeholder="0"
            />
            
            <div className='flex gap-2 text-3xl'>
                <p className='text-black-100 dark:text-white'>{pairPrice?.coinBase}</p>
                <img src={`/assets/tokens/${pairPrice?.coinBase}.svg`} alt="" className='w-9 h-9' />

            </div>
        </div>
        
        <p className='mt-4'>Amount to receive</p>
        
        <div className='flex items-center justify-between'>
            <input
                value={formattedAmounts(amountBuy, true)}
                readOnly
                type="text"
                className="text-black-100 w-[70%] dark:text-white filter-none opacity-100 text-left text-36 font-normal max-h-11 pr-8 outline-none border-none bg-transparent truncate"
                placeholder="0"
            />
            
            <div className='flex gap-2 text-3xl'>
                <p className='text-black-100 dark:text-white'>{pairPrice?.coinQuote}</p>
                <img src="/assets/tokens/USD.svg" alt="" className='w-9 h-9' />
            </div>
        </div>



    </div>;
};

export default BuyAndSell;
