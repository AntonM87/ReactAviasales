import axios from "axios";

export default class AviasalesAPI {
    constructor() {
        this.searchIdUrl = 'https://front-test.beta.aviasales.ru/search';
        this.ticketPackUrl = 'https://front-test.beta.aviasales.ru/tickets?searchId=';
    }

    async getSearchId() {
        let result = '';
        await axios.get(this.searchIdUrl)
            .then(data => {
                result = data.data;
            })
        return result;
    }

    async getTicketPack(token) {
        const url = this.ticketPackUrl + token;
        let result = null;
        await axios.get(url)
            .then(data => {
                if (data.status === 200) {
                    result = data.data;
                }
            })
        return result;
    }

}