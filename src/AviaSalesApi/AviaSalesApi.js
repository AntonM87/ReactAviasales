import React from "react";
import axios from "axios";

export default class AviaSalesApi extends React.Component {
    constructor(props) {
        super(props);
        this.requestSearchIdUrl = 'https://front-test.beta.aviasales.ru/search';
        this.requestTicketsPackUrl = 'https://front-test.beta.aviasales.ru/tickets?searchId='
        this.searchID = null;
    }

    /*
        получить асинхронно промис
    */
    async getResponsePromiseSearchID() {
        let result = '';
        await axios.get(this.requestSearchIdUrl);
        return result;
    }

    /*
        На основе асинхронного промисв получить айди запроса
    */
    setSearchID() {
        this.getResponsePromiseSearchID().then(response => {
                if (response.status === 200) {
                    this.setSearchID = response.data.searchID;
                }
            })
        }

    getSearchID() {
            return this.searchID;
        }

    getTicketsPack() {

            // await axios.get(this.requestTicketsPack + this.getSearchID())
            // .then(response => {
            //     console.log('response', response);
            // })
        }
}