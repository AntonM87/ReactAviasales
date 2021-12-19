import React from 'react';
import AviasalesAPI from './AviasalesAPI/AviasalesAPI';
import './App.css';
import ListItem from './ListItem/ListItem';
import SortSelection from './SortSelection/SortSelection';
import MainLogo from './MainLogo/MainLogo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.aviasalesAPI = new AviasalesAPI();     //объект работы с запросами
    this.searchId = null;                       //токен запроса
    this.ticketPackObj = null;                  //результат ответа с билетами
    this.state = {
      ticketPackArr: [],
    }

    this.ticketPackArr = [];
  }

  async componentDidMount() {
    const serchIdObj = await this.aviasalesAPI.getSearchId();
    this.searchId = serchIdObj.searchId;
    this.ticketPackObj = await this.aviasalesAPI.getTicketPack(this.searchId);

    const ticketPackArr = Object.entries(this.ticketPackObj.tickets);
    this.setState({ ticketPackArr });


    this.ticketPackArr = ticketPackArr;

  }

  render() {
    const { ticketPackArr } = this.state;
    const resArr = ticketPackArr.slice(0, 5);

    console.log('ticketPackArr', this.ticketPackArr);

    return (
      <div>
        <MainLogo />
        <div className='main__container'>
          <SortSelection />
          {/* обработать отсутсвие билетов */}
          <ListItem tickets={resArr} />
        </div >
      </div>
    );
  }
}

