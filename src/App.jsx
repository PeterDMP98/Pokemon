import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorFetch from './components/ErrorFetch'
import TargePokemon from './components/TargePokemon'

function App() {

    const [pokemon, setPokemon] = useState()

    const [namePokemon, setNamePokemon] = useState()

    const [hasError, setHasError] = useState(false)

    useEffect(() => {

      // let url 
      // if (namePokemon ==="") {
      //   url = `https://pokeapi.co/api/v2/pokemon/mareep`
      // } else {
      //   url =`https://pokeapi.co/api/v2/pokemon/${namePokemon}`
      // };


      const url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
      axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
    }, [namePokemon])
    
    console.log(pokemon);

    const handleSubmit = e => {
      e.preventDefault()
      setNamePokemon(e.target.namePokemon.value.toLowerCase().trim());
      e.target.namePokemon.value="";
      setTimeout(() =>{
        setHasError(false)
      }, 20000)
    }


  return (
    <div className="App">
      <form className='submit' onSubmit={handleSubmit} >
        <input id='namePokemon' type="text" />
        <button className='change'>SUBMIT</button>
      </form>
      {
        hasError 
        ? <ErrorFetch/>
        : <TargePokemon pokemon={pokemon}/> 
      }
      
    </div>
  )
}

export default App
