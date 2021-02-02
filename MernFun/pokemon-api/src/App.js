import { useState, useEffect } from 'react';
import DisplayPokemon from './components/DisplayPokemon';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [ pokemon, setPokemon ] = useState([]);

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        .catch(error => console.log(error))
  }

  return (
      <div className="my-5 mx-auto">

        <div className="d-flex justify-content-center">
          <button
              className="btn btn-danger"
              onClick={ getPokemon }
          >Catch 'Em All</button>
        </div>

        {
          pokemon.map((p,i) => {
            return <DisplayPokemon
                pokemon={p}
                key={i}
            />
          })
        }

      </div>
  );
}

export default App;
