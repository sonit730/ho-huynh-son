# Problem 3:
## Refactored:
- Organized the files
- Added/Define new types
- Optimization func: filter, sort, map
- Use logic && replace if => true / else => false
- Detailed explanations in the comments within the source code. 

- Examlple:
```js
import React, { useMemo } from 'react';
import { usePrices, useWalletBalances } from '../hooks';
import WalletRow from './WalletRow';
import { BoxProps, FormattedWalletBalance, Prices, WalletBalance } from '../types';


interface Props extends BoxProps {
    children?: React.ReactNode;
}

const WalletPage: React.FC<Props> = ({ children, ...rest }) => {

    // remove props: Props after using React.FC<Props>

    const balances = useWalletBalances(); // cant not found a hook so let's define useWalletBalances(src/hooks/useWalletBalances.ts)
    const prices: Prices = usePrices(); // similar as useWalletBalances

    const getPriority = (blockchain: string): number => {
        switch (blockchain) {
            case 'Osmosis':
                return 100
            case 'Ethereum':
                return 50
            case 'Arbitrum':
                return 30
            case 'Zilliqa':
            case 'Neo':
                return 20
            default:
                return -99
        }
    } // case 'Zilliqa' and  case 'Neo' are similar, so they can be shortly

    /**
     * Explanation:
     * Problem 1: function getPriority has default return -99 and the condition > -99, therefore it is related to each other.
     * 
     * Problem 2: Func sort() returns a number and has 3 cases:
     * - A negative value: a < b
     * - A positive value: a > b
     * - Zero: a = b
     */
    const sortedBalances = useMemo(() => {
        return balances
            .filter((balance: WalletBalance) => {
                const balancePriority = getPriority(balance.blockchain);
                return balancePriority > -99 && balance.amount <= 0;  // replace lhsPriority to balancePriority
            })
            .sort((lhs: WalletBalance, rhs: WalletBalance) => {
                const leftPriority = getPriority(lhs.blockchain);
                const rightPriority = getPriority(rhs.blockchain);
                return rightPriority - leftPriority;
            })
            .map((balance: WalletBalance) => ({
                ...balance,
                formatted: balance.amount.toFixed()
            }))
    }, [balances, prices]);

    //formattedBalances must loop through the sortedBalances array again leads to memory overhead, so we can extend the sortedBalances array

    // const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
    //     return {
    //         ...balance,
    //         formatted: balance.amount.toFixed()
    //     }
    // })

    /**
     * Explanation
     * - Problem 1: Define Interface Prices
     * - Problem 2: Define class
     */
    const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {

        const usdValue = prices[balance.currency] * balance.amount;

        const classes = {
            row: 'text-sm rounded'
        }

        return (
            <WalletRow
                className={classes.row}
                key={index}
                amount={balance.amount}
                usdValue={usdValue}
                formattedAmount={balance.formatted}
            />
        )
    })

    return (
        <div {...rest}>
            {rows}
        </div>
    )
}

export default WalletPage // Use export default to make it accessible for external use.
```