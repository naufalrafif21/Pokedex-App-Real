import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Pokemons from "./pages/Pokemons/Pokemons";
import PokemonId from "./pages/Pokemons/PokemonId";
import PokemonsCart from "./pages/Pokemons/PokemonsCart";



function App() {
  return (
    <div className="App">
      <nav class="center">
        <div class="container">
          <span class="icon-logo">Pokedex</span>
        </div>
      </nav>

      <header class="center">
        <center>
          <div class="profile-picture">
            <img src="https://imgur.com/eZ24gj6.png" /> {/* pokemon logo */}
          </div>
          <br/>
          <hr /> 

      <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: 600}}>
        <Link to={"/"}>Pokemons</Link>
        <Link to={"/pokemons/cart"}>Owned Pokemons</Link>
      </div>
      
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="pokemons/:id" element={<PokemonId />} />
        <Route path="pokemons/cart" element={<PokemonsCart />} />
      </Routes>
      </center>
      </header>
    </div>
    
  );
}

export default App