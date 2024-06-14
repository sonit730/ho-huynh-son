import { createContext, useContext, useEffect, useState } from "react";
import { CoinPair, PricesRes, SwapContextType } from "../types";

const INITIAL_STATE = {
    amountBuy: '',
    amountSell: '',
    pricesApi: [],
    pairPrice: {
        buyPrice: '',
        coinBase: 'KUJI',
        coinQuote: 'USD',
    },
    setAmountBuy: () => { },
    setAmountSell: () => { },
    setPairPrice: () => { },
    reset: () => { }
}

const SwapContext = createContext<SwapContextType>(INITIAL_STATE)

const SwapProvider = ({ children }: { children: React.ReactNode }) => {
    const [pricesApi, setPricesApi] = useState<Array<PricesRes> | []>(INITIAL_STATE.pricesApi)
    const [pairPrice, setPairPrice] = useState<CoinPair>(INITIAL_STATE.pairPrice)
    const [amountBuy, setAmountBuy] = useState<string>(INITIAL_STATE.amountBuy)
    const [amountSell, setAmountSell] = useState<string>(INITIAL_STATE.amountSell)
    
    useEffect(() => {
        const fetchPrices = async () => {
            const res = await fetch('https://interview.switcheo.com/prices.json');
            const data = await res.json();
            const tradePirce = data.find((v: PricesRes) => v.currency === INITIAL_STATE.pairPrice.coinBase)
            setPairPrice(pair => ({
                ...pair,
                buyPrice: tradePirce?.price || ''
            }))
            setPricesApi(data);
        };
        fetchPrices();
    }, []);

    const reset = () => {
        setAmountBuy(INITIAL_STATE.amountBuy)
        setAmountSell(INITIAL_STATE.amountSell)
    }

    const value = {
        pricesApi,
        amountBuy,
        amountSell,
        setAmountBuy,
        setAmountSell,
        pairPrice,
        setPairPrice,
        reset
    }
    
    return (
        <SwapContext.Provider value={value}>{children} </SwapContext.Provider>
    )
}

export default SwapProvider

export const useSwapContext = () => useContext(SwapContext)