import React, { useState } from 'react';
import BuyAndSell from './BuyAndSell';
import InforConfirm from './InforConfirm';

import toast from 'react-hot-toast';
import Loader from '../../shared/Loader';
import { useSwapContext } from '../../Context/SwapContext';

interface ConfirmSwapProps {
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ConfirmSwap: React.FunctionComponent<ConfirmSwapProps> = ({ setIsShowModal }) => {
    const [isPending, setIsPending] = useState<boolean>(false)
    const { reset } = useSwapContext()

    const onConfirmSwap = () => {
        setIsPending(true)
        setTimeout(() => {
            toast.success('Swap success');
            setIsPending(false)
            setIsShowModal(false)
            reset()
        }, 2000);
    }

    return <div className='flex flex-col text-light'>
        <BuyAndSell />
        <InforConfirm />
        <div className='px-6 mb-6 mt-10'>
            <button onClick={onConfirmSwap} disabled={isPending} className='w-full text-white bg-pink text-xl font-bold p-16 mt-4 flex justify-center rounded-[20px]'>
                {isPending ? <Loader width={36} height={36} /> : 'Swap'}
            </button>
        </div>
    </div>;
};

export default ConfirmSwap;
