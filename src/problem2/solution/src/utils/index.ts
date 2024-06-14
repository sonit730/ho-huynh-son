import BigNumber from "bignumber.js";

export function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`)
export const decimalRegex = RegExp(`^[0-9]*[.,]?[0-9]*$`)

export const normalizeInputValue = (val: string, strictFormat?: boolean) => {
    const normalizedValue = val.replace(/^0+(?=\d+)/, '').replace(/^\./, '0.')
    return strictFormat
        ? normalizedValue.replace(/^([\d,]+)$|^([\d,]+)\.0*$|^([\d,]+\.[0-9]*?)0*$/, '$1$2$3')
        : normalizedValue
}

export const formattedAmounts = (val: string, strictFormat = false) => {
    const normalized = normalizeInputValue(new BigNumber(val).toFixed(12), strictFormat)
    return normalized
}