import React, { useState } from 'react';
import CurrencyInput from './CurrencyInput';
import ButtonDowm from './ButtonDowm';
import CurrencyOutput from './CurrencyOutput';
import Modal from '../../components/Modal';
import ConfirmSwap from './ConfirmSwap';
import { useSwapContext } from '../../Context/SwapContext';

interface SwapProps {
}

const Swap: React.FunctionComponent<SwapProps> = () => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const { amountSell, pairPrice } = useSwapContext()

    return <div className='grow mx-auto my-0 max-w-[1200px] w-screen pt-16 px-12 flex justify-center'>
        <div className='max-w-lg w-full'>
            <h1 className='text-gray-200 dark:text-white text-4xl text-center p-16 font-bold tracking-widest transition duration-500' >Swap</h1>
            <CurrencyInput />
            <ButtonDowm />
            <CurrencyOutput />
            <button
                onClick={() => setIsShowModal(true)}
                disabled={!amountSell || !pairPrice?.buyPrice}
                className={`w-full text-xl font-bold p-16 mt-4 rounded-[20px] ${amountSell && pairPrice?.buyPrice ? 'bg-pink text-white' : 'bg-gray-100 dark:bg-primary text-gray-300'}`}
            >
                {amountSell && pairPrice?.buyPrice ? 'Confirm Swap' : 'Enter an amount'}
            </button>
        </div>
        <Modal
            title="Confirm Swap"
            show={isShowModal}
            onClose={() => setIsShowModal(false)}
        >
            <div>
                <ConfirmSwap setIsShowModal={setIsShowModal} />
            </div>
        </Modal>
    </div>
};

export default Swap;
