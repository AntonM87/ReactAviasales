import React from "react";
import axios from "axios";

export default class AviaSalesApi extends React.Component {
    constructor(props) {
        super(props);
        this.requestSearchID = 'https://front-test.beta.aviasales.ru/search';
        this.requestTicketsPack = 'https://front-test.beta.aviasales.ru/tickets?searchId='
        this.searchID = null;
    }

    async responseSearchID() {
        let result = '';
        await axios.get(this.requestSearchID).then(response => {
            result = this.requestTicketsPack + response.data.searchId;
        });
        console.log('result', result);
        return result;
    }

    setSearchID(){
        this.searchID = this.responseSearchID();
    }

    getSearchID(){
        // console.log(this.searchID);
    }

    getTicketsPack() {
        
        // await axios.get(this.requestTicketsPack + this.getSearchID())
        // .then(response => {
        //     console.log('response', response);
        // })
    }
}