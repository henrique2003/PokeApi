import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonItem from './components/PokemonItem'
import './App.css'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(20)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getPokemons() {
      try {
        setLoading(true)
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`)

        setPokemons(res.data.results)
        return setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getPokemons()
  }, [limit])

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
            {
              pokemons.length !== 0 ?
                pokemons.map((pokemon, index) => <PokemonItem key={index} pokemon={pokemon} />) :
                <p className="api_error">
                  Ouve um error inesperado, porfavor tente acessar este sire novamente mais tarde.
                </p>
            }
          </div>
          <div className="wrapper_button">
            <button type="button" onClick={() => setLimit(limit + 20)} disabled={loading ? true : false}>
              {loading ? 'Carregando...' : 'Ver mais'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
