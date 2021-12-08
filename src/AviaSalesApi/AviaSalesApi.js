import axios from "axios";

export default class AviaSalesApi {

    constructor() {
        this.requestSearchIdUrl = 'https://front-test.beta.aviasales.ru/search';
        this.requestTicketsPackUrl = 'https://front-test.beta.aviasales.ru/tickets?searchId='
        this.searchID = 0;
    }

    async getTokenSearchID() {
        let result = '';
        await axios.get(this.requestSearchIdUrl)
            .then(resp => {
                if (resp.status === 200) {
                    result = resp.data.searchID;
                }
            })
        return result;
    }
}