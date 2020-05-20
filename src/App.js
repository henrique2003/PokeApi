import React, { useState, useEffect } from 'react'
import PokemonItem from './components/PokemonItem'
import './App.css'

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPokemons(...pokemons, data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [pokemons])

  // function searchPokemon(pokeUrl) {
  //   fetch(pokeUrl)
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((data) => {
  //       // setPokemons(...pokemons, data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  return (
    <div className="wrapper_app">
      <div className="container">
        <div className="wrapper_title">
          <h1>Poke Api</h1>
        </div>
        <div className="wrapper_pokemons">
          <div className="wrapper_subtitle">
            <h3>Pokemons</h3>
          </div>
          <div className="row">
            <PokemonItem />
            <PokemonItem />
            <PokemonItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
