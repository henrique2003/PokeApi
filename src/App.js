import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonItem from './components/PokemonItem'
import './App.css'

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemon()

    async function getPokemon() {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')

        return setPokemons(res.data.results)
      } catch (error) {
        console.log(error)
      }
    }
  }, [pokemons])

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
            {pokemons.map((pokemon, index) => (
              <PokemonItem key={index} name={pokemon.name} url={pokemon.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
