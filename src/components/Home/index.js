import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonItem from './PokemonItem'
import { FaSearchengin } from 'react-icons/fa'

import './style.css'

const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokeFiltereds, setPokeFiltereds] = useState([])
  const [filter, setFilter] = useState([])
  const [count, setCount] = useState(0)
  const [limit, setLimit] = useState(20)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [loadingRequest, setLoadingRequest] = useState(false)

  useEffect(() => {
    async function getPokemons() {
      try {
        setLoading(true)
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`)

        setCount(res.data.count)
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


  async function filterPokemons(e) {
    try {
      e.preventDefault()
      setNotFound(false)

      console.log("ddfef")
      setLoadingRequest(true)
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${filter}`)

      console.log("aaaaf")
      setLoadingRequest(false)
      setNotFound(false)
      setPokeFiltereds(res.data.forms)
    } catch (error) {
      console.log('ss')
      setLoadingRequest(false)
      setNotFound(true)
    }
  }

  function modifyFilter(name) {
    if (name.length !== 0) {
      return setFilter(name)
    }

    setNotFound(false)
    setPokeFiltereds(pokemons)
  }

  function showPokemonItem() {
    if (error) {
      return <p className="error">Ouve um error inesperado, porfavor tente acessar este sire novamente mais tarde.</p>
    } else if (notFound) {
      return <p className="not_found">Nenhum pokemom encontrado</p>
    } else if (loadingRequest) {
      return <p className="not_found">Procurando...</p>
    } else {
      return pokeFiltereds.map((pokemon, index) => <PokemonItem key={index} pokemon={pokemon} />)
    }
  }

  return (
    <div className="wrapper_home">
      <div className="container">
        <div className="wrapper_title">
          <h1>Poke Api</h1>
        </div>
        <div className="wrapper_pokemons">
          <div className="wrapper_subtitle">
            <h3>Pokemons</h3>
          </div>
          <div className="wrapper_filter">
            <form onSubmit={filterPokemons}>
              <input
                type="text"
                name="input"
                placeholder="Procurar pokemon"
                onChange={(e) => modifyFilter(e.target.value)}
              />
              <FaSearchengin />
            </form>
          </div>
          <div className="row">
            {showPokemonItem()}
          </div>
          <div className="wrapper_button">
            <button type="button" onClick={() => setLimit(limit + 20)} disabled={loading ? true : false}>
              {loading ? 'Carregando...' : (
                <>
                  <span>Ver mais</span>
                  <span>| {limit} de {count}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
