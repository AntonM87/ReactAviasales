import React from 'react';
import AviasalesAPI from './AviasalesAPI/AviasalesAPI';
import './App.css';
import ListItem from './ListItem/ListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.aviasalesAPI = new AviasalesAPI();     //объект работы с запросами
    this.searchId = null;                       //токен запроса
    this.ticketPackObj = null;                  //результат ответа с билетами
    this.state = {
      ticketPackArr: [],
    }
  }

  async componentDidMount() {
    const serchIdObj = await this.aviasalesAPI.getSearchId();
    this.searchId = serchIdObj.searchId;
    this.ticketPackObj = await this.aviasalesAPI.getTicketPack(this.searchId);

    const ticketPackArr = Object.entries(this.ticketPackObj.tickets);
    this.setState({ ticketPackArr });
  }

  render() {
    const { ticketPackArr } = this.state;
    console.log('ticketPackArr in render', ticketPackArr);

    return (
      <div>
        <ListItem tickets={ticketPackArr} />
      </div >
    );
  }
}

