import React, { useState } from 'react';
import Modal from '../../components/Modal';
import CurrencyModal from './CurrencyModal';
import Currency from './Currency';
import { decimalRegex, escapeRegExp, inputRegex, normalizeInputValue } from '../../utils';
import { Field, PricesRes } from '../../types';
import { useSwapContext } from '../../Context/SwapContext';
import toast from 'react-hot-toast';
import InputComponent from '../../components/Forms/InputComponent';

interface CurrencyInputProps {
}

const CurrencyInput: React.FunctionComponent<CurrencyInputProps> = () => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const { amountSell, pricesApi, setPairPrice, setAmountSell } = useSwapContext()

    const enforcer = (nextValueInput: string) => {
        if (nextValueInput === '' || inputRegex.test(escapeRegExp(nextValueInput))) {
            setAmountSell(normalizeInputValue(nextValueInput || ''))
        }
    }

    const handlePairCurrency = (symbol: string) => {
        const tradePirce = pricesApi.find((v: PricesRes) => v.currency === symbol)
        setPairPrice(pair => ({
            ...pair,
            coinBase: symbol,
            buyPrice: tradePirce?.price || ''
        }))
        setIsShowModal(false)

        if (!tradePirce) {
            toast.error('Conversion rate pair not found on the system. Please try again later.')
        }
    }

    return (
        <div className="bg-gray-400 dark:bg-secondary p-16 rounded-sm flex flex-col py-[30px] transition duration-500">
            <div className='text-left text-gray-300 dark:text-light text-sm'>
                Amount to send
            </div>

            <div className="flex justify-between items-center">
                <InputComponent
                    value={amountSell}
                    onChange={(event) => {
                        event.stopPropagation()
                        enforcer(event.target.value)
                    }}
                    pattern={decimalRegex.source}
                    placeholder="0"
                    type='text'
                    inputMode='decimal'
                />

                <div onClick={() => { setIsShowModal(true) }}>
                    <Currency field={Field.INPUT} />
                </div>
            </div>

            <Modal title="Select a token"
                show={isShowModal}
                onClose={() => setIsShowModal(false)}
            >
                <div>
                    <CurrencyModal filed={Field.INPUT} handlePairCurrency={handlePairCurrency} />
                </div>
            </Modal>
        </div>
    )
};

export default CurrencyInput;
