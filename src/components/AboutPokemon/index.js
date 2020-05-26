import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

import './style.css'

const AboutPokemon = () => {
  const [changeSprite, setChangeSprite] = useState(false)

  return (
    <div className="wrapper_about_pokemon">
      <Link to='/'><FaArrowLeft /></Link>
      <div className="container">
        <div className="wrapper_title">
          <h1>Poke Api</h1>
        </div>
        <div className="wrapper_pokemons">
          <div className="row">
            <div
              className="wrapper_sprite col-2 text-center"
              onMouseOver={() => setChangeSprite(true)}
              onMouseOut={() => setChangeSprite(false)}
            >
              <img
                src={changeSprite ?
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' :
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
                alt="spites"
                className="img-fluid"
              />
            </div>
            <div className="col-2">
              <div className="content">
                <p>Nome: <span>ditto</span></p>
                <p>Tipo: <span>normal</span></p>
                <p>Peso: <span>40</span></p>
              </div>
            </div>
            <div className="col-3">
              <div className="content">
                <p>Pokedéx: <span>132</span></p>
                <p>Experiência base: <span>101xp</span></p>
              </div>
            </div>
            <div className="wrapper_abilities col-5">
              <div className="content">
                <p>Abilidades: <span>imposte, limber</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPokemon
