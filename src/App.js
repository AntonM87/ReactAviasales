import AviaSalesApi from './AviaSalesApi/AviaSalesApi'
import './App.css'

export default function App() {

  const a =  new AviaSalesApi().getTokenSearchID();
  console.log('a',a);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}