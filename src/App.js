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
      ticketPackArrLength: 5,
    }

    this.ticketPackArr = [];
    this.getMoreTickets.bind = this.getMoreTickets.bind(this);
  }

  async componentDidMount() {
    const serchIdObj = await this.aviasalesAPI.getSearchId();
    this.searchId = serchIdObj.searchId;
    this.ticketPackObj = await this.aviasalesAPI.getTicketPack(this.searchId);

    const ticketPackArr = Object.entries(this.ticketPackObj.tickets);
    this.ticketPackArr = ticketPackArr;
    this.setState({ ticketPackArr });
  }

  getMoreTickets() {
    const ticketPackArrLength = this.state.ticketPackArrLength + 5;
    this.setState({
      ticketPackArrLength
    })
  }

  render() {

    const ticketPackArr = this.ticketPackArr;
    const resArr = ticketPackArr.slice(0, this.state.ticketPackArrLength);

    // const { ticketPackArr } = this.state;
    // const resArr = ticketPackArr.slice(0, 5);

    // if (resArr.length === 0) {
    //   return (
    //     <>
    //       <h1>Opps</h1>
    //       <h2>Что-то пошло не так</h2>
    //       <h2>Попробуйте перезагрузить страницу</h2>
    //       <h3>До Вас все работало!</h3>
    //     </>
    //   )
    // }

    // console.log('this.ticketpackArr', this.ticketPackArr);

    return (
      <div>
        <MainLogo />
        <div className='main__container'>
          <SortSelection />
          {/* обработать отсутсвие билетов */}
          <ListItem
            tickets={resArr}
            handlerGetMoreTickets={this.getMoreTickets}
          />
        </div >
      </div>
    );
  }
}

