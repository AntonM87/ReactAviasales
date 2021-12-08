import AviaSalesApi from './AviaSalesApi/AviaSalesApi'
import './App.css'

export default function App(){

  const aviaSalesApi = new AviaSalesApi();
  // aviaSalesApi.setSearchID();
  // const searchID =aviaSalesApi.getSearchID();
  console.log('searchID', aviaSalesApi.getResponsePromiseSearchID);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}