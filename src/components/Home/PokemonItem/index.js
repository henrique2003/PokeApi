import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import formatUrl from '../../utils/format-url'

import './style.css'

const PokemonItem = ({ pokemon }) => {
  const { url, name } = pokemon

  return (
    <div className="wrapper_pokemon_item col-12 col-sm-12 col-md-6 col-lg-6">
      <div className="wrapper_card">
        <div className="row">
          <div className="col-6">
            <p>Nome: <span>{name}</span></p>
          </div>
          <div className="col-6 text-right">
            <Link to={`/sobre/${formatUrl(url)}`}>Ver mais</Link>
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

export default memo(PokemonItem);
