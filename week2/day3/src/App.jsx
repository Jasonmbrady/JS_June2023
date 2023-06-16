import './App.css';
import HookForm from './components/HookForm';
import UserDisplay from './components/UserDisplay';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <HookForm setUser={setUser} user={user}/>
      <UserDisplay user = {user}/>
    </div>
  );
}

export default App;
