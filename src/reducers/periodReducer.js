import { SET_PERIOD, availablePeriods } from '../actions/periodActions';

export default function period(state = availablePeriods.ONE_MONTH, action) {
    switch(action.type) {
        case SET_PERIOD: 
            return action.period;
        default: 
            return state;
    }
}