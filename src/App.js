import React from 'react';
import AviasalesAPI from './AviasalesAPI/AviasalesAPI';
import './App.css';
// import ListItem from './ListItem/ListItem';
// import Item from './Item/Item';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.aviasalesAPI = null;     //объект работы с запросами
    this.searchId = null;         //токен запроса
    this.ticketPackObj = null;    //результат ответа с билетами
    this.ticketPackArr = null     //массив с билетами
  }

  async componentDidMount() {
    this.aviasalesAPI = new AviasalesAPI();
    const serchIdObj = await this.aviasalesAPI.getSearchId();
    this.searchId = serchIdObj.searchId;
    this.ticketPackObj = await this.aviasalesAPI.getTicketPack(this.searchId);

    this.ticketPackArr = Object.entries(this.ticketPackObj.tickets);
    // console.log(this.ticketPackArr);
  }

  render() {
    return (
      <div>
        <h1>HW</h1>
        {/* <ListItem items={this.ticketPackArr} /> */}
      </div >
    );
  }
}

