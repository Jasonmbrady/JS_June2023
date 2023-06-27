import React, {useState} from 'react';
import Display from './Display';
import Form from './Form';
const Main = (props) => {
    const [pokemon, setPokemon] = useState({name: ""});
    return(
        <div>
            <Display pokemon={pokemon} setPokemon={setPokemon}/>

        </div>
    );
}
export default Main;