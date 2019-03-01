import Api from './Api';

export default class ChartsApi extends Api {
    getChartPoints(symbol, period) {
        return this.apiClient.get(`stock/${symbol}/chart/${period}`);
    }
}