import React, {useEffect, useState} from 'react';
import axios from "axios";

const Display = ({pokemon, setPokemon}) => {
    // const {pokemon} = props;
    const [buttonPressed, setButtonPressed] = useState(false);

    useEffect( () => {
        const pokeNumber = Math.floor(Math.random() * 1000 + 1);
        axios.get("https://pokeapi.co/api/v2/pokemon/" + pokeNumber)
            .then( res => {
                setPokemon(res.data)
            })
            .catch( err => {
                console.log(err)
                setPokemon({name: ""});
            })
    }, [buttonPressed])

    const buttonHandler = (event) =>{
        if (buttonPressed){
            setButtonPressed(false);
        } else {
            setButtonPressed(true);
        }
    }
    const displayOutput = () => {
        if (pokemon.name !== ""){
            return (
            <>
                <img src={pokemon.sprites.front_default} className="pokemon-img"/>
                <h1>{pokemon.name}</h1>
                <ul>
                    <h3>Types</h3>
                {pokemon.types.map((item, idx) => {
                    return(
                        <li key={idx}>{item.type.name}</li>
                    )
                })}
                </ul>
                <button onClick={buttonHandler}>Next</button>
            </>
            )
        } else {
            return (
                <h1>No Pokemon Found</h1>
            )
        }
    }
    return(
        <div>
            {displayOutput()}
        </div>
    );
}
export default Display;