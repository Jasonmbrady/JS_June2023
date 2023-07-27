import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({username, setUsername}) => {
    const nav = useNavigate();
    const formHandler = e => {
        e.preventDefault();
        nav("/chat");
    }
    return(
        <form onSubmit={formHandler}>
            <h3>Please enter name you would like to display...</h3>
            <input type="text" name="username" value={username} onChange={ e => setUsername(e.target.value)}/>
            <button>Submit</button>
        </form>
    );
}
export default Login;