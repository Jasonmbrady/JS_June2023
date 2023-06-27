import React, { useEffect } from 'react';
// import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

const Home = ({message, setWelcome, word, setWord}) => {
    const navigate = useNavigate();
    useEffect( ()=> setWelcome("Welcome!"), [])
    
    const submitHandler = (e) => {
        e.preventDefault();
        // do stuff
        navigate("/number/" + word);
    }
    return(
        <div>
            <h1>{message}</h1>
            <form onSubmit={submitHandler}>
                <label>What's the word?:</label>
                <input type="text" value={word} onChange={e => setWord(e.target.value)}/>
                <button>submit</button>
            </form>
        </div>
    );
}
export default Home;