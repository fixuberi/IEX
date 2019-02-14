import { SET_PERIOD, Periods } from '../actions/periodActions';

export default function period(state = Periods.ONE_MONTH, action) {
    switch(action.type) {
        case SET_PERIOD: 
            return action.period;
        default: 
            return state;
    }
}