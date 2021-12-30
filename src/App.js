import React from 'react';
import AviasalesAPI from './AviasalesAPI/AviasalesAPI';
import './App.css';
import ListItem from './ListItem/ListItem';
import SortSelection from './SortSelection/SortSelection';
import MainLogo from './MainLogo/MainLogo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.aviasalesAPI = new AviasalesAPI();         //объект работы с запросами
    this.searchId = null;                           //токен запроса
    this.ticketPackObj = null;                      //результат ответа с билетами

    this.state = {
      ticketPackArr: [],
      ticketPackArrLength: 5,
      sort: 'inexpensive',                          //состояние сортировки по умолчанию inexpensive(то есть дешевый)
      radioButtonLeftPanel: '0',                      //состояние боковой панелы выбора, 0-all, 1-notDirect, 2-one, 3-two, 4-three
    }

    this.ticketPackArr = [];
    this.getMoreTickets = this.getMoreTickets.bind(this);
    this.selectSort = this.selectSort.bind(this);   //верхняя панель
    this.radioSelect = this.radioSelect.bind(this); //боковая панель
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

  //Сортировка по дешевизне
  sortInexpensive(arr) {
    return arr.sort((a, b) => {
      return a[1].price - b[1].price;
    })
  }

  //Сортировка по скорости
  sortFast(arr) {
    return arr.sort((a, b) => {
      return a[1].segments[0].duration - b[1].segments[0].duration;
    })
  }

  sortOptimal(arr) {
    arr.sort((a, b) => {
      const price = a[1].price - b[1].price;
      const duration = a[1].segments[0].duration - b[1].segments[0].duration;

      let result = 0;

      if (price < 0 || duration < 0) {
        result = -1
      } else if (price > 0 || duration > 0) {
        result = 1
      } else if (price > 0 || duration < 0) {
        result = -1
      } else if (price < 0 || duration > 0) {
        result = -1
      }

      return result;
    })
  }

  selectSort(e) {
    const name = e.target.className;
    this.setState({
      sort: name
    })
  }

  sort(arr, rule) {
    if (rule === 'inexpensive') {
      this.sortInexpensive(arr); // первоначальная сортировка изходя из исходного состояния страницы
    } else if (rule === 'fast') {
      this.sortFast(arr);
    } else if (rule === 'optimal') {
      this.sortOptimal(arr);
    }
  }

  //обрабочик чекбокса "все"
  radioSelect(e) {
    const radioButtonLeftPanel = e.target.value;
    this.setState({
      radioButtonLeftPanel,
    });
  }

  render() {

    const { sort, radioButtonLeftPanel } = this.state;

    const ticketPackArr = this.ticketPackArr;
    const resArr = ticketPackArr.slice(0, this.state.ticketPackArrLength);

    this.sort(resArr, sort);

    const filter = resArr.filter(ticket => {

      const length = ticket[1].segments[0].stops.length;
      let result;

      switch (radioButtonLeftPanel) {
        case '0':
          result = true;
          break;
        case '1':
          result = length === 0 ? true : false;
          break;
        case '2':
          result = length === 1 ? true : false;
          break;
        case '3':
          result = length === 2 ? true : false;
          break;
        case '4':
          result = length === 3 ? true : false;
          break;
      }

      return result;
    });

    console.log('-------');

    return (
      <div>
        <MainLogo />
        <div className='main__container'>
          <SortSelection
            radioSelectHandler={this.radioSelect}
          />
          <ListItem
            tickets={filter}
            handlerGetMoreTickets={this.getMoreTickets}
            handlerSelectSort={this.selectSort}
          />
        </div >
      </div>
    );
  }
}

