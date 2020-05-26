import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import AboutPokemon from './components/AboutPokemon'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre/:id" component={AboutPokemon} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
