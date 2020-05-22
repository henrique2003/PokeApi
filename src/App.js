import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonItem from './components/PokemonItem'
import './App.css'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(20)

  useEffect(() => {
    async function getPokemons() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)

        return setPokemons(res.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getPokemons()
  }, [])

  async function morePokemons() {
    try {
      const moreLimit = limit + 20

      setLimit(moreLimit)

      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${moreLimit}`)

      return setPokemons(res.data.results)
    } catch (error) {
      console.log(error)
    }
  }

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
            {pokemons.map((pokemon, index) => <PokemonItem key={index} pokemon={pokemon} />)}
          </div>
          <div className="wrapper_button">
            <button type="button" onClick={morePokemons}>Ver mais</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
