export const SET_PERIOD = 'SET_PERIOD';
export const Periods = {
    FIVE_YEARS:   '5y',
    TWO_YEARS:    '2y',
    ONE_YEAR:     '1y',
    SIX_MONTHS:   '6m',
    THREE_MONTHS: '3m',
    ONE_MONTH:    '1m',
}

export function setPeriod(period) {
    return {
        type: SET_PERIOD,
        period
    }
}

