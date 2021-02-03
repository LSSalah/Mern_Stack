import React , {useState}  from 'react'
import axios from "axios"
import { navigate } from '@reach/router';

const Search = (props) => {
    const onChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }
    const [formState, setFormState] = useState({
        category: "people",
        id: ""
    });
    const [starData, setStarData] = useState([]);
    // const [error, setError] = useState('');
    const onClick = (e) =>{
        axios.get('https://swapi.dev/api/'+formState.category +'/'+formState.id+'/')
        .then(res =>{
            setStarData(res.data);
        })
        .catch(err => console.log(err));
    };
    

    

    const onSubmit = e => {
        e.preventDefault();
        navigate('/' + formState.category + '/' + formState.id);
    }

    return (
        <div>
            <h1>Luke API Walker</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Search For:</label>
                    <select name="category" onChange={onChange}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="films">Films</option>    
                    </select>
                </div>
                <div>
                    <label>ID:</label>
                    <input type="number" name="id" onChange={onChange}/>
                </div>
                <div>
                    <button onClick={onClick} type="submit">Submit</button>
                    
                </div>
            </form>
            <>
            <h3>{starData.name}</h3>
            { formState.category === "people" ?
            <>
            <p><strong>Height:</strong> {starData.height}</p>
            <p><strong>Mass:</strong> {starData.mass}kg</p>
            <p><strong>Hair Color:</strong> {starData.hair_color}</p>
            <p><strong>Skin Color:</strong> {starData.skin_color}</p>
            </>
        :
        
        <p>These aren't the droids you're looking for</p>

        
        
        }
        </>

        { formState.category === "planets" ?
            <>
            <p><strong>Climate:</strong> {starData.climate}</p>
            <p><strong>Terrain:</strong> {starData.terrain}</p>
            <p><strong>Surface Water:</strong> {starData.surface_water}</p>
            <p><strong>Population:</strong> {starData.population}</p>
            </>
        :
        
        <p></p>

        
        
        }

        { formState.category === "starships" ?
            <>
            <p><strong>Model:</strong> {starData.model}</p>
            <p><strong>Manufacturer:</strong> {starData.manufacturer}</p>
            <p><strong>Length:</strong> {starData.length}</p>
            <p><strong>Crew:</strong> {starData.crew}</p>
            </>
        :
        
        <p></p>

        
        
        }
        
        </div>
    )
}

export default Search