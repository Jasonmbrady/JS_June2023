import React, {useState} from 'react';
import axios from "axios";

const Form = ({setPokemon}) => {
    const [pokeName, setPokeName] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then( res => {
                setPokemon(res.data);
                console.log(res.data);
            } )
            // .then( data => console.log(data))
            .catch( err => {
                setPokemon({name:""});
                console.log(err);
            });
    }
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Pokemon Name:</label>
                <input type="text" name="name" id="name" value={pokeName} onChange={(event) => setPokeName(event.target.value)}/>
            </div>
            <button>Search</button>
        </form>
    );
}
export default Form;