import Api from './Api';

export default class CompanyApi extends Api {
    getCompanyData(symbol) {
        return this.apiClient.get(`stock/${symbol}/company`);
    }
    getCompanyLogo(symbol) {
        return this.apiClient.get(`stock/${symbol}/logo`);
    }
}