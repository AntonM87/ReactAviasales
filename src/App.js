import AviaSalesApi from './AviaSalesApi/AviaSalesApi'
import './App.css'

export default function App(){

  const aviaSalesApi = new AviaSalesApi();
  aviaSalesApi.responseSearchID();

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}