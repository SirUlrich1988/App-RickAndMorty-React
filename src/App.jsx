import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'
import axios from "axios"

function App() {
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(()=> {
    let numberLocation
    if(searchInput === ''){
      numberLocation = Math.floor(Math.random()*(126-1)+1)
    }else{
      numberLocation = searchInput
    }
    
    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
  },[searchInput])

  const handleSubmit = event => {
    event.preventDefault()
    setSearchInput(event.target.search.value)
  }

  return (
    <div className="App">
      <ul className='box_header'></ul >
      <form className='box_input' onSubmit={handleSubmit}>
        <h1>Chose a Destination Dimension from 1 to 126</h1>
        <input id='search' type="text" />
        <button>Search</button>
      </form>
      <LocationInfo location={location} />
      <div className='box_residents'>
        {
          location?.residents.map(URL => (
            <CardResident
            key={URL}
            url={URL}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
