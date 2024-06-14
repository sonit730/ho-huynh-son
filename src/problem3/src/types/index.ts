export interface Prices {
    [currency: string]: number;
}

export interface WalletBalance {
    currency: string;
    amount: number;
    blockchain: string; // add new
}

export interface FormattedWalletBalance {
    currency: string;
    amount: number;
    formatted: string;
}

export interface BoxProps {
}
