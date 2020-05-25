import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonItem from '../PokemonItem'
import { FaSearchengin } from 'react-icons/fa'

import './style.css'

const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokeFiltereds, setPokeFiltereds] = useState([])
  const [limit, setLimit] = useState(20)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getPokemons() {
      try {
        setLoading(true)
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`)

        setPokemons(res.data.results)
        setPokeFiltereds(res.data.results)
        return setLoading(false)
      } catch (error) {
        setError(true)
        console.log(error)
      }
    }
    getPokemons()
  }, [limit])


  function filterPokemons(e) {
    const inputFilter = e.target.value

    const filterPokemons = pokemons.filter((pokemon) => {
      const { name } = pokemon
      return name.toLowerCase().includes(inputFilter.toLowerCase())
    })

    setPokeFiltereds(filterPokemons)
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
          <div className="wrapper_filter">
            <input
              type="text"
              name="input"
              placeholder="Procurar pokemon"
              onChange={(e) => filterPokemons(e)}
            />
            <FaSearchengin />
          </div>
          <div className="row">
            {
              error ? <p className="error">
                Ouve um error inesperado, porfavor tente acessar este sire novamente mais tarde.
              </p> :
                pokeFiltereds.length !== 0 ?
                  pokeFiltereds.map((pokemon, index) => <PokemonItem key={index} pokemon={pokemon} />) :
                  <p className="not_found">Nenhum pokemom encontrado</p>
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

export default Home
