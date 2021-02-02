
import React, {useState} from 'react';

import axios from 'axios';

const Display = (props) => {
    const [pokeData, setPokeData] = useState([]);
    const onClick = (e) =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
        .then(res =>{
            setPokeData(res.data.results);
        })
        .catch(err => console.log(err));
    };
    return (
        <div>
            <h1>Show me the Pokemon</h1>
            <button onClick={onClick}>Whose That Pokemon?</button>
            {pokeData.map((poke, i) =>
                <li key={i}>{poke.name}</li>
            )}
        </div>
    )
}
export default Display