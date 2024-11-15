import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Category from './components/Category';
import Footer from './components/Footer';


function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/players")
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }, [])

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

  function changeFavorite(id) {
    setPlayers(players.map(p => {
      if (p.id === id) {
        p.favorite = !p.favorite
      }
      return p
    }))
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
          onFavorite={changeFavorite}
        />
      )}

      <Footer/>

    </div>
  );
}

export default App;
