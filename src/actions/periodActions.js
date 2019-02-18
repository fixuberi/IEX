export const SET_PERIOD = 'SET_PERIOD';
export const availablePeriods = {
    FIVE_YEARS:   '5y',
    TWO_YEARS:    '2y',
    ONE_YEAR:     '1y',
    SIX_MONTHS:   '6m',
    THREE_MONTHS: '3m',
    ONE_MONTH:    '1m',
    getSortedArray: function() {
        let periods = {
                months: [],
                years: []
        };
        let obj = this;
        for(let key in obj) {
            if(typeof(obj[key])!= 'function') {
                obj[key].match(/y/) && periods.years.push(obj[key]);
                obj[key].match(/m/) && periods.months.push(obj[key]);
            }
        }
        for (let key in periods) {
            periods[key].sort((a,b)=> parseInt(a) - parseInt(b));
        }
        return [...periods.months, ...periods.years];
    }
}

export function setPeriod(period) {
    return {
        type: SET_PERIOD,
        period
    }
}

