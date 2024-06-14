export enum Field {
    INPUT = 'INPUT',
    OUTPUT = 'OUTPUT',
}
export type PricesRes = {
    currency: string,
    date: string,
    price: string
}

export type CoinPair = {
    buyPrice: string
    coinBase: string
    coinQuote: string
}

export type SwapContextType = {
    pricesApi: Array<PricesRes> | []
    amountBuy: string
    amountSell: string
    setAmountBuy: React.Dispatch<React.SetStateAction<string>>
    setAmountSell: React.Dispatch<React.SetStateAction<string>>
    pairPrice?: CoinPair
    setPairPrice: React.Dispatch<React.SetStateAction<CoinPair>>
    reset: () => void
}
