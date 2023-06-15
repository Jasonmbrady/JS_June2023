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
  const [boxes, setBoxes] = useState([]);
  const [boxesExist, setBoxesExist] = useState(false);
  
  return (
    <div className="App">
      <DisplayBoxes boxes={boxes} boxesExist={boxesExist}/>
      <NewBox setBoxes={setBoxes} boxes={boxes} setBoxesExist = {setBoxesExist}/>
    </div>
  );
}

export default App;
