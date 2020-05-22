import React from 'react'
import './style.css'

const PokemonItem = ({ pokemon }) => {
  const { name, url } = pokemon

  return (
    <div className="wrapper_pokemon_item col-12 col-sm-12 col-md-6 col-lg-6">
      <div className="wrapper_card">
        <div className="row">
          <div className="col-6">
            <p>Nome: {name}</p>
          </div>
          <div className="col-6 text-right">
            <a href={url}>Ver mais</a>
          </div>
        </div>
      </div>
    </div>
  )
};

PokemonItem.defaultProps = {
  name: 'BBBB',
  url: '/'
}

export default PokemonItem;
