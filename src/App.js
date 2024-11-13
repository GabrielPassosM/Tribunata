import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Category from './components/Category';
import Footer from './components/Footer';


function App() {

  const [players, setPlayers] = useState([])

  const registerPlayer = (player) => {
    setPlayers([...players, player])
  }

  const categories = [
    {
      name: "Artilheiros",
      color: "#A6D157",
    },
    {
      name: "Assistentes",
      color: "#82CFFA",
    },
    {
      name: "MVPs",
      color: "#E06B69",
    },
    {
      name: "Cartões amarelos",
      color: "#ffde59",
    },
    {
      name: "Cartões vermelhos",
      color: "#ff3131",
    }
  ]

  function deletePlayer(id) {
    setPlayers(players.filter(p => p.id !== id))
  }

  return (
    <div className="App">
      <Banner />
      <Forms categories={categories.map(cat => cat.name)}  onPlayerRegister={player => registerPlayer(player)} />
      
      {categories.map(cat => 
        <Category 
          key={cat.name} 
          name={cat.name} 
          color={cat.color}
          players={players.filter(p => p.category === cat.name)}
          onDelete={deletePlayer}
        />
      )}

      <Footer/>

    </div>
  );
}

export default App;
