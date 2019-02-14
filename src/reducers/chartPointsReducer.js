import { REQUEST_CHART_POINTS, RECIVE_CHART_POINTS } from '../actions/chartPointsActions';

export default function chartPoints(state = {
    isFetching: false,
    data: []
}, action) {
    switch(action.type) {
        case REQUEST_CHART_POINTS: 
            return Object.assign({}, state, { isFetching: true });
        case RECIVE_CHART_POINTS: 
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            })
        default: 
            return state;
    }
}