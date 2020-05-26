import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import axios from 'axios'

import './style.css'

const AboutPokemon = ({ history, match }) => {
  const id = parseInt(match.params.id)

  const [changeSprite, setChangeSprite] = useState(false)
  const [pokemon, setPokemon] = useState({
    sprites: {
      front_shiny: '',
      front_default: ''
    },
    types: [{
      type: {
        name: ''
      }
    }],
    abilities: [{
      ability: {
        name: ''
      }
    }],
    name: '',
    id: 0,
    weight: 0,
    base_experience: 0
  })

  useEffect(() => {
    async function loadPokemon() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

        return setPokemon(res.data)
      } catch (error) {
        return history.push('/')
      }
    }

    loadPokemon()
  }, [history, id])

  function showTypes() {
    return pokemon.types.map(({ type }) => {
      return type.name
    }).join(', ')
  }

  function showAbilitys() {
    return pokemon.abilities.map(({ ability }) => {
      return ability.name
    }).join(', ')
  }

  function backArrow() {
    if (id - 1 <= 0) {
      return 1
    }

    return id - 1
  }

  function leftArrow() {
    if (id + 1 >= 808) {
      return 807
    }

    return id + 1
  }

  return (
    <div className="wrapper_about_pokemon">
      <div className="wrapper_back_arrow">
        <Link to='/'>
          <FaArrowLeft />
        </Link>
      </div>
      <div className="container">
        <div className="wrapper_title">
          <h1>Poke Api</h1>
        </div>
        <div className="wrapper_pokemons">
          <div className="row">
            <div
              className="wrapper_sprite col-12 col-sm-12 col-md-2 col-lg-2 text-center"
              onMouseOver={() => setChangeSprite(true)}
              onMouseOut={() => setChangeSprite(false)}
            >
              <img
                src={changeSprite ?
                  pokemon.sprites.front_shiny :
                  pokemon.sprites.front_default}
                alt="spites"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 mt-4 mt-sm-4 mt-md-0">
              <div className="content">
                <p>Nome: <span>{pokemon.name}</span></p>
                <p>Pokedéx: <span>{pokemon.id}</span></p>
                <p>Peso: <span>{pokemon.weight}</span></p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <div className="content">
                <p>Experiência base: <span>{pokemon.base_experience}xp</span></p>
                <p>Tipo: <span>{showTypes()}</span></p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-4">
              <div className="content">
                <p>Abilidades: <span>{showAbilitys()}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper_arrows">
          <Link to={`/sobre/${backArrow()}`}>
            <FaArrowLeft />
          </Link>
          <Link to={`/sobre/${leftArrow()}`}>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default withRouter(AboutPokemon)
