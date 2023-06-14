import './App.css';
import {useState} from "react";
import DisplayBoxes from './components/displayBoxes';
import NewBox from './components/NewBox';

function App() {
  // const [user, setUser] = useState({
  //   name: "",
  //   age: 0,
  //   hairColor: ""
  // })
  const [boxes, setBoxes] = useState([{color:"red", height: 100, width:100, display: "inline-block"}]);
  
  return (
    <div className="App">
      <DisplayBoxes boxes={boxes}/>
      <NewBox setBoxes={setBoxes} boxes={boxes}/>
    </div>
  );
}

export default App;
