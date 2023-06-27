import {useState} from "react";
import './App.css';

function App() {
  // const [coin, setCoin] = useState("Not Flipped Yet!");

  // const flipCoin = () => {
  //   const flip = new Promise( (resolve, reject) => {
  //     const randFloat = Math.random();
  //     console.log(randFloat);
  //     if ( randFloat > .5){
  //       resolve("Heads");
  //     } else if (randFloat < .5){
  //       resolve("Tails");
  //     } else {
  //       reject("It landed on its side!")
  //     }
  //   })

  //   flip
  //     .then( res => {
  //       setCoin(res);
  //       return res;
  //     })
  //     .then( data => console.log(data))
  //     .catch( err => console.log(err))
  // }

    // setCoin(flip);
    // console.log(coin);
  const [pokemon, setPokemon] = useState({name: "none"});
  const fetchPokemon = () => {
    fetch("https://pokeapi.co/v2/pokemon/ditto")
      .then( res => res.json())
      .then( data => setPokemon({name: data.name, image: data.sprites.front_default}))
      .catch( err => console.log(err))
  }
  return (
    <div className="App">
      <div>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.image} alt="" />
      </div>
      <button onClick={fetchPokemon}>Fetch Pokemon!</button>
    </div>
  );
}

export default App;
