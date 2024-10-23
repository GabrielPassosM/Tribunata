import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';


function App() {

  const [players, setPlayers] = useState([])

  const registerPlayer = (player) => {
    console.log(player)
    setPlayers(...players, player)
  }

  return (
    <div className="App">
      <Banner />
      <Forms onPlayerRegister={player => registerPlayer(player)} />
    </div>
  );
}

export default App;
