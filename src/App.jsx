
import { Link } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex/pokedex'
import CustomRouter from './CustomRouter/customRouter'

function App() {
  

  return (
    <div className='outer-wrapper'>
      <h1 id="pokedex-heading">
      <Link to={'/'}>Pokedex</Link> </h1>
      <CustomRouter/>
    </div>
  )
}

export default App
